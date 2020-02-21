import React from "react";
import classes from "./Input.module.css";
import * as actionTypes from "../../store/actions/actionTypes";
import { connect } from "react-redux";

const Input = ({ filterDataByName }) => {
  return (
    <div className={classes.Input}>
      <i className="fas fa-search"></i>
      <input
        onChange={({ target: { value } }) => {
          filterDataByName(value);
        }}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

const mapActionsToProps = dispatch => {
  return {
    filterDataByName: name => dispatch({ type: actionTypes.FILTER_NAME, name })
  };
};

export default connect(null, mapActionsToProps)(Input);
