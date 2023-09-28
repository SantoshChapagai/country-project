import React, { useEffect } from 'react';
import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Weather from './CountrySingle/Weather';
import Images from './CountrySingle/Images';
import { useLocation } from 'react-router-dom';
import axios from 'axios';





const CountriesSingle = () => {

  //function hooks

  const navigate = useNavigate();
  const location = useLocation();
  const country = location.state.country;


  //State hooks

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "https://restcountries.com/v3.1/";
    async function findBorders(cca3) {
      if (cca3.length > 0) {
        try {
          const response = await axios.get(`${apiUrl}alpha?codes=${cca3.join(",")}`);
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      }
    }
    findBorders(country.borders);
  }, [country.borders]);

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
          <Images />
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
        <Col>
          <ul>
            {!loading && data.map((country) => (
              <li key={country.cca3}>
                <Link
                  to={`/countries/${country.name.common}`}
                  state={{ country: country }}
                >{country.name.common}</Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row>
        <img src={`https://source.unsplash.com/1600x900/?${country.name.common}`} alt={country.name.common} />
      </Row>
    </Container >
  );
};

export default CountriesSingle;