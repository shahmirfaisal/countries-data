import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchData = () => {
  return dispatch => {
    axios
      .get("/all")
      .then(({ data }) => {
        dispatch({ type: actionTypes.FETCH_DATA, data: data });
      })
      .catch(er => console.log(er));
  };
};

export const fetchFullCountry = country => {
  return dispatch => {
    axios
      .get(`name/${country}`)
      .then(({ data }) => {
        dispatch({ type: actionTypes.FETCH_FULL_COUNTRY, data: data[0] });
      })
      .catch(er => console.log(er));
  };
};
