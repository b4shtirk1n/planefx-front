import Button from "../widgets/Button";
import "../styles/Confirm.scss";

type ConfirmProps = {
	id: number;
	isModalShow: boolean;
	setIsModalShow(flag: boolean): void;
	process(): void;
};

export default function Confirm({
	id,
	isModalShow,
	setIsModalShow,
	process,
}: ConfirmProps) {
	return (
		<>
			<div className={isModalShow ? "confirm" : "hide"}>
				<h3>{id} Сделка закроется через некоторое время!</h3>
				<div>
					<Button onClick={process}>Да</Button>
					<Button onClick={() => setIsModalShow(false)}>Нет</Button>
				</div>
			</div>
		</>
	);
}
