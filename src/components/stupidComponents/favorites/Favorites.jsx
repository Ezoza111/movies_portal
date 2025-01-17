import React from "react"
import { Link, ThemeProvider, Typography } from "@mui/material"
import { butonTheme } from "../../../styles/Theme"


export const Favorites = () => {
    return (
      <Typography variant='button'>
        <ThemeProvider theme={butonTheme}>
        <Link href="#" 
            underline="hover" 
            children='Favorites'
        />
        </ThemeProvider>
      </Typography>
    )
}