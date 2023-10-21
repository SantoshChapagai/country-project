import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import "./countrySingle.css";

const Borders = () => {

  const location = useLocation();
  const country = location.state.country;

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
          alert ("Error fetching data:", error);
          setLoading(false);
        }
      }
    }
    findBorders(country.borders);
  }, [country.borders]);
  return (
    <Card className='border-container'>
      <h4 style={{ marginLeft: "2rem" }}>Borders</h4>
      { data.length < 1 ? (
        <p style={{marginLeft:"1rem"}}>No border information about this country</p>
      ):(
      <ul>
        {!loading && data.map((country) => (
          <li key={country.cca3}>
            <div className='link-container'>
              <Link
                to={`/countries/${country.name.common}`}
                state={{ country: country }}
              >{country.name.common}</Link>
            </div>
          </li>
        ))}
      </ul>
      )}
    </Card>
  );
};

export default Borders;