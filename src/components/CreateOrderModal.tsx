import CreateAccount from "./CreateOrder";
import "../styles/CreateOrder.scss";

type CreateOrderProps = {
	isModalShow: boolean;
	setIsModalShow(flag: boolean): void;
};

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
			<CreateAccount
				isModalShow={isModalShow}
				setIsModalShow={setIsModalShow}
			/>
		</>
	);
}
