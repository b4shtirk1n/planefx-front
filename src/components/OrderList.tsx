import OrderItem from "./OrderItem";
import { useOrderStore } from "../stores/OrderStore";

export default function OrderList() {
	const { orders } = useOrderStore();

	return (
		<div className="container">
			{orders?.openedOrders.map((item) => (
				<OrderItem key={item.id} order={item} isOpen={true} />
			))}
		</div>
	);
}
