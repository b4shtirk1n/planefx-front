import { ESTIMATED_ITEM_HEIGHT } from "../constants/AppConst";
import { useAccountStore } from "../stores/AccountStore";
import RenderIfVisible from "react-render-if-visible";
import AccountItem from "./AccountItem";

export default function AccountsList() {
  const { accounts } = useAccountStore();

  return (
    <div className="container">
      {accounts?.map((item) => (
        <RenderIfVisible defaultHeight={ESTIMATED_ITEM_HEIGHT}>
          <AccountItem
            key={item.account.id}
            account={item.account}
            countOrders={item.countOrders}
            profitOfWeek={item.profitOfWeek}
          />
        </RenderIfVisible>
      ))}
    </div>
  );
}
