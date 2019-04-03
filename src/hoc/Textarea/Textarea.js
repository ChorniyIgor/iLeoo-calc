import React from "react";
import classes from "./Textarea.css";

const Textarea = props => {
  return <textarea {...props} className={classes.Textarea} />;
};
export default Textarea;
