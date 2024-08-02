import { useAccountStore } from "../stores/AccountStore";
import AccountsList from "../components/AccountsList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PlusImg from "../widgets/PlusImg";
import Loading from "../widgets/Loading";

useAccountStore.getState().fetchAccounts();

export default function AccountsPage() {
	const { isLoading } = useAccountStore();

	return (
		<section>
			<Header
				text="Счета"
				rightBtn={
					<a>
						<PlusImg />
					</a>
				}
			/>
			{isLoading ? <Loading /> : <AccountsList />}
			<NavBar isAccounts />
		</section>
	);
}
