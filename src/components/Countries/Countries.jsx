import React, { useEffect } from "react";
import classes from "./Countries.module.css";
import Country from "../Country/Country";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import LazyLoad from "react-lazyload";
import * as actionTypes from "../../store/actions/actionTypes";

const Countries = ({ countries, resetCountries }) => {
  useEffect(() => {
    return () => resetCountries();
  }, []);

  return (
    <section className={classes.Countries}>
      {countries ? (
        countries.map((country, i) => (
          <LazyLoad key={i}>
            <Country country={country} />
          </LazyLoad>
        ))
      ) : (
        <Spinner />
      )}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    countries: state.filterCountries
  };
};

const mapActionsToProps = dispatch => {
  return {
    resetCountries: () => dispatch({ type: actionTypes.RESET_COUNTRIES })
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Countries);
