import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ApiIcon from '@mui/icons-material/Api';

import { theme } from "../../../styles/Theme";


export const Logo = ({classStyle}) => {
  const navigate = useNavigate();
  const styless = classStyle ? {color: theme.colors.accent} : {color: theme.colors.accentLight}

  return (
    <IconButton style={styless} onClick={() => navigate('/')}>
      <ApiIcon size="medium"/>APP
    </IconButton>
  )
}