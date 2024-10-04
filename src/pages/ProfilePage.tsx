import { useUserStore } from "../stores/UserStore";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Loading from "../widgets/Loading";
import Profile from "../components/Profile";
import { REQUEST_DELAY } from "../constants/ApiConst";
import { useEffect } from "react";

const timer = setInterval(() => {
	useUserStore.getState().fetchUser();
}, REQUEST_DELAY);

export default function ProfilePage() {
	const { isLoading } = useUserStore();

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
