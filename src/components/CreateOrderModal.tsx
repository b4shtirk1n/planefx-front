import { useServiceStore } from "../stores/ServiceStore";
import { useOrderStore } from "../stores/OrderStore";
import Loading from "../widgets/Loading";
import CreateAccount from "./CreateOrder";
import "../styles/CreateOrder.scss";

type CreateOrderProps = {
	isModalShow: boolean;
	setIsModalShow(flag: boolean): void;
};

useServiceStore.getState().fetchTickers();
useOrderStore.getState().fetchTypes();

export default function CreateOrderModal({
	isModalShow,
	setIsModalShow,
}: CreateOrderProps) {
	const { isLoading } = useServiceStore();

	return (
		<>
			<div
				className={isModalShow ? "modal" : "hide"}
				onClick={() => setIsModalShow(false)}
			></div>
			{isLoading && useOrderStore.getState().isLoading ? (
				<Loading />
			) : (
				<CreateAccount isModalShow={isModalShow} />
			)}
		</>
	);
}
