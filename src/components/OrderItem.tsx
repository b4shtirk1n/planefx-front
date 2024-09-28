import { CloseOrder } from "../models/CloseOrder";
import { OpenOrder } from "../models/OpenOrder";
import getDate from "../helpers/Date";
import ColorSum from "../widgets/ColorSum";
import "../styles/Card.scss";

type OrderProps = {
	order: OpenOrder | CloseOrder;
	isOpen: boolean;
};

export default function OrderItem({ order, isOpen }: OrderProps) {
	return (
		<div className="card">
			<div className="card-header">
				<h2>{order.order}</h2>
			</div>
			<div className="card-info">
				<div>
					{isOpen ? (
						<p>последнее обновления</p>
					) : (
						<>
							<p>время закрытия</p>
							<p>цена закрытия</p>
						</>
					)}
					<p>время открытия</p>
					<p>цена открытия</p>
					<p>SL</p>
					<p>TP</p>
					<p>swap</p>
					<p>объём</p>
				</div>
				<div>
					{isOpen ? (
						<h3>{getDate((order as OpenOrder).timeUpdate)}</h3>
					) : (
						<>
							<h3>{getDate((order as CloseOrder).timeClosed)}</h3>
							<ColorSum Sum={(order as CloseOrder).priceClosed} Prefix="%" />
						</>
					)}
					<h3>{getDate(order.timeOpened)}</h3>
					<ColorSum Sum={order.priceOpened} Prefix="%" />
					<ColorSum Sum={order.sl} Prefix="%" />
					<ColorSum Sum={order.tp} Prefix="%" />
					<ColorSum Sum={order.swap} Prefix="$" />
					<ColorSum Sum={order.volume} Prefix="%" />
				</div>
			</div>
		</div>
	);
}
