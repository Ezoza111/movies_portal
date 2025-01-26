import React from "react";
import { Button } from "@mui/material";
import PropTypes from 'prop-types'

export const MyButton = (props) => {
   return (
      <Button variant="contained"
        onClick={props.functionClick}
        children={props.name}q
        style={{width: '25%', height: '40px'}}
        type={props.typeBtn}
      />
   )
}
MyButton.propsType = {
   name: PropTypes.string.isRequired,
   functionClick: PropTypes.func,
   typeBtn: PropTypes.string,
}