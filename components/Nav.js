import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
            <Link href='/'>Acasa</Link>
        </li>
        <li>
            <Link href='/despre-noi'>Despre noi</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
