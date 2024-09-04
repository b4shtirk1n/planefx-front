import { useAccountStore } from "../stores/AccountStore";
import AccountsList from "../components/AccountsList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Loading from "../widgets/Loading";
import { useUserStore } from "../stores/UserStore";

export default function AccountsPage() {
	const { user } = useUserStore();
	console.log(user);
	useAccountStore.getState().fetchAccounts(user?.id);

	const { isLoading } = useAccountStore();

	return (
		<section>
			<Header text="Счета" />
			{isLoading ? <Loading /> : <AccountsList />}
			<NavBar isAccounts />
		</section>
	);
}
