import React from "react";
import classes from "./Filter.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";

const Filter = ({ filterByRegion }) => {
  return (
    <select
      onChange={({ target: { value } }) => {
        filterByRegion(value);
      }}
      className={classes.Filter}
    >
      <option>All</option>
      <option>Africa</option>
      <option>Asia</option>
      <option>America</option>
      <option>Europe</option>
      <option>Oceania</option>
      <option selected disabled hidden>
        Filter by Region
      </option>
    </select>
  );
};

const mapActionsToProps = dispatch => {
  return {
    filterByRegion: region =>
      dispatch({ type: actionTypes.FILTER_REGION, region })
  };
};

export default connect(null, mapActionsToProps)(Filter);
