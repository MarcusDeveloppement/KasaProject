import { useEffect, useState } from "react";
import jsonData from "../../data/Api.json";
import styles from "./Profile.module.scss";

export default function Profile({ id }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hostName, setHostName] = useState("");
  const [hostPicture, setHostPicture] = useState("");

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
      if (filteredItem && filteredItem.host) {
        setHostName(filteredItem.host.name);
        setHostPicture(filteredItem.host.picture);
      }
    }
  }, [id, data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.host}>
      <div className={styles.name}>
        <p> {hostName}</p>
      </div>
      <img src={hostPicture} alt="Host" />
    </div>
  );
}
