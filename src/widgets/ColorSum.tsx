import "../styles/ColorSum.scss";

type ColorSumProps = {
	Sum: number;
};

export default function ColorSum({ Sum }: ColorSumProps) {
	return <h3 className={Sum == 0 ? "" : Sum > 0 ? "high" : "low"}>{Sum}</h3>;
}
