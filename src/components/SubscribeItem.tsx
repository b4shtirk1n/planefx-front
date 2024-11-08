import { useSubscribeStore } from "../stores/SubscribeStore";
import { Subscribe } from "../models/Subscribe";
import SubImg from "../widgets/SubImg";
import PlusImg from "../widgets/PlusImg";
import Star from "../widgets/Star";
import "../styles/SubscribeItem.scss";

type SubscribeItemProps = {
  subscribe: Subscribe;
};

export default function SubscribeItem({ subscribe }: SubscribeItemProps) {
  const { addToCart, removeToCart } = useSubscribeStore();

  return (
    <div className="subscribe-item">
      <div className="subscribe-item-info">
        <h1 className="accounts-count">{subscribe.accountsCount}</h1>
        <h1>{subscribe.accountsCount == 3 ? "счёта" : "счетов"}</h1>
      </div>
      <h1>
        {subscribe.price} <Star /> / день
      </h1>
      <div className="subscribe-counter">
        <a onClick={() => removeToCart(subscribe.id)}>
          <SubImg />
        </a>
        <h1>{subscribe.count}</h1>
        <a onClick={() => addToCart(subscribe.id)}>
          <PlusImg />
        </a>
      </div>
    </div>
  );
}
