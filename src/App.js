import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Countries from "./components/Countries/Countries";
import { connect } from "react-redux";
import * as actions from "./store/actions/actions";
import { Route, Switch } from "react-router-dom";
import FullCountry from "./components/FullCountry/FullCountry";
import NotFound from "./components/NotFound/NotFound";

const App = ({ fetchData }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Search />
              <Countries />
            </div>
          )}
        />
        <Route path="/country_:country" component={FullCountry} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

const mapActionsToProps = dispatch => {
  return {
    fetchData: () => dispatch(actions.fetchData())
  };
};

export default connect(null, mapActionsToProps)(App);
