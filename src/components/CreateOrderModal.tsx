import { useServiceStore } from "../stores/ServiceStore";
import { CreateOrderProps } from "../props/CreateOrderProps";
import CreateAccount from "./CreateOrder";
import Loading from "../widgets/Loading";

useServiceStore.getState().fetchTickers();

export default function CreateOrderModal({
	ordersCount,
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
						ordersCount={ordersCount}
						isModalShow={isModalShow}
						setIsModalShow={setIsModalShow}
					/>
				</>
			)}
		</>
	);
}
