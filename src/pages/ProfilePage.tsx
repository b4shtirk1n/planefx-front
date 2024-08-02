import { useUserStore } from "../stores/UserStore";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Loading from "../widgets/Loading";
import Profile from "../components/Profile";

useUserStore.getState().fetchUser();

export default function ProfilePage() {
	const { isLoading } = useUserStore();

	return (
		<section>
			<Header text="Профиль" />
			{isLoading ? <Loading /> : <Profile />}
			<NavBar isProfile />
		</section>
	);
}
