import WhiteLogo from "../../assets/images/whiteLogo.png";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <img src={WhiteLogo} alt="Logo du pied de page" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
