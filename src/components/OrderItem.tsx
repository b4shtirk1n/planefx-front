import { CloseOrder } from "../models/CloseOrder";
import { OpenOrder } from "../models/OpenOrder";
import { useState } from "react";
import getDate from "../helpers/Date";
import SubImg from "../widgets/SubImg";
import Confirm from "./Confirm";
import "../styles/Card.scss";

type OrderProps = {
	order: OpenOrder | CloseOrder;
	isOpen: boolean;
	ordersCount?: number;
	setIsModalBgShow?(flag: boolean): void;
};

export default function OrderItem({
	order,
	isOpen,
	ordersCount,
	setIsModalBgShow,
}: OrderProps) {
	const [isModalShow, setIsModalShow] = useState<boolean>(false);

	return (
		<>
			{isOpen && (
				<Confirm
					order={order}
					ordersCount={ordersCount!}
					isModalShow={isModalShow}
					setIsModalShow={setIsModalShow}
					setIsModalBgShow={setIsModalBgShow!}
				/>
			)}
			<div className="card">
				<div className="card-header">
					<h2>{order.order}</h2>
					<h3>{order.symbol}</h3>
					{isOpen && (
						<a onClick={() => (setIsModalShow(true), setIsModalBgShow!(true))}>
							<SubImg />
						</a>
					)}
				</div>
				<div className="card-info">
					<div>
						{isOpen ? (
							<p>последнее обновление</p>
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
								<h3>{(order as CloseOrder).priceClosed}</h3>
							</>
						)}
						<h3>{getDate(order.timeOpened)}</h3>
						<h3>{order.priceOpened}</h3>
						<h3>{order.sl}</h3>
						<h3>{order.tp}</h3>
						<h3>{order.swap}</h3>
						<h3>{order.volume}</h3>
					</div>
				</div>
			</div>
		</>
	);
}
