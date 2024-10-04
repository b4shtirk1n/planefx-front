import { useUserStore } from "../stores/UserStore";
import { REQUEST_DELAY } from "../constants/ApiConst";
import { useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Loading from "../widgets/Loading";
import Profile from "../components/Profile";

export default function ProfilePage() {
	const { isLoading } = useUserStore();

	const timer = setInterval(() => {
		useUserStore.getState().fetchUser();
	}, REQUEST_DELAY);

	useEffect(() => {
		return () => clearInterval(timer);
	}, []);

	return (
		<section>
			<Header text="Профиль" />
			{isLoading ? <Loading /> : <Profile />}
			<NavBar isProfile />
		</section>
	);
}
