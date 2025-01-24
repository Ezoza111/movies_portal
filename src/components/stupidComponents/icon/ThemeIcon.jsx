import React, { useContext } from "react";
import { ThemeContext } from "../../smartComponents/context/ThemeContext";
import Brightness1Sharp  from "@mui/icons-material/Brightness1Sharp";
import Brightness5Sharp from '@mui/icons-material/Brightness5Sharp';
import IconButton from '@mui/material/IconButton';

export const ThemeIcon = () => {
    const {isDark, toggleTheme} = useContext(ThemeContext)
    return (
      <IconButton onClick={toggleTheme}
      style={isDark ? { color: '#ffea00' } : { color: '#171715' }}>
        {isDark ? <Brightness1Sharp /> : <Brightness5Sharp/>}
      </IconButton>
    )
}