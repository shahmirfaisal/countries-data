import React from "react";
import classes from "./Country.module.css";
import { useHistory } from "react-router-dom";

const Country = ({ country }) => {
  const history = useHistory();

  return (
    <div
      className={classes.Country}
      onClick={() => {
        history.push(`/country_${country.name.toLowerCase()}`);
      }}
    >
      <header>
        <img src={country.flag} alt={`${country.name} Flag`} />
      </header>

      <div>
        <h3>{country.name}</h3>
        <p>
          <span>Population: </span>
          {country.population}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
