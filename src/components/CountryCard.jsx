import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { addFavourite, removeFavourite } from "../features/countries/favouritesSlice";

const CountryCard = ({ country }) => {

  const favouritesList = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();

  return (
    <Col className="mt-5">

      <Card className="h-100">
        {favouritesList?.includes(country.name.common) ? (
          <i
            className="bi bi-heart-fill text-danger m-1 p-1"
            onClick={() => dispatch(removeFavourite(country.name.common))}></i>
        ) : (
          <i
            className="bi bi-heart text-danger m-1 p-1"
            onClick={() => dispatch(addFavourite(country.name.common))}></i>
        )}
        <LinkContainer
          to={`/countries/${country.name.common}`}
          state={{ country: country }}
        >
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
                {country.population.toLocaleString()}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </LinkContainer>
      </Card>

    </Col >
  );
};

export default CountryCard;