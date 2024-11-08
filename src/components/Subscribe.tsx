import { useSubscribeStore } from "../stores/SubscribeStore";
import Button from "../widgets/Button";
import SubscribeList from "./SubscribeList";
import "../styles/Subscribe.scss";

export default function Subscribe() {
  const { checkout } = useSubscribeStore();

  return (
    <div className="subscribe">
      <Button isPrimary>Мои подписки</Button>
      <SubscribeList />
      <Button isPrimary onClick={() => checkout(1)}>
        Оформить
      </Button>
    </div>
  );
}
