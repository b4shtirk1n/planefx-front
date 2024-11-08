import { useSubscribeStore } from "../stores/SubscribeStore";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Subscribe from "../components/Subscribe";
import Loading from "../widgets/Loading";

useSubscribeStore.getState().fetchSubscribes();

export default function SubscribePage() {
  const { isLoading } = useSubscribeStore();

  return (
    <section>
      <Header text="Подписки" />
      {isLoading ? <Loading /> : <Subscribe />}
      <NavBar isSubscribes />
    </section>
  );
}
