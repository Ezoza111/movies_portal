import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React from "react";
import { butonTheme } from "../../../styles/Theme";
import { ThemeProvider } from "@emotion/react";
import { MyButton } from "../../stupidComponents/button/MyButton";
import PropTypes from "prop-types";

// вход
export const Entrance = () => {
   const [open, setOpen] = React.useState(false)
   const [nameValue, setNameValue] = React.useState('');
   const [passValue, setPassValue] = React.useState('');

    const handleClickOpen = () => {
       setOpen(true)
    }
    const handleClose = () => {
      setOpen(false)
   }
   const handleLogIn = () => {
      const entranceAkkaunt = () => {
        const user = JSON.parse(localStorage.getItem(nameValue));
        user[0].password === passValue? alert('Вы вошли в аккаунт') : alert('Ой не правильный пороль');
      }
      localStorage.getItem(nameValue) ? entranceAkkaunt() : alert('Пользователь с таким именим не существует')
    }
  return (
   <ThemeProvider theme={butonTheme}>
    <MyButton name='Entrance' functionClick={handleClickOpen} />
   <Dialog open={open} onClose={handleClose} aria-labelledby="enrtanceDialog"
      PaperProps={{component: 'form', onSubmit: ()=>handleLogIn()}}
   >
    <DialogTitle id="enrtanceDialog"/>
    <DialogContent>
      <DialogContentText>Entrance to see video</DialogContentText>
      <TextField autoFocus
        required
        margin="dence"
        id="name"
        value={nameValue}
        onChange={(event) => {setNameValue(event.target.value)}}
        label='User Name'
        type="text"
        fullWidth
        />
      <TextField autoFocus
        required
        margin="dence"
        id="pass"
        value={passValue}
        onChange={(event) => {setPassValue(event.target.value)}}
        label='Password'
        type="Password"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
    <MyButton name='Log in' typeBtn='submit' />
    <MyButton functionClick={handleClose} name='Cancel' />
    </DialogActions>
   </Dialog>
   </ThemeProvider>
  )
}

