import { useCommandStore } from "../stores/CommandStore";
import { CommandRequest } from "../requests/CommandRequest";
import { BaseOrder } from "../models/BaseOrder";
import { CommandType } from "../enums/CommandType";
import Button from "../widgets/Button";
import "../styles/Confirm.scss";

type ConfirmProps = {
  order: BaseOrder;
  ordersCount: number;
  isModalShow: boolean;
  setIsModalShow(flag: boolean): void;
};

export default function Confirm({
  order,
  ordersCount,
  isModalShow,
  setIsModalShow,
}: ConfirmProps) {
  function onSubmit() {
    useCommandStore
      .getState()
      .CreateCommand(
        new CommandRequest(
          order.account,
          CommandType.Close,
          "Close",
          order.order
        ),
        ordersCount
      );

    setIsModalShow(false);
  }

  return (
    <>
      <div
        className={isModalShow ? "modal" : "hide"}
        onClick={() => setIsModalShow(false)}
      />
      <div className={isModalShow ? "confirm" : "hide"}>
        <h3>Сделка закроется через некоторое время!</h3>
        <div>
          <Button isPrimary onClick={onSubmit}>
            Закрыть
          </Button>
          <Button isPrimary={false} onClick={() => setIsModalShow(false)}>
            Отмена
          </Button>
        </div>
      </div>
    </>
  );
}
