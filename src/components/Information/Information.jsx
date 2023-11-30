import { useEffect, useState } from "react";
import jsonData from "../../data/Api.json";
import styles from "./Information.module.scss";

export default function Information({ id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState("");
  const [equipments, setEquipments] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

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
      if (filteredItem) {
        setDescription(filteredItem.description);
        setEquipments(filteredItem.equipments || []);
      }
    }
  }, [id, data]);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleEquipments = () => {
    setShowEquipments(!showEquipments);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.infoContent}>
      <div className={styles.describe}>
        <h3 className={styles.chevrons} onClick={toggleDescription}>
          Description{" "}
          <span>
            <i
              className={`fa-solid fa-chevron-down ${
                showDescription ? "rotate" : "default-icon"
              }`}
            ></i>
          </span>
        </h3>
        {showDescription && <p>{description}</p>}
      </div>

      <div className={styles.equipments}>
        <h3 className={styles.chevrons} onClick={toggleEquipments}>
          Équipements{" "}
          <span>
            <i
              className={`fa-solid fa-chevron-down ${
                showEquipments ? "rotate" : "default-icon"
              }`}
            ></i>
          </span>
        </h3>
        {showEquipments && (
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
