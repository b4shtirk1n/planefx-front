import Button from "../widgets/Button";
import SubscribeList from "./SubscribeList";
import "../styles/Subscribe.scss";

export default function Subscribe() {
	return (
		<div className="subscribe">
			<Button text="Реферальная система" />
			<SubscribeList />
			<Button text="Реферальная система" />
		</div>
	);
}
