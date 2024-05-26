import { useUserStore } from "../stores/UserStore";
import WebApp from "@twa-dev/sdk";
import Button from "../widgets/Button";
import Info from "./Info";
import "../styles/Profile.scss";

export default function Profile() {
	const username = useUserStore((s) => s.username);
	const photoUrl = useUserStore((s) => s.photoUrl);

	return (
		<div className="container profile">
			<div className="user-container">
				<div className="img">
					<img src={photoUrl} />
				</div>
				<h1>{username}</h1>
				<div className="token">
					<h1>Токен:</h1>
				</div>
			</div>
			<div className="info-container">
				<Info name="Баланс" amount={"200.00"} imgUrl={photoUrl} />
				<Info name="Реф. баланс" amount={"200.00"} imgUrl="" />
			</div>
			<Button
				onClick={() => WebApp.showAlert(`${username}`)}
				text="Реферальная система"
			/>
			<Button
				onClick={() => WebApp.showAlert(`${photoUrl}`)}
				text="Пригласить друзей"
			/>
		</div>
	);
}
