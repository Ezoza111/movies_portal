import React from "react";
import { Button } from "@mui/material";
import PropTypes from 'prop-types'

export const MyButton = (props) => {
   return (
      <Button variant="contained"
        onClick={props.functionClick}
        children={props.name}
        sx={{width: '10%', height: '50%'}}
        type={props.typeBtn}
      />
   )
}
MyButton.propsType = {
   name: PropTypes.string.isRequired,
   functionClick: PropTypes.func,
   typeBtn: PropTypes.string,
}