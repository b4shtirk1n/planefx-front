import { useParams } from "react-router-dom";
import { OrderParams } from "../models/OrderParams";
import { useOrderStore } from "../stores/OrderStore";
import OrderItem from "./OrderItem";
import { OpenOrder } from "../models/OpenOrder";
import { CloseOrder } from "../models/CloseOrder";

export default function OrderList() {
	const { orders, fetchOrders } = useOrderStore();
	const { id } = useParams<OrderParams>();

	function mapOrders(orders: OpenOrder[] | CloseOrder[]) {
		return orders.map((item) => <OrderItem key={item.id} order={item} />);
	}

	setTimeout(() => {
		fetchOrders(Number(id));

		console.log(orders);
	}, 10000);

	return (
		<div className="container">
			{(mapOrders(orders!.openedOrders), mapOrders(orders!.closedOrders))}
		</div>
	);
}
