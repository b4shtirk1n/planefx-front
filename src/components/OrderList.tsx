import { useParams } from "react-router-dom";
import { OrderParams } from "../models/OrderParams";
import { useOrderStore } from "../stores/OrderStore";
import { useEffect } from "react";
import OrderItem from "./OrderItem";
import Loading from "../widgets/Loading";

export default function OrderList() {
	const { orders, isLoading, fetchOrders } = useOrderStore();
	const { id } = useParams<OrderParams>();

	useEffect(() => {
		const timer = setTimeout(() => {
			fetchOrders(Number(id));
			console.log(orders);
			console.log(isLoading);
		}, 10000);

		return () => {
			clearInterval(timer);
		};
	}, [orders, isLoading]);

	return (
		<div className="container">
			{orders ? (
				orders.openedOrders.map((item) => (
					<OrderItem key={item.id} order={item} />
				))
			) : (
				<Loading />
			)}
		</div>
	);
}
