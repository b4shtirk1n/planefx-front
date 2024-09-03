import { useUserStore } from "../stores/UserStore";
import { writeClipboardText } from "../services/Clipboard";
import WebApp from "@twa-dev/sdk";
import Button from "../widgets/Button";
import Info from "./Info";
import balanceImg from "../assets/balance.svg";
import refBalanceImg from "../assets/ref-balance.svg";
import ClipboardImg from "../widgets/ClipboardIng";
import "../styles/Profile.scss";

export default function Profile() {
	const { username, photoUrl, user } = useUserStore();

	return (
		<div className="container profile">
			<div className="user-container">
				<div className="user">
					<div className="img">
						<img src={photoUrl} />
					</div>
					<h2 className="username">{username}</h2>
				</div>
				<div className="token">
					<h2>Токен: {user!.Token}</h2>
					<a onClick={() => writeClipboardText(user!.Token)}>
						<ClipboardImg />
					</a>
				</div>
			</div>
			<div className="info-container">
				<Info
					name="Баланс"
					amount={user!.Balance.toFixed(2)}
					imgUrl={balanceImg}
				/>
				<Info
					name="Реф. баланс"
					amount={user!.RefBalance.toFixed(2)}
					imgUrl={refBalanceImg}
				/>
			</div>
			<Button onClick={() => WebApp.showAlert(`${username}`)}>
				Реферальная система
			</Button>
			<Button onClick={() => WebApp.showAlert(`${username}`)}>
				Пригласить друзей
			</Button>
		</div>
	);
}
