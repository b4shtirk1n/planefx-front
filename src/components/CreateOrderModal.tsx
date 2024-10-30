import { useServiceStore } from "../stores/ServiceStore";
import { CreateOrderProps } from "../props/CreateOrderProps";
import CreateAccount from "./CreateOrder";

useServiceStore.getState().fetchTickers();

export default function CreateOrderModal({
	ordersCount,
	isModalShow,
	setIsModalShow,
}: CreateOrderProps) {
	return (
		<>
			<div
				className={isModalShow ? "modal" : "hide"}
				onClick={() => setIsModalShow(false)}
			></div>
			<CreateAccount
				ordersCount={ordersCount}
				isModalShow={isModalShow}
				setIsModalShow={setIsModalShow}
			/>
		</>
	);
}
