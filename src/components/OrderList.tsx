import { useState } from "react";
import { useOrderStore } from "../stores/OrderStore";
import OrderItem from "./OrderItem";

export default function OrderList() {
	const { orders } = useOrderStore();
	const [isModalShow, setIsModalShow] = useState<boolean>(false);

	return (
		<div className="container">
			<div className={isModalShow ? "modal" : "hide"} />
			{orders?.openedOrders.map((item) => (
				<OrderItem
					key={item.id}
					order={item}
					isOpen={true}
					setIsModalBgShow={setIsModalShow}
				/>
			))}
			{orders?.closedOrders.map((item) => (
				<OrderItem key={item.id} order={item} isOpen={false} />
			))}
		</div>
	);
}
