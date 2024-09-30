import { useAccountStore } from "../stores/AccountStore";
import AccountItem from "./AccountItem";

export default function AccountsList() {
	const { accounts } = useAccountStore();

	return (
		<div className="container">
			{accounts?.map((item) => (
				<AccountItem
					key={item.account.id}
					account={item.account}
					countOrders={item.countOrders}
				/>
			))}
		</div>
	);
}
