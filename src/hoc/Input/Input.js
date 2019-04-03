import React from "react";
import classes from "./Input.css";

const Input = props => {
  return <input {...props} className={classes.Input} />;
};
export default Input;
