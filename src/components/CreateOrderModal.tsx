import { useServiceStore } from "../stores/ServiceStore";
import CreateAccount from "./CreateOrder";
import "../styles/CreateOrder.scss";
import Loading from "../widgets/Loading";

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
