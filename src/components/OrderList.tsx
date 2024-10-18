import { useOrderStore } from "../stores/OrderStore";
import OrderItem from "./OrderItem";

export default function OrderList() {
	const { orders } = useOrderStore();

	return (
		<div className="container">
			{orders?.openedOrders.map((item) => (
				<OrderItem key={item.id} order={item} isOpen={true} />
			))}
			{orders?.closedOrders.map((item) => (
				<OrderItem key={item.id} order={item} isOpen={false} />
			))}
		</div>
	);
}
