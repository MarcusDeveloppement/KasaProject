import styles from "./Acceuil.module.scss";
import nature from "../assets/images/nature.png";

import React, { useEffect, useState } from "react";
import jsonData from "../data/Api.json";

export default function Acceuil() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError("Erreur lors du chargement des données");
      setLoading(false);
      console.error(error);
    }
  }, []);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue : {error}</div>;
  }
  return (
    <section className={styles.sectionCard}>
      <div className={styles.topContainer}>
        <img src={nature} alt="image nature" />
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <div className={styles.cardContainer}>
        {data.map((item) => (
          <div className={styles.imgContainer} key={item.id}>
            <img src={item.cover} alt={item.title} />
            <h3>{item.title}</h3>
            <div className={styles.shadow}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
