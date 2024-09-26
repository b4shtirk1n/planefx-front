import OrderList from "../components/OrderList";
import Header from "../components/Header";
import BackButton from "../widgets/BackButton";

export default function OrderPage() {
	return (
		<section>
			<Header leftBtn={<BackButton />} text="Счёт" />
			<OrderList />
		</section>
	);
}
