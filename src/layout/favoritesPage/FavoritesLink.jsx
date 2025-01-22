import React from "react"
import { ThemeProvider, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { buttonTheme } from "../../styles/Theme"


export const FavoritesLink = () => {
    return (
      <Typography variant='button'>
        <ThemeProvider theme={buttonTheme}>
        <Link to="/favorites">Favorites</Link>
        </ThemeProvider>
      </Typography>
    )
}