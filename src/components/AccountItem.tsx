import { Account } from "../models/Account";
import "../styles/Account.scss";

type accountProps = {
	account: Account;
};

export default function AccountItem({ account }: accountProps) {
	return (
		<div className="account">
			<div className="account-header">
				<h2>{account.Name}</h2>
				<div className="account-header-order">
					<h3>{account.Count}</h3>
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
					<h3>1</h3>
					<h3>1</h3>
					<h3>1</h3>
					<h3>1</h3>
				</div>
			</div>
		</div>
	);
}
