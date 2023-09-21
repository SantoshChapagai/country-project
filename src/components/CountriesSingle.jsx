import React from 'react';

import { useEffect } from 'react';

import { Container } from 'react-bootstrap';

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



  //Destructuring variables

  const country = location.state.country;



  useEffect(() => {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)

      .catch((err) => {

        setError(true);

      })

      .then((res) => {

        setWeather(res.data);

        setLoading(false);

      })

  }, [country.capital])

  console.log("Weather=", weather);

  return (

    <Container>
      <h1>{country.capital}</h1>
      {weather &&
        <div>{weather.main.temp}C</div>

      }
      {weather &&
        <div>{weather.weather.map((weather) => weather.description)}</div>
      }


    </Container>

  );

};



export default CountriesSingle;