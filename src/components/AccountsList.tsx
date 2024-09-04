import { useAccountStore } from "../stores/AccountStore";
import Account from "./AccountItem";

export default function AccountsList() {
	const { accounts } = useAccountStore();
	console.log(accounts);

	return (
		<div className="container">
			{accounts.map((item) => (
				<Account account={item} />
			))}
		</div>
	);
}
