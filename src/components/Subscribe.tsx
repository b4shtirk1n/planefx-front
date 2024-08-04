import { useSubscribeStore } from "../stores/SubscribeStore";
import Button from "../widgets/Button";
import SubscribeList from "./SubscribeList";
import "../styles/Subscribe.scss";

export default function Subscribe() {
	const { checkout } = useSubscribeStore();

	return (
		<div className="subscribe">
			<Button>Мои подписки</Button>
			<SubscribeList />
			<Button onClick={() => checkout(1)}>Оформить</Button>
		</div>
	);
}
