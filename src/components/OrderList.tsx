import { useParams } from "react-router-dom";
import { OrderParams } from "../models/OrderParams";
import { useOrderStore } from "../stores/OrderStore";
import { useEffect } from "react";
import OrderItem from "./OrderItem";

export default function OrderList() {
	const { orders, fetchOrders } = useOrderStore();
	const { id } = useParams<OrderParams>();

	useEffect(() => {
		const timer = setTimeout(() => {
			fetchOrders(Number(id));
			console.log(orders);
		}, 10000);

		return () => {
			clearInterval(timer);
		};
	}, [orders]);

	return (
		<div className="container">
			{orders?.openedOrders.map((item) => (
				<OrderItem key={item.id} order={item} />
			))}
		</div>
	);
}
