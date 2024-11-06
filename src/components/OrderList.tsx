import { ESTIMATED_ITEM_HEIGHT } from "../constants/AppConst";
import { useCommandStore } from "../stores/CommandStore";
import { useOrderStore } from "../stores/OrderStore";
import { useState } from "react";
import OrderItem from "./OrderItem";
import ProcessItem from "./ProcessItem";
import RenderIfVisible from "react-render-if-visible";

export default function OrderList() {
	const { orders } = useOrderStore();
	const { processed } = useCommandStore();
	const [isModalShow, setIsModalShow] = useState<boolean>(false);

	// const openedData = orders?.paginationOpenedOrders.data;
	// const closedData = orders?.paginationClosedOrders.data;

	return (
		<div className="container order">
			<div className={isModalShow ? "modal" : "hide"} />
			{orders && (
				/* openedData && closedData && */ <>
					{processed &&
						processed.ordersCount === orders.OpenedOrders.length && (
							<>
								<h2 className="label">В обработке</h2>
								{processed.command.map((item, i) => (
									<RenderIfVisible defaultHeight={ESTIMATED_ITEM_HEIGHT}>
										<ProcessItem key={i} command={item} />
									</RenderIfVisible>
								))}
							</>
						)}
					{orders.OpenedOrders.length > 0 && (
						<>
							<h2 className="label">Открытые</h2>
							{orders.OpenedOrders.map((item) => (
								<RenderIfVisible defaultHeight={ESTIMATED_ITEM_HEIGHT}>
									<OrderItem
										key={item.id}
										order={item}
										isOpen={true}
										ordersCount={orders.OpenedOrders.length}
										setIsModalBgShow={setIsModalShow}
									/>
								</RenderIfVisible>
							))}
						</>
					)}
					{orders.ClosedOrders.length > 0 && (
						<>
							<h2 className="label">Закрытые</h2>
							{orders.ClosedOrders.map((item) => (
								<RenderIfVisible defaultHeight={ESTIMATED_ITEM_HEIGHT}>
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
