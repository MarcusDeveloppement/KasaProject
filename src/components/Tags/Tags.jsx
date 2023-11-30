import { useEffect, useState } from "react";
import jsonData from "../../data/Api.json";
import styles from "./Tags.module.scss";

export default function Tags({ id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tags, setTags] = useState([]);

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
      setTags(filteredItem ? filteredItem.tags : []);
    }
  }, [id, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.tag}>
      {tags.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}
    </div>
  );
}
