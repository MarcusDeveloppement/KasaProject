import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Kasa from "../../assets/images/logo_kasa.png";

export default function Navbar() {
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
          ACCUEIL
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) => `${isActive && styles.underline}`}
        >
          A PROPOS
        </NavLink>
      </nav>
    </div>
  );
}
