import { useServiceStore } from "../stores/ServiceStore";
import CreateAccount from "./CreateOrder";
import "../styles/CreateOrder.scss";

type CreateOrderProps = {
	isModalShow: boolean;
	setIsModalShow(flag: boolean): void;
};

useServiceStore.getState().fetchTickers();

export default function CreateOrderModal({
	isModalShow,
	setIsModalShow,
}: CreateOrderProps) {
	return (
		<>
			<div
				className={isModalShow ? "modal" : "hide"}
				onClick={() => setIsModalShow(false)}
			></div>
			<CreateAccount isModalShow={isModalShow} />
		</>
	);
}
