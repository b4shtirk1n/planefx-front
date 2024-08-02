import { useSubscribeStore } from "../stores/SubscribeStore";
import { Subscribe } from "../models/Subscribe";
import SubImg from "../widgets/SubImg";
import PlusImg from "../widgets/PlusImg";
import "../styles/Subscribe.scss";

type SubscribeItemProps = {
	subscribe: Subscribe;
};

export default function SubscribeItem({ subscribe }: SubscribeItemProps) {
	const { addToCart, removeToCart } = useSubscribeStore();

	return (
		<div className="subscribe-item">
			<div>
				<h1 className="accounts-count">{subscribe.AccountsCount}</h1>
				<h1>{subscribe.AccountsCount == 3 ? "счёта" : "счетов"}</h1>
			</div>
			<h1>{subscribe.Price} / день</h1>
			<div className="subscribe-counter">
				<a onClick={() => removeToCart(subscribe.Id)}>
					<SubImg />
				</a>
				<h1>{subscribe.Count}</h1>
				<a onClick={() => addToCart(subscribe.Id)}>
					<PlusImg />
				</a>
			</div>
		</div>
	);
}
