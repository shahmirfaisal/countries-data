import * as actionTypes from "../actions/actionTypes";

const initialState = {
  fullCountries: null,
  filterCountries: null,
  fullCountry: null
};

const reducer = (state = initialState, action) => {
  let filterCountries;

  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return {
        ...state,
        fullCountries: action.data,
        filterCountries: action.data
      };

    case actionTypes.FILTER_NAME:
      filterCountries = state.fullCountries.filter(country =>
        country.name.toLowerCase().startsWith(action.name.toLowerCase())
      );

      return {
        ...state,
        filterCountries
      };

    case actionTypes.FILTER_REGION:
      if (action.region === "All") {
        return {
          ...state,
          filterCountries: state.fullCountries
        };
      }

      filterCountries = state.fullCountries.filter(country =>
        country.region.toLowerCase().startsWith(action.region.toLowerCase())
      );

      return {
        ...state,
        filterCountries
      };

    case actionTypes.FETCH_FULL_COUNTRY:
      return {
        ...state,
        fullCountry: action.data
      };

    case actionTypes.REMOVE_DATA:
      return {
        ...state,
        fullCountry: null
      };

    case actionTypes.RESET_COUNTRIES:
      return {
        ...state,
        filterCountries: state.fullCountries
      };
  }
  return state;
};

export default reducer;
