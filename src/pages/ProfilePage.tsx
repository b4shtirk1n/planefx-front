import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import "../styles/ProfilePage.scss";

export default function ProfilePage() {
	return (
		<section>
			<Header text="Профиль" />
			<Profile />
			<NavBar isProfile={true} />
		</section>
	);
}
