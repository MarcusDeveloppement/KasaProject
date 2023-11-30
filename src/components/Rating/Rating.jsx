import { useEffect, useState } from "react";
import jsonData from "../../data/Api.json";
import styles from "./Rating.module.scss";

export default function Rating({ id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);

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

  useEffect(() => {
    if (id && data.length > 0) {
      const filteredItem = data.find((item) => item.id === id);
      setRating(filteredItem ? parseInt(filteredItem.rating) : 0);
    }
  }, [id, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const generateStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i className="fa-solid fa-star" key={i}></i>);
      } else {
        stars.push(<i className="fa-regular fa-star" key={i}></i>);
      }
    }
    return stars;
  };

  return (
    <div className={styles.stars}>
      <div>{generateStars()}</div>
    </div>
  );
}
