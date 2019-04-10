import React from "react";
import classes from "./Input.css";

const Input = props => {
  const cls = [classes.Input];
  const inputinfo = props.inputinfo || {
    isInCorrect: false,
    isTouched: false
  };
  if (inputinfo.isTouched && inputinfo.isInCorrect) cls.push(classes.inCorrectInput);

  const propsCopy = { ...props };
  delete propsCopy.isInCorrect;
  return <input {...propsCopy} className={cls.join(" ")} />;
};
export default Input;
