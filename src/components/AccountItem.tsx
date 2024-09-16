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
					<p>доход</p>
					<p>баланс</p>
					<p>прибыль</p>
					<p>прибыль за день</p>
					<p>прибыль за неделю</p>
				</div>
				<div>
					<ColorSum Sum={account.drawdown} Prefix="%" />
					<ColorSum Sum={account.marginLevel} Prefix="%" />
					<ColorSum Sum={account.profit} Prefix="%" />
					<ColorSum Sum={account.balance} Prefix="$" />
					<ColorSum Sum={account.profitToday} Prefix="%" />
					<ColorSum Sum={account.profitYesterday} Prefix="%" />
					<ColorSum Sum={account.profitWeek} Prefix="%" />
				</div>
			</div>
		</div>
	);
}
