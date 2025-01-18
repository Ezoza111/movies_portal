import React from "react"
import { ThemeProvider, Typography } from "@mui/material"
import { butonTheme } from "../../../styles/Theme"
import { Link } from "react-router-dom"


export const FavoritesLink = () => {
    return (
      <Typography variant='button'>
        <ThemeProvider theme={butonTheme}>
        <Link to="/favorites">Favorites</Link>
        </ThemeProvider>
      </Typography>
    )
}