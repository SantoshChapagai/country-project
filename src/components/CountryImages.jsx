import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const CountryImages = () => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const country = useLocation.state.country;
  useEffect(() => {
    axios.get(`https://pixabay.com/api/?key=${process.env.REACT_PIXABY_KEY}&q=${country.common.name}&image_type=photo&per_page=5`)
      .then((response) => {
        console.log(response.data.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error in fetching data", error);
      })

  }, []);

  return (
    <div>
      <div>
        {/* <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
          {images && images.map((image, index) => (
            <div key={index}>
              <Card>
                <Card.Img src={image.webformatURL} alt={country.common.name} />
              </Card>
            </div>
          ))}
        </Carousel> */}
        Image will be here
      </div>
    </div>
  );
};

export default CountryImages;