import { useState } from "react";
import { useServiceStore } from "../stores/ServiceStore";
import { CreateOrderRequest } from "../models/CreateOrderRequestÏ";
import { useOrderStore } from "../stores/OrderStore";

type CreateOrderProps = {
	isModalShow: boolean;
};

export default function CreateAccount({ isModalShow }: CreateOrderProps) {
	const [createOrder, setCreateOrder] = useState<CreateOrderRequest>();
	const { tickers } = useServiceStore();
	const { types } = useOrderStore();

	return (
		<div className={isModalShow ? "create-account" : "hide"}>
			<div>
				<p>Объём</p>
				<input
					type="number"
					value={createOrder?.volume}
					onChange={(e) =>
						setCreateOrder({ ...createOrder, volume: e.target.value })
					}
				/>
			</div>
			<div>
				<p>Тикер</p>
				<select
					onChange={(e) =>
						setCreateOrder({ ...createOrder, ticker: e.target.value })
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
					onChange={(e) =>
						setCreateOrder({ ...createOrder, type: e.target.value })
					}
				>
					{types?.map((item) => (
						<option value={item.name}>{item.name}</option>
					))}
				</select>
			</div>
		</div>
	);
}
