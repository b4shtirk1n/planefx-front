import { CommandType } from "../enums/CommandType";
import { CommandRequest } from "../requests/CommandRequest";
import ColorSum from "../widgets/ColorSum";

type ProcessProps = {
	command: CommandRequest;
};

export default function ProcessItem({ command }: ProcessProps) {
	return (
		<div className="card">
			<div className="card-header">
				<h2>{command.type === CommandType.Open ? "открытие" : "закрытие"}</h2>
			</div>
			<div className="card-info">
				<div>
					<p>тип</p>
					{command.type === CommandType.Open ? (
						<>
							<p>тип сделки</p>
							<p>объём</p>
							<p>цена</p>
						</>
					) : (
						<p>сделка</p>
					)}
				</div>
				<div>
					<h3>тип</h3>
					{command.type === CommandType.Open ? (
						<>
							<h3>{command.orderType}</h3>
							<ColorSum Sum={command.volume!} Prefix="%" />
							<ColorSum Sum={command.price!} Prefix="$" />
						</>
					) : (
						<h3>{command.order}</h3>
					)}
				</div>
			</div>
		</div>
	);
}
