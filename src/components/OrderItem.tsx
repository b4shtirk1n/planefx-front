import { CloseOrder } from "../models/CloseOrder";
import { OpenOrder } from "../models/OpenOrder";
import getDate from "../helpers/Date";
import SubImg from "../widgets/SubImg";
import Confirm from "./Confirm";
import "../styles/Card.scss";

type OrderProps = {
  order: OpenOrder | CloseOrder;
  isOpen: boolean;
  ordersCount?: number;
  isModalShow?: boolean;
  setIsModalShow?(flag: boolean): void;
};

export default function OrderItem({
  order,
  isOpen,
  ordersCount,
  isModalShow,
  setIsModalShow,
}: OrderProps) {
  return (
    <>
      {isOpen && (
        <Confirm
          order={order}
          ordersCount={ordersCount!}
          isModalShow={isModalShow!}
          setIsModalShow={setIsModalShow!}
        />
      )}
      <div className="card">
        <div className="card-header">
          <h3>{order.order}</h3>
          <h3>
            {order.symbol
              ? order.symbol
              : order.profit > 0
              ? "Пополнение"
              : "Снятие"}
          </h3>
          {isOpen && (
            <a onClick={() => setIsModalShow!(true)}>
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
            <p>комиссия</p>
            <p>профит</p>
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
            <h3>{order.commissions}</h3>
            <h3>{order.profit}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
