import WebApp from "@twa-dev/sdk";
import Button from "../widgets/Button";
import "../styles/Profile.scss";

export default function Profile() {
	return (
		<div className="profile">
			<h1>Добро пожаловать</h1>
			<div className="content-container">
				<Button
					onClick={() =>
						WebApp.showAlert(`${WebApp.initDataUnsafe.user?.username}`)
					}
					text="показать username"
				/>
				<Button
					onClick={() => WebApp.showAlert(`${WebApp.initDataUnsafe.user?.id}`)}
					text="показать id"
				/>
			</div>
		</div>
	);
}
