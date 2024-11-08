import ProfileImg from "../widgets/ProfileImg";
import SubscribeImg from "../widgets/SubscribeImg";
import AccountImg from "../widgets/AccountImg";
import "../styles/NavBar.scss";

type NavBarProps = {
  isAccounts?: boolean;
  isSubscribes?: boolean;
  isProfile?: boolean;
};

export default function NavBar({
  isAccounts,
  isSubscribes,
  isProfile,
}: NavBarProps) {
  return (
    <nav className="nav-bar">
      <a className={`${isAccounts && "active"}`} href="/accounts">
        <AccountImg />
      </a>
      <a className={`${isSubscribes && "active"}`} href="/subscribe">
        <SubscribeImg />
      </a>
      <a className={`${isProfile && "active"}`} href="/">
        <ProfileImg />
      </a>
    </nav>
  );
}
