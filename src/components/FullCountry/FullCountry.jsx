import React, { useEffect } from "react";
import classes from "./FullCountry.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";
import { useParams, useHistory } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import * as actionTypes from "../../store/actions/actionTypes";

const FullCountry = ({ fetchData, country, removeData }) => {
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchData(params.country);

    return () => removeData();
  }, []);

  return (
    <section className={classes.FullCountry}>
      <button className={classes.back} onClick={() => history.goBack()}>
        <i className="fas fa-long-arrow-alt-left"></i>Back
      </button>

      {country ? (
        <div>
          <div className={classes.body}>
            <div className={classes.img}>
              <img src={country.flag} alt={country.name} />
            </div>

            <div className={classes.info}>
              <h3>{country.name}</h3>
              <div className={classes.furtherInfo}>
                <div>
                  <p>
                    <span>Native Name: </span>
                    {country.nativeName}
                  </p>
                  <p>
                    <span>Population: </span>
                    {country.population}
                  </p>
                  <p>
                    <span>Region: </span>
                    {country.region}
                  </p>
                  <p>
                    <span>Sub Region: </span>
                    {country.subregion}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {country.capital}
                  </p>
                </div>

                <div>
                  <p>
                    <span>Top Level Domain: </span>
                    {country.topLevelDomain[0]}
                  </p>
                  <p>
                    <span>Currencies: </span>
                    {country.currencies.map((v, i) => (
                      <span key={i}>{v.name} </span>
                    ))}
                  </p>
                  <p>
                    <span>Languages: </span>
                    {country.languages.map((v, i) => (
                      <span key={i}>{v.name} </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className={classes.border}>
                <p>Border Countries: </p>
                <div>
                  {country.borders.length ? (
                    country.borders.map((v, i) => <button key={i}>{v}</button>)
                  ) : (
                    <span
                      style={{
                        fontSize: "1.4rem",
                        marginTop: "1rem",
                        display: "inline-block"
                      }}
                    >
                      None
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
};

const mapActionsToProps = dispatch => {
  return {
    fetchData: country => dispatch(actions.fetchFullCountry(country)),
    removeData: () => dispatch({ type: actionTypes.REMOVE_DATA })
  };
};

const mapStateToProps = state => {
  return {
    country: state.fullCountry
  };
};

export default connect(mapStateToProps, mapActionsToProps)(FullCountry);
