import { useAccountStore } from "../stores/AccountStore";
import RenderIfVisible from "react-render-if-visible";
import AccountItem from "./AccountItem";

export default function AccountsList() {
	const { accounts } = useAccountStore();

	return (
		<div className="container">
			{accounts?.map((item) => (
				<RenderIfVisible>
					<AccountItem
						key={item.account.id}
						account={item.account}
						countOrders={item.countOrders}
					/>
				</RenderIfVisible>
			))}
		</div>
	);
}
