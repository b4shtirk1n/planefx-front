import { useState } from "react";
import { useOrderStore } from "../stores/OrderStore";
import { useCommandStore } from "../stores/CommandStore";
import OrderItem from "./OrderItem";
import ProcessItem from "./ProcessItem";
import RenderIfVisible from "react-render-if-visible";

export default function OrderList() {
	const { orders } = useOrderStore();
	const { processed } = useCommandStore();
	const [isModalShow, setIsModalShow] = useState<boolean>(false);

	return (
		<div className="container order">
			<div className={isModalShow ? "modal" : "hide"} />
			{orders && (
				<>
					{processed && (
						<>
							<h3 className="label">В обработке</h3>
							{processed.command.map((item, i) => (
								<RenderIfVisible>
									<ProcessItem key={i} command={item} />
								</RenderIfVisible>
							))}
						</>
					)}
					{orders.openedOrders.length > 0 && (
						<>
							<h2 className="label">Открытые</h2>
							{orders.openedOrders.map((item) => (
								<RenderIfVisible>
									<OrderItem
										key={item.id}
										order={item}
										isOpen={true}
										ordersCount={orders.openedOrders.length}
										setIsModalBgShow={setIsModalShow}
									/>
								</RenderIfVisible>
							))}
						</>
					)}
					{orders.closedOrders.length > 0 && (
						<>
							<h2 className="label">Закрытые</h2>
							{orders.closedOrders.map((item) => (
								<RenderIfVisible>
									<OrderItem key={item.id} order={item} isOpen={false} />
								</RenderIfVisible>
							))}
						</>
					)}
				</>
			)}
		</div>
	);
}
