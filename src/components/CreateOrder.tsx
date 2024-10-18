import { useState } from "react";
import { useServiceStore } from "../stores/ServiceStore";
import { useOrderStore } from "../stores/OrderStore";
import { CommandRequest } from "../models/CommandRequest";
import { OrderParams } from "../models/OrderParams";
import { useParams } from "react-router-dom";
import { CommandType } from "../enums/CommandType";
import { useCommandStore } from "../stores/CommandStore";
import Button from "../widgets/Button";
import Loading from "../widgets/Loading";

type CreateOrderProps = {
	isModalShow: boolean;
	setIsModalShow(flag: boolean): void;
};

export default function CreateAccount({
	isModalShow,
	setIsModalShow,
}: CreateOrderProps) {
	const { id } = useParams<OrderParams>();
	const { tickers } = useServiceStore();
	const { types } = useOrderStore();
	const { isLoading, CreateCommand } = useCommandStore();

	const [volumeParse, setVolumeParse] = useState<string>("");
	const [priceParse, setPriceParse] = useState<string>("");
	const [command, setCommand] = useState<CommandRequest>(
		new CommandRequest(
			Number(id),
			types[0],
			CommandType.Open,
			undefined,
			tickers![0],
			0
		)
	);

	function handleClick(command: CommandRequest) {
		CreateCommand(command);
		setIsModalShow(false);
	}

	return (
		<div className={isModalShow ? "create-order" : "hide"}>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div>
						<p>Объём</p>
						<input
							type="text"
							pattern="[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)"
							value={volumeParse}
							onChange={(e) =>
								setVolumeParse(
									e.target.validity.valid ? e.target.value : volumeParse
								)
							}
						/>
					</div>
					{command.orderType === "Buy limit" && (
						<div>
							<p>Цена</p>
							<input
								type="text"
								pattern="[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)"
								value={priceParse}
								onChange={(e) =>
									setPriceParse(
										e.target.validity.valid ? e.target.value : volumeParse
									)
								}
							/>
						</div>
					)}
					<div>
						<p>Тикер</p>
						<select
							value={command.ticker}
							onChange={(e) =>
								setCommand({ ...command, ticker: e.target.value })
							}
						>
							{tickers?.map((item) => (
								<option value={item}>{item}</option>
							))}
						</select>
					</div>
					<div>
						<p>Тип</p>
						<select
							value={command.orderType}
							onChange={(e) =>
								setCommand({ ...command, orderType: e.target.value })
							}
						>
							{types?.map((item) => (
								<option value={item}>{item}</option>
							))}
						</select>
					</div>
					<Button
						onClick={() =>
							handleClick({
								...command,
								volume: Number(volumeParse),
								price: Number(priceParse),
							})
						}
					>
						Открыть сделку
					</Button>
				</>
			)}
		</div>
	);
}
