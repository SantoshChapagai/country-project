import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';

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

  return (

    <Card style={{ textAlign: "center" }}>
      {error && (
        <Card.Title>Sorry, we do not have any informationa about this country.</Card.Title>
      )}
      {!error && weather && (
        <>
          <Col>
            <h4> <strong>{country.capital}</strong>, {country.name.common}</h4>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`${weather.weather[0].description}`} />
            {weather.weather[0].description}
          </Col>
          <div>
            <p>
              Current Temperature:  <strong>{weather.main.temp}°C</strong>
            </p>
            <p>
              Feels Like:  <strong>{weather.main.feels_like}°C</strong>
            </p>
            <p>
              Today:  Min <strong>{weather.main.temp_min}°C</strong> and Max <strong>{weather.main.temp_max}°C</strong>
            </p>
            <p>Humidity <strong>{weather.main.humidity}</strong> and wind speed <strong>{weather.wind.speed}</strong></p>

          </div>
        </>
      )}
    </Card>
  );
};

export default Weather;