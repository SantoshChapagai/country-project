import React from 'react';
import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Weather from './CountrySingle/Weather';
import Images from './CountrySingle/Images';
import { useLocation } from 'react-router-dom';
import Borders from './CountrySingle/Borders';
import CountryInfo from './CountrySingle/CountryInfo';
import { useEffect } from 'react';


const CountriesSingle = () => {
  const [map, setMap] = useState("")

  //function hooks

  const navigate = useNavigate();
  const location = useLocation();
  const country = location.state.country;


  //State hooks

  useEffect(()=>{
    if(!country.maps.googleMaps){
      return "No information about this country";
    }else{
      setMap(country.maps.googleMaps);
    }
  }, [country])

  const [loading, setLoading] = useState(true);

  if (!loading) {
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
    <Container >
      <Row className=" mt-5 flex-column flex-md-row">
        <Col >
          <Images />
        </Col>
        <Col>
          <Weather />
          <Borders />
        </Col>
        <Col>
          <CountryInfo />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="light" onClick={() => navigate("/countries")}>
            Back to countries
          </Button>
        </Col>
        <Col>

        </Col>
      </Row>
      <Row>
        <img src={`https://source.unsplash.com/1600x900/?${country.name.common}`} alt={country.name.common} />
        {map &&
        (<img src={map} alt={country.name.common}/>)
        }
        <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '200px', height: '200px', background: `url(${country.maps.googleMaps}) no-repeat center center / cover`, textDecoration: 'none' }}>
      </a>
      </Row>
    </Container >
  );
};

export default CountriesSingle;