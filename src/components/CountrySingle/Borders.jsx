import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Borders = (cac3) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const location = useLocation();
  const country = location.state.country;
  console.log(country)
  console.log(country.borders)
  console.log(country.cca3);

  useEffect(() => {
    async function findBorders() {
      if (cac3.length > 0) {
        const apiUrl = "https://restcountries.com/v3.1/"
        const url = `${apiUrl}alpha?codes=${cac3.join(",")}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setLoading(false);
        setData(data)

      }
    }
  }, [cac3, country])

  return (
    <div>

    </div>
  );
};

export default Borders;