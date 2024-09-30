import { useEffect } from "react";
import { useAccountStore } from "../stores/AccountStore";
import { REQUEST_DELAY } from "../constants/ApiConst";
import AccountsList from "../components/AccountsList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Loading from "../widgets/Loading";

export default function AccountsPage() {
	const { accounts, fetchAccounts } = useAccountStore();

	useEffect(() => {
		console.log(1);
		const timer = setInterval(() => {
			fetchAccounts();
		}, REQUEST_DELAY);

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
