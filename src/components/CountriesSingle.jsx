import React from 'react';
import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Weather from './CountrySingle/Weather';
import Images from './CountrySingle/Images';
import { useLocation } from 'react-router-dom';
import Borders from './CountrySingle/Borders';
import CountryInfo from './CountrySingle/CountryInfo';


const CountriesSingle = () => {

  //function hooks

  const navigate = useNavigate();
  const location = useLocation();
  const country = location.state.country;


  //State hooks

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
      <Row className=" mt-5 ">
        {/* <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ width: "50rem", marginLeft: "0" }}> */}
        <Col >
          <Images />
        </Col>
        {/* </div>
          <div> */}
        <Col>
          <Weather />
        </Col>
        {/* </div>
          <div> */}
        <Col>
          <CountryInfo />
        </Col>
        {/* </div>
        </div> */}
      </Row>
      <Row>
        <Col>
          <Button variant="light" onClick={() => navigate("/countries")}>
            Back to countries
          </Button>
        </Col>
        <Col>
          <Borders />
        </Col>
      </Row>
      <Row>
        <img src={`https://source.unsplash.com/1600x900/?${country.name.common}`} alt={country.name.common} />
      </Row>
    </Container >
  );
};

export default CountriesSingle;