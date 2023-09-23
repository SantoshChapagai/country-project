import React from 'react';
import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Weather from './CountrySingle/Weather';
import Images from './CountrySingle/Images';

const CountriesSingle = () => {

  //function hooks

  const navigate = useNavigate();

  //State hooks

  const [loading, setLoading] = useState(true);

  if (setLoading === loading) {
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
          {/* <Images /> */}
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