import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBarMenu.module.scss";

export default function NavBarMenu({ setShowMenu }) {
  const handleClick = () => {
    setShowMenu(false);
  };

  return (
    <div className={styles.MenuContainer}>
      <NavLink to="/" onClick={handleClick}>
        Accueil
      </NavLink>
      <NavLink to="/apropos" onClick={handleClick}>
        A Propos
      </NavLink>
    </div>
  );
}
