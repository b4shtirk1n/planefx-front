import Button from "../widgets/Button";
import "../styles/Confirm.scss";

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
	return (
		<>
			<div className={isModalShow ? "confirm" : "hide"}>
				<h3>{id} Сделка закроется через некоторое время!</h3>
				<div>
					<Button onClick={() => {}}>Закрыть</Button>
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
