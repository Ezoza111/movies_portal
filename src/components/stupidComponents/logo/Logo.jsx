import React from "react";
import styled from 'styled-components'
import { Icon } from "../icon/Icon";

export const Logo = (props) => {
  return (
    <StyledLogo href="/">
       <Icon 
        width="80px"
        height="80px"
        viewBox="0 0 45 45"
        iconId={props.iconId}
       />
    </StyledLogo>
  )
}

const StyledLogo = styled.a`
  
`