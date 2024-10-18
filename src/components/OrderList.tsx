import { useState } from "react";
import { useOrderStore } from "../stores/OrderStore";
import Confirm from "./Confirm";
import OrderItem from "./OrderItem";

export default function OrderList() {
	const { orders } = useOrderStore();
	const [isModalShow, setIsModalShow] = useState<boolean>(false);

	return (
		<div className="container">
			{orders?.openedOrders.map((item) => (
				<Confirm
					id={item.id}
					isModalShow={isModalShow}
					setIsModalShow={setIsModalShow}
					process={() => {}}
				/>
			))}
			{orders?.openedOrders.map((item) => (
				<OrderItem
					key={item.id}
					order={item}
					isOpen={true}
					setIsModalShow={setIsModalShow}
				/>
			))}
			{orders?.closedOrders.map((item) => (
				<OrderItem key={item.id} order={item} isOpen={false} />
			))}
		</div>
	);
}
