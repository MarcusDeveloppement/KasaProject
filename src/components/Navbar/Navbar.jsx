import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Kasa from "../../assets/images/logo_kasa.png";
import NavBarMenu from "../HamburgerMenu/NavBarMenu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={` space-content ${styles.navbar}`}>
      <NavLink to="/">
        <img src={Kasa} alt="Logo kasa" />
      </NavLink>
      <nav className={styles.navList}>
        <NavLink
          to="/"
          className={({ isActive }) => `${isActive && styles.underline} `}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) => `${isActive && styles.underline}`}
        >
          A Propos
        </NavLink>
      </nav>
      <span className={styles.headerXs}>
        <i
          onClick={() => setShowMenu(!showMenu)}
          className="fa-solid fa-bars mr-15"
        ></i>
        {showMenu && (
          <>
            <div onClick={() => setShowMenu(false)} className="calc"></div>
            <NavBarMenu setShowMenu={setShowMenu} />
          </>
        )}
      </span>
    </div>
  );
}
