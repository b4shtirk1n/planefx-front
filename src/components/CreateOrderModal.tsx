import { useServiceStore } from "../stores/ServiceStore";
import { CreateOrderProps } from "../models/CreateOrderProps";
import CreateAccount from "./CreateOrder";
import Loading from "../widgets/Loading";
import "../styles/CreateOrder.scss";

useServiceStore.getState().fetchTickers();

export default function CreateOrderModal({
	isModalShow,
	setIsModalShow,
}: CreateOrderProps) {
	const { isLoading } = useServiceStore();

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div
						className={isModalShow ? "modal" : "hide"}
						onClick={() => setIsModalShow(false)}
					></div>
					<CreateAccount
						isModalShow={isModalShow}
						setIsModalShow={setIsModalShow}
					/>
				</>
			)}
		</>
	);
}
