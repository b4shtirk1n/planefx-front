import WebApp from "@twa-dev/sdk";
import Button from "../widgets/Button";
import "../styles/Profile.scss";

export default function Profile() {
	return (
		<section className="profile-section">
			<h1>Добро пожаловать</h1>
			<Button
				onClick={() => WebApp.showAlert(`${WebApp.initDataUnsafe.user?.id}`)}
				text="показать id"
			/>
		</section>
	);
}
