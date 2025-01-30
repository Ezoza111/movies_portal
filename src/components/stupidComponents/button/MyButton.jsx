import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

export const MyButton = (props) => {
  return (
    <Button
      variant='contained'
      onClick={props.functionClick}
      children={props.name}
      style={{ width: "30%", height: "40px", padding: "10px"}}
      type={props.typeBtn}
    />
  );
};

MyButton.propsType = {
  name: PropTypes.string.isRequired,
  functionClick: PropTypes.func,
  typeBtn: PropTypes.string,
};