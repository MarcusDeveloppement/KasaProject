import { useEffect, useState } from "react";
import jsonData from "../data/Api.json";
import styles from "./Carousels.module.scss";

const CarouselComponent = ({ id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      setFilteredData(filteredItem ? filteredItem.pictures : []);
      setCurrentImageIndex(0);
    }
  }, [id, data]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? filteredData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === filteredData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const imageCount = filteredData.length;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {imageCount > 0 && (
        <div className={styles.imgContainer}>
          <div className={styles.elemContent}>
            <p>{` ${currentImageIndex + 1}/${imageCount}`}</p>
            <img
              src={filteredData[currentImageIndex]}
              alt={`Photo ${currentImageIndex + 1}`}
            />
          </div>
          <div className={styles.chevrons}>
            <span onClick={goToPrevious}>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <span onClick={goToNext}>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselComponent;
