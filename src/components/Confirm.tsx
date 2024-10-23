import Button from "../widgets/Button";
import "../styles/Confirm.scss";
import { useOrderStore } from "../stores/OrderStore";

type ConfirmProps = {
	id: number;
	isModalShow: boolean;
	setIsModalShow(flag: boolean): void;
	setIsModalBgShow(flag: boolean): void;
};

export default function Confirm({
	id,
	isModalShow,
	setIsModalShow,
	setIsModalBgShow,
}: ConfirmProps) {
	function onSubmit() {
		useOrderStore.getState().closeOrder(id);
		setIsModalShow(false);
		setIsModalBgShow(false);
	}

	return (
		<>
			<div className={isModalShow ? "confirm" : "hide"}>
				<h3>Сделка закроется через некоторое время!</h3>
				<div>
					<Button isPrimary onClick={onSubmit}>
						Закрыть
					</Button>
					<Button
						isPrimary={false}
						onClick={() => (setIsModalShow(false), setIsModalBgShow(false))}
					>
						Отмена
					</Button>
				</div>
			</div>
		</>
	);
}
