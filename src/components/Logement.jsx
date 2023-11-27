import React from "react";
import { useParams } from "react-router-dom"; // Si tu utilises React Router
import jsonData from "../data/Api.json";
import styles from "./Logement.module.scss";
import CarouselComponent from "./Carousels";

export default function Logement() {
  const { id } = useParams();
  const selectedData = jsonData.find((item) => item.id === id);

  return (
    <>
      <CarouselComponent id={selectedData.id} />
    </>
  );
}
