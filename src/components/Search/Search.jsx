import React from "react";
import classes from "./Search.module.css";
import Input from "./Input";
import Filter from "./Filter";

const Search = () => {
  return (
    <section className={classes.Search}>
      <Input />
      <Filter />
    </section>
  );
};

export default Search;
