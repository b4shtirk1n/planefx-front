import "../styles/ColorSum.scss";

type ColorSumProps = {
	Sum: number;
	Prefix: string;
};

export default function ColorSum({ Sum, Prefix }: ColorSumProps) {
	return (
		<h3 className={Sum == 0 ? "" : Sum > 0 ? "high" : "low"}>
			{Sum}
			{Prefix}
		</h3>
	);
}
