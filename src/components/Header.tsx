import "../styles/Header.scss";

type HeaderProps = {
  leftBtn?: JSX.Element;
  text?: string;
  rightBtn?: JSX.Element;
};

export default function Header({ leftBtn, text, rightBtn }: HeaderProps) {
  return (
    <header>
      {leftBtn}
      <h2>{text}</h2>
      {rightBtn}
    </header>
  );
}
