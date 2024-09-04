import { Account } from "../models/Account";
import ColorSum from "../widgets/ColorSum";
import "../styles/Account.scss";

type accountProps = {
	account: Account;
};

export default function AccountItem({ account }: accountProps) {
	console.log(account.openedOrders);
	return (
		<div className="account">
			<div className="account-header">
				<h2>{account.name}</h2>
				<div className="account-header-order">
					<h3>{account.openedOrders.length}</h3>
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
					<ColorSum
						Sum={account.openedOrders.reduce(
							(prev, cur) => prev + cur.priceOpened,
							0
						)}
					/>
					<ColorSum Sum={0} />
					<ColorSum Sum={-100} />
					<ColorSum Sum={1} />
				</div>
			</div>
		</div>
	);
}
