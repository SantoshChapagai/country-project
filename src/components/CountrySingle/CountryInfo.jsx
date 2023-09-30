import React from 'react';
import { Card, CardImg, ListGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const CountryInfo = () => {
  const location = useLocation();
  const country = location.state.country;
  return (
    <Card >
      <Card.Body>
        <CardImg src={country.coatOfArms.svg} alt={country.capital} />
        <Card.Title>{country.name.common}</Card.Title>
        <ListGroup>
          <ListGroup.Item>{country.region} ({country.subregion})</ListGroup.Item>
          <ListGroup.Item>{country.landlocked === true ? 'Landlocked' : 'Not Landlocked'}</ListGroup.Item>
          <ListGroup.Item>{country.independent === true ? 'Independent' : 'Not Independent'}, {country.unMember === true ? 'Member of United Nations' : 'Not a Member of United Nations'}</ListGroup.Item>
        </ListGroup>

      </Card.Body>
    </Card>
  );
};

export default CountryInfo;