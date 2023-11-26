import { useState } from "react";

import styles from "./Apropos.module.scss";
import Mount from "../assets/images/mountain.png";
import Footer from "./Footer";

export default function Apropos() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRespectVisible, setRespectVisible] = useState(false);
  const [isServiceVisible, setServiceVisible] = useState(false);
  const [isSecureVisible, setSecureVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }
  function handleRespectClick() {
    setRespectVisible(!isRespectVisible);
  }
  function handleServiceClick() {
    setServiceVisible(!isServiceVisible);
  }
  function handleSecureClick() {
    setSecureVisible(!isSecureVisible);
  }

  return (
    <>
      <section className={styles.mainContainer}>
        <div>
          <img src={Mount} alt="image montagne" />
        </div>

        <div className={styles.container}>
          <div className={styles.card}>
            <h2 onClick={handleClick}>
              Fiabilité{" "}
              <span>
                <i
                  className={`fa-solid fa-chevron-down ${
                    isVisible ? "rotate" : "default-icon"
                  }`}
                ></i>
              </span>
            </h2>
            {isVisible && (
              <p
                className={`fade-content ${isVisible ? "visible-content" : ""}`}
              >
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            )}
          </div>
          <div className={styles.card}>
            <h2 onClick={handleRespectClick}>
              Respect{" "}
              <span>
                <i
                  className={`fa-solid fa-chevron-down ${
                    isRespectVisible ? "rotate" : "default-icon"
                  }`}
                ></i>
              </span>
            </h2>
            {isRespectVisible && (
              <p>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </p>
            )}
          </div>
          <div className={styles.card}>
            <h2 onClick={handleServiceClick}>
              Service{" "}
              <span>
                <i
                  className={`fa-solid fa-chevron-down ${
                    isServiceVisible ? "rotate" : "default-icon"
                  }`}
                ></i>
              </span>
            </h2>
            {isServiceVisible && (
              <p>
                Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </p>
            )}
          </div>
          <div className={styles.card}>
            <h2 onClick={handleSecureClick}>
              Sécurité{" "}
              <span>
                <i
                  className={`fa-solid fa-chevron-down ${
                    isSecureVisible ? "rotate" : "default-icon"
                  }`}
                ></i>
              </span>
            </h2>
            {isSecureVisible && (
              <p>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l'hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
