import AccountsList from "../components/AccountsList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PlusImg from "../widgets/PlusImg";

export default function AccountsPage() {
	return (
		<section>
			<Header
				text="Счета"
				addBtn={
					<a>
						<PlusImg />
					</a>
				}
			/>
			<AccountsList />
			<NavBar isAccounts />
		</section>
	);
}
