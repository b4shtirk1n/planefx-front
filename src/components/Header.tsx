import "../styles/Header.scss";

type HeaderProps = {
	backBtn?: JSX.Element;
	text: string;
};

export default function Header({ backBtn, text }: HeaderProps) {
	return (
		<header>
			{backBtn}
			<h1>{text}</h1>
		</header>
	);
}
