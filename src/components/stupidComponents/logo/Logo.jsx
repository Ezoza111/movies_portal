import React from "react";
import { Icon } from "../icon/Icon";
import { Link } from "react-router-dom";

export const Logo = (props) => {
  return (
    <Link to="/">
       <Icon 
        width="80px"
        height="80px"
        viewBox="0 0 45 45"
        iconId={props.iconId}
       />
    </Link>
  )
}