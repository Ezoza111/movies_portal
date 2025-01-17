import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React from "react";
import { butonTheme } from "../../../styles/Theme";
import { ThemeProvider } from "@emotion/react";
import { MyButton } from "../../stupidComponents/button/MyButton";
import PropTypes from "prop-types";

// вход
export const Entrance = ({arrayUserLocalStorage}) => {   // получает массив пользователя props.arrayUserLocalStorage
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
      //const checkSaveUser = (localStorage.getItem('user')).find((el) => el.name === nameValue  && el.password === passValue);
      //if(checkSaveUser !== undefined) {
       //alert('вы зареганы');
      //  handleClose();
      //}
      console.log(localStorage.getItem('user'));
      alert('пользователь не найден')
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

