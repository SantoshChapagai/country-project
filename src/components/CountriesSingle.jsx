import React from 'react';

import { useEffect } from 'react';

import { Col, Container, Row, Spinner, Button, Carousel, Card } from 'react-bootstrap';

import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { useState } from 'react';

const CountriesSingle = () => {

  //function hooks

  const location = useLocation();

  const navigate = useNavigate();



  //State hooks

  const [weather, setWeather] = useState('');


  const [errors, setError] = useState(false);

  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);



  //Destructuring variables

  const country = location.state.country;



  useEffect(() => {
    if (!country.capital) {
      setLoading(false)
      setError(true)
    } else {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)
        .catch((error) => {
          console.log(error)
          setError(true)
        })
        .then((response) => {
          setWeather(response.data)
          setLoading(false)
        })

    }

  }, [country.capital]);


  useEffect(() => {
    const URL = `https://pixabay.com/api/?key=39594096-f60a72656a2ac7a3eb6216623&q=${country.name.common}&image_type=photo&per_page=5`;
    axios.get(URL)
      .then((response) => {
        if (response.data.hits && response.data.hits.length > 0) {
          setImages(response.data.hits);
        }
      })
      .catch((error) => {
        setError('Error in fetching data', error);
      });
  }, [country.name.common]);

  console.log("Weather=", weather);

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
          <Carousel>
            {images && images.map((image, id) => (
              <Carousel.Item key={id}>
                <img
                  className="d-block w-100"
                  src={image.webformatURL}
                  alt={country.name.common}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col>
          <h2 className='display-4'>{country.name.common}</h2>
          <h3>{country.capital}</h3>
          {errors && (
            <p>Sorry, we do not have any informationa about this country.</p>
          )}
          {!errors && weather && (
            <div>
              <p>
                Right now it is <strong>{parseInt(weather.main.temp)}</strong> degrees in
                <strong> {country.capital}</strong>  and {weather.weather[0].description}
              </p>
              <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.weather[0].description}`} />
            </div>
          )}

        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="light" onClick={() => navigate("/countries")}>
            Back to countries
          </Button>
        </Col>
      </Row>
    </Container>

  )
};



export default CountriesSingle;