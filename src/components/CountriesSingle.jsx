import React, { useState } from 'react';
import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Weather from './CountrySingle/Weather';
import Images from './CountrySingle/Images';
import Borders from './CountrySingle/Borders';
import CountryInfo from './CountrySingle/CountryInfo';


const CountriesSingle = () => {


  //function hooks

  const navigate = useNavigate();
  const location = useLocation();
  const country = location.state.country;

  //State hooks

  const [loading, setLoading] = useState(true);

  if (loading === setLoading) {
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
        <Col style={{display:"flex", justifyContent:"space-between"}}>
          <Button variant="light" onClick={() => navigate("/countries")}>
            Back to countries
          </Button>
          <div>
          <a style={{backgroundColor:"lightGray"}} href={country.maps.googleMaps} alt={country.name.common} target="_blank" rel="noreferrer">Google Map</a>
          </div>
          
        </Col>
        <Col>

        </Col>
      </Row>
      <Row>
        <img src={`https://source.unsplash.com/1600x900/?${country.name.common}`} alt={country.name.common} />
      </Row>
    </Container >
  );
};

export default CountriesSingle;