import { useEffect } from "react";
import { useAccountStore } from "../stores/AccountStore";
import { REQUEST_DELAY } from "../constants/ApiConst";
import AccountsList from "../components/AccountsList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Loading from "../widgets/Loading";

export default function AccountsPage() {
	const { accounts, fetchAccounts } = useAccountStore();

	async function delay() {
		await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY));
	}

	useEffect(() => {
		fetchAccounts();
		console.log(2);
		delay();
	}, [accounts]);

	return (
		<section>
			<Header text="Счета" />
			{accounts ? <AccountsList /> : <Loading />}
			<NavBar isAccounts />
		</section>
	);
}
