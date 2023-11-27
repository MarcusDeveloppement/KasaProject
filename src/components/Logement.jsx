import React from "react";
import { useParams } from "react-router-dom"; // Si tu utilises React Router
import jsonData from "../data/Api.json";
import styles from "./Logement.module.scss";
import CarouselComponent from "./Carousels";
import LogementTitle from "./LogementTitle";
import Tags from "./tags";
import Rating from "./Rating";
import Profile from "./Profile";
import Information from "./Information";

export default function Logement() {
  const { id } = useParams();
  const selectedData = jsonData.find((item) => item.id === id);

  return (
    <>
      <CarouselComponent id={selectedData.id} />
      <div className={styles.subtitle}>
        <div className={styles.hostTitle}>
          <LogementTitle id={selectedData.id} />
          <Profile id={selectedData.id} />
        </div>
        <div className={styles.tagRate}>
          <Tags id={selectedData.id} />
          <Rating id={selectedData.id} />
        </div>
      </div>
      <Information id={selectedData.id} />
    </>
  );
}
