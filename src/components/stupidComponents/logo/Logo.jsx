import React from "react";
import { Icon } from "../icon/Icon";

export const Logo = (props) => {
  return (
    <a href="/">
       <Icon 
        width="80px"
        height="80px"
        viewBox="0 0 45 45"
        iconId={props.iconId}
       />
    </a>
  )
}