import { useUserStore } from "../stores/UserStore";
import WebApp from "@twa-dev/sdk";
import Button from "../widgets/Button";
import profileImg from "../assets/profile.svg";
import "../styles/Profile.scss";

export default function Profile() {
	const username = useUserStore((s) => s.username);
	const tgId = useUserStore((s) => s.tgId);
	const photoUrl = useUserStore((s) => s.photoUrl);

	return (
		<div className="profile">
			<div className="user-container">
				<div className="img">
					<img src={photoUrl ?? profileImg} />
				</div>
				<h1>{username}</h1>
				<div className="token">
					<h1>Токен:</h1>
				</div>
			</div>
			<div className="info-container">
				<div>
					<h1>gfg</h1>
				</div>
				<div>
					<h1>gfg</h1>
				</div>
			</div>
			<Button
				onClick={() => WebApp.showAlert(`${username}`)}
				text="Реферальная система"
			/>
			<Button
				onClick={() => WebApp.showAlert(`${tgId}`)}
				text="Пригласить друзей"
			/>
		</div>
	);
}
