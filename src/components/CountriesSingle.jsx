import React from 'react';
import { useEffect } from 'react';
import { Col, Container, Row, Spinner, Button, Carousel, Card } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Weather from './Weather';

const CountriesSingle = () => {

  //function hooks

  const location = useLocation();

  const navigate = useNavigate();


  //State hooks

  const [errors, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);


  //Destructuring variables

  const country = location.state.country;


  useEffect(() => {
    const URL = `https://pixabay.com/api/?key=39594096-f60a72656a2ac7a3eb6216623&q=${country.name.common}&image_type=photo&per_page=5`;
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

  if (loading) {
    return (
      <Container>
        <Spinner
          animation="border"
          role="status"
          className='center'
          variant="info"
        >
          <span className='"visually-hidden'></span>
        </Spinner>
      </Container>
    );
  }
  return (
    <Container>
      <Row className="mt-5">
        <Col>

          {/* <Carousel>
            {images && images.map((image, id) => (
              <Carousel.Item key={id}>
                <img
                  className="d-block w-100"
                  src={image.webformatURL}
                  alt={country.name.common}
                />
              </Carousel.Item>
            ))}
          </Carousel> */}
        </Col>
        <Col>
          <Weather />

        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="light" onClick={() => navigate("/countries")}>
            Back to countries
          </Button>
        </Col>
      </Row>
      <Row>

      </Row>
    </Container>
  )
};



export default CountriesSingle;