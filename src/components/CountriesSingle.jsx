import React, { useState } from 'react';
import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Weather from './CountrySingle/Weather';
import Images from './CountrySingle/Images';
import Borders from './CountrySingle/Borders';
import CountryInfo from './CountrySingle/CountryInfo';
import Map from './CountrySingle/Map';



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
        <Col style={{display:"flex", justifyContent:"space-between", marginTop:"1rem"}}>
          <Button variant="light" onClick={() => navigate("/countries")}>
            Back to countries
          </Button>
          <div style={{marginTop:"0.5rem"}}>
          <a style={{backgroundColor:"lightGray", marginLeft:"2rem", marginTop:"1rem"}} href={country.maps.googleMaps} alt={country.name.common} target="_blank" rel="noreferrer">Google</a>
          </div>
        </Col>
        <Col>

        </Col>
      </Row>
      <Row>
      <Map />
      </Row>
     
    </Container >
  );
};

export default CountriesSingle;