import AccountsList from "../components/AccountsList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Button from "../widgets/Button";
import PlusImg from "../widgets/PlusImg";

export default function AccountsPage() {
	return (
		<section>
			<Header text="Счета" addBtn={<Button child={<PlusImg />} />} />
			<AccountsList />
			<NavBar isAccounts />
		</section>
	);
}
