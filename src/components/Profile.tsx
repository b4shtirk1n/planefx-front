import { useUserStore } from "../stores/UserStore";
import { writeClipboardText } from "../helpers/Clipboard";
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
					<h2>Токен: {user!.token}</h2>
					<a onClick={() => writeClipboardText(user!.token)}>
						<ClipboardImg />
					</a>
				</div>
			</div>
			<div className="info-container">
				<Info name="Баланс" amount={user!.mainBalance} imgUrl={balanceImg} />
				<Info
					name="Реф. баланс"
					amount={user!.referralBalance}
					imgUrl={refBalanceImg}
				/>
			</div>
			{user?.parent === undefined ? (
				<Button isPrimary onClick={() => WebApp.showAlert(`${username}`)}>
					Реферальная система
				</Button>
			) : (
				<></>
			)}
			<Button isPrimary onClick={() => WebApp.showAlert(`${username}`)}>
				Пригласить друзей
			</Button>
		</div>
	);
}
