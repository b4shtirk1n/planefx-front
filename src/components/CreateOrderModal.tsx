import { useServiceStore } from "../stores/ServiceStore";
import Loading from "../widgets/Loading";
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
	const { isLoading } = useServiceStore();

	return (
		<>
			<div
				className={isModalShow ? "modal" : "hide"}
				onClick={() => setIsModalShow(false)}
			></div>
			{isLoading ? <Loading /> : <CreateAccount isModalShow={isModalShow} />}
		</>
	);
}
