import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

const CountryCard = ({ country }) => {

  const favouritesList = useSelector((state) => state.favourites.favourites)

  return (
    <Col className="mt-5">
      <LinkContainer
        to={`/countries/${country.name.common}`}
        state={{ country: country }}
      >
        <Card className="h-100">
          <Card.Body className="d-flex flex-column">
            <Card.Img src={country.flags.svg} alt={country.name.common} />
            <Card.Title>{country.name.common}</Card.Title>
            <Card.Subtitle className="mb-5 text-muted">
              {country.name.official}
            </Card.Subtitle>
            <ListGroup
              variant="flush"
              className="flex-grow-1 justify-content-end"
            >
              {country.languages ? (
                <ListGroup.Item>
                  <i className="bi bi-translate me-2"></i>
                  {Object.values(country.languages).join(", ")}
                </ListGroup.Item>) : (
                <ListGroup.Item>No language found</ListGroup.Item>
              )}
              {country.currencies ? (
                <ListGroup.Item>
                  <i className="bi bi-cash-coin me-2"></i>
                  {Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </ListGroup.Item>
              ) : (
                <ListGroup.Item>No currency data</ListGroup.Item>
              )}
              <ListGroup.Item>
                <i className="bi bi-people me-2"></i>
                {(new Intl.NumberFormat('en-EN').format(country.population))}
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item>
              <i className='me-2'></i>
              <h2 >🤍</h2>
            </ListGroup.Item>
          </Card.Body>
        </Card>
      </LinkContainer>
    </Col>
  );
};

export default CountryCard;