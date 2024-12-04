import { Account } from "../models/Account";
import { useNavigate } from "react-router-dom";
import ColorSum from "../widgets/ColorSum";
import "../styles/Card.scss";

type AccountProps = {
  account: Account;
  countOrders: number;
  profitOfWeek: number;
};

export default function AccountItem({
  account,
  countOrders,
  profitOfWeek,
}: AccountProps) {
  const navigate = useNavigate();

  return (
    <div className="card clickable" onClick={() => navigate(`${account.id}`)}>
      <div className="card-header">
        <h2>{account.name}</h2>
        <div className="card-header-order">
          <h3>{countOrders}</h3>
        </div>
      </div>
      <div className="card-info">
        <div>
          <p>просадка</p>
          <p>уровень маржи</p>
          <p>баланс</p>
          <p>текущая прибыль</p>
          <p>прибыль за день</p>
          <p>прибыль за неделю</p>
        </div>
        <div>
          <ColorSum sum={account.drawdown} revert prefix="%" />
          <ColorSum sum={account.marginLevel} prefix="%" />
          <ColorSum sum={account.balance} prefix="$" />
          <ColorSum sum={account.profit} prefix="$" />
          <ColorSum sum={account.profitToday} prefix="$" />
          <ColorSum sum={profitOfWeek} prefix="$" />
        </div>
      </div>
    </div>
  );
}
