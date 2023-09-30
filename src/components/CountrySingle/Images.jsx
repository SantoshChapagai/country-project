import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


const Images = () => {
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const country = location.state.country;

  useEffect(() => {
    const URL = `https://pixabay.com/api/?key=39594096-f60a72656a2ac7a3eb6216623&q=${country.name.common}&image_type=photo&per_page=8&min_height=3000`;
    axios.get(URL)
      .then((response) => {
        if (response.data.hits && response.data.hits.length > 0) {
          setImages(response.data.hits);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError('Error in fetching data', error);
      });
  }, [country.name.common]);
  console.log(images);
  return (
    // <Card>
    <Carousel>
      {!loading && images && images.map((image, id) => (
        <Carousel.Item key={id}>
          <img
            className="d-block w-100"
            src={image.webformatURL}
            alt={country.name.common}
            style={{ height: "35rem" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>

    // </Card>
  );
};

export default Images;