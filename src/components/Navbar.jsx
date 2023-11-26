import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Kasa from "../assets/images/logo_kasa.png";
export default function Navbar() {
  return (
    <div className={` space-content ${styles.navbar}`}>
      <img src={Kasa} alt="Logo kasa" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive && styles.underline} `}
        >
          Acceuil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) => `${isActive && styles.underline}`}
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}
