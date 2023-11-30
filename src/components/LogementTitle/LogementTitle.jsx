import { useEffect, useState } from "react";
import jsonData from "../../data/Api.json";
import styles from "./LogementTitle.module.scss";

export default function LogementTitle({ id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

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
      setTitle(filteredItem ? filteredItem.title : "");
      setLocation(filteredItem ? filteredItem.location : "");
    }
  }, [id, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.text}>
      <h2>{title}</h2>
      <p>{location}</p>
    </div>
  );
}
