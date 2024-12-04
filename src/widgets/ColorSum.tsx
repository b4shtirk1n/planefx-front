import "../styles/ColorSum.scss";

type ColorSumProps = {
  sum: number;
  prefix: string;
  revert?: boolean;
};

export default function ColorSum({
  sum,
  prefix,
  revert = false,
}: ColorSumProps) {
  return (
    <h3 className={sum == 0 ? "" : sum > 0 && !revert ? "high" : "low"}>
      {sum}
      {prefix}
    </h3>
  );
}
