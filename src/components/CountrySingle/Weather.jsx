import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Weather = () => {
  const [weather, setWeather] = useState('');
  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const country = location.state.country;

  useEffect(() => {
    if (!country.capital) {
      setLoading(false)
      setError(true)
    } else {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)
        .catch((error) => {
          setError(error);
        })
        .then((response) => {
          setWeather(response.data)
          setLoading(false)
        });
    }

  }, [country.capital]);

  console.log("Weather=", weather);
  return (
    <Card>
      {error && (
        <p>Sorry, we do not have any informationa about this country.</p>
      )}
      {!error && weather && (
        <>
          <Col>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.weather[0].description}`} />
            {weather.weather[0].description}
          </Col>
          <Col>
            <h4>{country.capital}, {country.name.common}</h4>
          </Col>
          <div>
            <p>
              <strong>{parseInt(weather.main.temp)}</strong> degrees
            </p>
          </div>
        </>
      )}
    </Card>
  );
};

export default Weather;