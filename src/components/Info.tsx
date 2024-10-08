import "../styles/Info.scss";

type InfoProps = {
	name: string;
	imgUrl: string;
	amount: number;
};

export default function Info({ name, imgUrl, amount }: InfoProps) {
	return (
		<div className="info">
			<div className="image">
				<div className="bg" />
				<img src={imgUrl} />
			</div>
			<div>
				<h2>{amount.toFixed(2)}$</h2>
				<p>{name}</p>
			</div>
		</div>
	);
}
