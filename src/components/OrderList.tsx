import { useState } from "react";
import { useOrderStore } from "../stores/OrderStore";
import { useCommandStore } from "../stores/CommandStore";
import OrderItem from "./OrderItem";
import ProcessItem from "./ProcessItem";

export default function OrderList() {
	const { orders } = useOrderStore();
	const { processed } = useCommandStore();
	const [isModalShow, setIsModalShow] = useState<boolean>(false);

	return (
		<div className="container">
			<div className={isModalShow ? "modal" : "hide"} />
			{orders && (
				<>
					{processed && (
						<>
							<h3 className="label">В обработке</h3>
							{processed.command.map((item, i) => (
								<ProcessItem key={i} command={item} />
							))}
						</>
					)}
					{orders.openedOrders && (
						<>
							<h2 className="label">Открытые</h2>
							{orders.openedOrders.map((item) => (
								<OrderItem
									key={item.id}
									order={item}
									isOpen={true}
									ordersCount={orders.openedOrders.length}
									setIsModalBgShow={setIsModalShow}
								/>
							))}
						</>
					)}
					{orders.closedOrders && (
						<>
							<h2 className="label">Закрытые</h2>
							{orders.closedOrders.map((item) => (
								<OrderItem key={item.id} order={item} isOpen={false} />
							))}
						</>
					)}
				</>
			)}
		</div>
	);
}
