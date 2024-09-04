import { useAccountStore } from "../stores/AccountStore";
import { useUserStore } from "../stores/UserStore";
import AccountsList from "../components/AccountsList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Loading from "../widgets/Loading";

useUserStore.getState().fetchUser();
useAccountStore.getState().fetchAccounts();

export default function AccountsPage() {
	const { user } = useUserStore();
	const { isLoading } = useAccountStore();

	console.log(user);

	return (
		<section>
			<Header text="Счета" />
			{isLoading ? <Loading /> : <AccountsList />}
			<NavBar isAccounts />
		</section>
	);
}
