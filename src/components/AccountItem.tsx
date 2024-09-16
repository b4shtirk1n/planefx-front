import { Account } from "../models/Account";
import ColorSum from "../widgets/ColorSum";
import "../styles/Account.scss";

type accountProps = {
	account: Account;
	countOrders: number;
};

export default function AccountItem({ account, countOrders }: accountProps) {
	return (
		<div className="account">
			<div className="account-header">
				<h2>{account.name}</h2>
				<div className="account-header-order">
					<h3>{countOrders}</h3>
				</div>
			</div>
			<div className="account-info">
				<div>
					<p>просадка</p>
					<p>маржа</p>
					<p>прибыль</p>
					<p>баланс</p>
				</div>
				<div>
					<ColorSum Sum={account.marginLevel} />
					<ColorSum Sum={account.drawdown} />
					<ColorSum Sum={account.profit} />
					<ColorSum Sum={account.balance} />
				</div>
			</div>
		</div>
	);
}
