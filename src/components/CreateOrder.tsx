import { useState } from "react";
import { useServiceStore } from "../stores/ServiceStore";
import { useOrderStore } from "../stores/OrderStore";
import { CommandRequest } from "../models/CommandRequest";
import { OrderParams } from "../models/OrderParams";
import { useParams } from "react-router-dom";
import { useCommandStore } from "../stores/CommandStore";
import Button from "../widgets/Button";

type CreateOrderProps = {
	isModalShow: boolean;
};

export default function CreateAccount({ isModalShow }: CreateOrderProps) {
	const [command, setCommand] = useState<CommandRequest>(new CommandRequest());
	const { tickers } = useServiceStore();
	const { types } = useOrderStore();
	const { id } = useParams<OrderParams>();
	const { CreateCommand } = useCommandStore();

	return (
		<div className={isModalShow ? "create-account" : "hide"}>
			<div>
				<p>Объём</p>
				<input
					type="text"
					pattern="[0-9]*"
					value={command?.volume}
					onChange={(e) =>
						setCommand({
							...command,
							volume: e.target.validity.valid
								? Number(e.target.value)
								: Number(""),
						})
					}
				/>
			</div>
			<div>
				<p>Тикер</p>
				<select
					onChange={(e) => setCommand({ ...command, ticker: e.target.value })}
				>
					{tickers?.map((item) => (
						<option value={item}>{item}</option>
					))}
				</select>
			</div>
			<div>
				<p>Тип</p>
				<select
					onChange={(e) =>
						setCommand({ ...command, orderType: e.target.value })
					}
				>
					{types?.map((item) => (
						<option value={item}>{item}</option>
					))}
				</select>
			</div>
			<Button onClick={() => CreateCommand(command, Number(id))}>
				Открыть сделку
			</Button>
		</div>
	);
}