import "../styles/Info.scss";

type InfoProps = {
	name: string;
	imgUrl: string;
	amount: number;
};

export default function Info({ name, imgUrl, amount }: InfoProps) {
	console.log(amount);
	const fixAmount = amount.toFixed(2);

	return (
		<div className="info">
			<div className="image">
				<div className="bg" />
				<img src={imgUrl} />
			</div>
			<div>
				<h2>{fixAmount}$</h2>
				<p>{name}</p>
			</div>
		</div>
	);
}
