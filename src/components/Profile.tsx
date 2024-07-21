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
	const { username, photoUrl, user, loading, error, fetchUser } =
		useUserStore();

	function test() {
		console.log(loading);
		console.log(error);
		fetchUser();
		console.log(loading);
		WebApp.showAlert(`${username}`);
	}

	return (
		<div className="container profile">
			<div className="user-container">
				<div className="user">
					<div className="img">
						<img src={photoUrl} />
					</div>
					<h1 className="username">{username}</h1>
				</div>
				<div className="token">
					<h1>Токен: {user?.Token}</h1>
					<a onClick={() => writeClipboardText(user!.Token)}>
						<ClipboardImg />
					</a>
				</div>
			</div>
			<div className="info-container">
				<Info name="Баланс" amount={user?.Username ?? ""} imgUrl={balanceImg} />
				<Info
					name="Реф. баланс"
					amount={user?.Username ?? ""}
					imgUrl={refBalanceImg}
				/>
			</div>
			<Button onClick={() => test} text="Реферальная система" />
			<Button
				onClick={() => WebApp.showAlert(`${photoUrl}`)}
				text="Пригласить друзей"
			/>
		</div>
	);
}
