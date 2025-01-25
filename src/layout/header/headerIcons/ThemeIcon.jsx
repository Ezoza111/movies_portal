import React, { useContext } from "react";
import Brightness1Sharp  from "@mui/icons-material/Brightness1Sharp";
import Brightness5Sharp from '@mui/icons-material/Brightness5Sharp';
import IconButton from '@mui/material/IconButton';

import { ThemeContext } from "../../../components/smartComponents/context/ThemeContext";
import { theme } from "../../../styles/Theme";


export const ThemeIcon = () => {
    const {isDark, toggleTheme} = useContext(ThemeContext);
    const styless = isDark ? {color: theme.colors.accent} : {color: theme.colors.accentLight}
    return (
      <IconButton onClick={toggleTheme} style={styless}>
        {isDark ? <Brightness1Sharp /> : <Brightness5Sharp/>}
      </IconButton>
    )
}