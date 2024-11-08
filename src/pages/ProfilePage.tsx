import { useUserStore } from "../stores/UserStore";
import { REQUEST_DELAY } from "../constants/ApiConst";
import { useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Loading from "../widgets/Loading";
import Profile from "../components/Profile";

export default function ProfilePage() {
  const { user, fetchUser } = useUserStore();

  useEffect(() => {
    fetchUser();
    const timer = setInterval(() => {
      fetchUser();
    }, REQUEST_DELAY);
    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <Header text="Профиль" />
      {user ? <Profile /> : <Loading />}
      <NavBar isProfile />
    </section>
  );
}
