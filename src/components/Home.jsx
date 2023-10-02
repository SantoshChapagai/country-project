
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./component.css";

const Home = () => {
  return (
    <Container >
      <Row className='hero-banner' >
      </Row>
      <Row className='mt-5 flex-column flex-md-row' style={{ margin: "0.5rem" }}>
        <Col style={{ backgroundColor: "lightskyblue", padding: "0.5rem", border: "none", borderRadius: "5px", margin: "0.5rem" }}>
          <h4>REST COUNTRIES 🇵🇪</h4>
          <p>Get API here <span><a href="https://restcountries.com/" target="_blank" rel="noreferrer">REST COUNTRIES</a></span></p>
        </Col>
        <Col style={{ backgroundColor: "lightskyblue", padding: "0.5rem", border: "none", borderRadius: "5px", margin: "0.5rem" }}>
          <h4>OPEN WEATHER 🌦️</h4>
          <p>Get API here <span><a href="https://openweathermap.org/" target="_blank" rel="noreferrer">OPEN WEATHER</a></span></p>
          <p>Create account or signin and get your API key.</p>
        </Col>
        <Col style={{ backgroundColor: "lightskyblue", padding: "0.5rem", border: "none", borderRadius: "5px", margin: "0.5rem" }}>
          <h4>PIXABAY 📷</h4>
          <p>Get API here <span><a href="https://pixabay.com/sk/service/about/api/" target="_blank" rel="noreferrer">PIXABAY</a></span></p>
          <p>Create account or signin and get your API key.</p>
        </Col>
      </Row>
      <footer style={{ backgroundColor: "lightblue", height: "3rem", padding: "0.5rem", textAlign: "center" }}>&copy; React Country Project❤️</footer>
    </Container>
  );
};

export default Home;
