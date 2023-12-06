import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jsonData from "../../data/Api.json";
import styles from "./Logement.module.scss";
import CarouselComponent from "../../components/Carousels/Carousels";
import Information from "../../components/Information/Information";
import LogementTitle from "../../components/LogementTitle/LogementTitle";
import Profile from "../../components/Profile/Profile";
import Rating from "../../components/Rating/Rating";
import Tags from "../../components/Tags/Tags";

export default function Logement() {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedData = jsonData.find((item) => item.id === id);

  useEffect(() => {
    if (!selectedData) {
      navigate("/notfound");
    }
  }, [selectedData, navigate]);

  if (!selectedData) {
    return null;
  }

  return (
    <>
      <CarouselComponent id={selectedData.id} />
      <div className={styles.subtitle}>
        <div className={styles.hostTitle}>
          <LogementTitle id={selectedData.id} />
          <Tags id={selectedData.id} />
        </div>
        <div className={styles.profilRate}>
          <Rating id={selectedData.id} />
          <Profile id={selectedData.id} />
        </div>
      </div>
      <Information id={selectedData.id} />
    </>
  );
}
