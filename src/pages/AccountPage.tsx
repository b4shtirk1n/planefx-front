import { useEffect, useState } from "react";
import { useAccountStore } from "../stores/AccountStore";
import { REQUEST_DELAY } from "../constants/ApiConst";
import AccountsList from "../components/AccountsList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Loading from "../widgets/Loading";
import CreateAccountModal from "../components/CreateAccountModal";
import PlusImg from "../widgets/PlusImg";

export default function AccountsPage() {
	const { accounts, fetchAccounts } = useAccountStore();
	const [isModalShow, setIsModalShow] = useState<boolean>(false);

	useEffect(() => {
		fetchAccounts();
		const timer = setInterval(() => {
			fetchAccounts();
		}, REQUEST_DELAY);
		return () => clearInterval(timer);
	}, []);

	return (
		<section>
			<Header
				text="Счета"
				rightBtn={
					<a onClick={() => setIsModalShow(true)}>
						<PlusImg />
					</a>
				}
			/>
			<CreateAccountModal
				isModalShow={isModalShow}
				setIsModalShow={setIsModalShow}
			/>
			{accounts ? <AccountsList /> : <Loading />}
			<NavBar isAccounts />
		</section>
	);
}
