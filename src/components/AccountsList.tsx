import { useAccountStore } from "../stores/AccountStore";
import Account from "./AccountItem";

export default function AccountsList() {
	const { accounts } = useAccountStore();

	return (
		<div className="container">
			{accounts.map((item) => (
				<Account
					key={item.account.id}
					account={item.account}
					countOrders={item.countOrders}
				/>
			))}
		</div>
	);
}
