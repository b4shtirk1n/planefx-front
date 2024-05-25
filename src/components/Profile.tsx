import WebApp from "@twa-dev/sdk";
import Button from "../widgets/Button";
import { useUserStore } from "../stores/UserStore";
import "../styles/Profile.scss";

export default function Profile() {
	const username = useUserStore((s) => s.username);
	const tgId = useUserStore((s) => s.tgId);

	return (
		<div className="profile">
			<h1>Добро пожаловать</h1>
			<div className="content-container">
				<Button
					onClick={() => WebApp.showAlert(`${username}`)}
					text="показать username"
				/>
				<Button
					onClick={() => WebApp.showAlert(`${tgId}`)}
					text="показать id"
				/>
			</div>
		</div>
	);
}
