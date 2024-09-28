import OrderList from "../components/OrderList";
import Header from "../components/Header";
import BackButton from "../widgets/BackButton";

export default function OrderPage() {
	return (
		<section className="modal">
			<Header leftBtn={<BackButton />} text="Счёт" />
			<OrderList />
		</section>
	);
}
