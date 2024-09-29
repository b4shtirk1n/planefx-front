import { useEffect } from "react";
import { useAccountStore } from "../stores/AccountStore";
import { REQUEST_DELAY } from "../constants/ApiConst";
import AccountsList from "../components/AccountsList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Loading from "../widgets/Loading";

export default function AccountsPage() {
	const { accounts, isLoading, fetchAccounts } = useAccountStore();

	useEffect(() => {
		fetchAccounts();
		console.log(isLoading);
		const timer = setTimeout(() => {}, REQUEST_DELAY);

		return () => {
			clearInterval(timer);
		};
	}, [accounts]);

	return (
		<section>
			<Header text="Счета" />
			{accounts ? <AccountsList /> : <Loading />}
			<NavBar isAccounts />
		</section>
	);
}
