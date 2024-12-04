import { CommandType } from "../enums/CommandType";
import { CommandRequest } from "../requests/CommandRequest";
import ColorSum from "../widgets/ColorSum";

type ProcessProps = {
  command: CommandRequest;
};

export default function ProcessItem({ command }: ProcessProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{command.type === CommandType.Open ? "открытие" : "закрытие"}</h2>
      </div>
      <div className="card-info">
        <div>
          <p>тип</p>
          {command.type === CommandType.Open ? (
            <>
              <p>тип сделки</p>
              <p>объём</p>
              <p>цена</p>
            </>
          ) : (
            <p>сделка</p>
          )}
        </div>
        <div>
          <h3>{command.type.toString()}</h3>
          {command.type === CommandType.Open ? (
            <>
              <h3>{command.orderType}</h3>
              <ColorSum sum={command.volume!} prefix="%" />
              <ColorSum sum={command.price!} prefix="$" />
            </>
          ) : (
            <h3>{command.order}</h3>
          )}
        </div>
      </div>
    </div>
  );
}
