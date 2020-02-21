import React from "react";
import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div>
      <div className={classes.Spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p style={{ textAlign: "center", fontWeight: "600", fontSize: "1.5rem" }}>
        Loading...
      </p>
    </div>
  );
};

export default Spinner;
