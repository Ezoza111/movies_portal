import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { buttonTheme } from "../../../styles/Theme";
import { ThemeProvider } from "@emotion/react";
import { MyButton } from "../../stupidComponents/button/MyButton";

// вход
export const Entrance = ({ userName, changeUserStatus}) => {
  const [open, setOpen] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");
  //const [userOutAccaunt, setUserOutAccaunt] = React.useState(true)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSignIn = () => {
    const enterAccount = () => {
      const user = JSON.parse(localStorage.getItem(nameValue));
      if (user[0].password === passValue) {
        console.log(`userStatus при клики на ышпт IN ${userName}`)
        console.log(typeof nameValue);
        changeUserStatus(`${nameValue}`)
        console.log(`userStatus после клика IN ${userName}`)
      } else {
        alert("Ой, не правильный пароль");
      }
    }
    localStorage.getItem(nameValue)
      ? enterAccount()
      : alert("Пользователя с таким именем не существует");
  }
  return userName === null ? (
    <ThemeProvider theme={buttonTheme}>
      <MyButton name='Sign In' functionClick={handleClickOpen} />
      <Dialog
        Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='enrtanceDialog'

        PaperProps={{ component: "form", onSubmit: 
          (event) => {
          event.preventDefault();
          handleSignIn() }}}>
        <DialogTitle id='enrtanceDialog' />
        <DialogContent>
          <DialogContentText>Log in to see video</DialogContentText>
          <TextField
            autoFocus
            required
            margin='dense'
            id='name'
            value={nameValue}
            onChange={(event) => {
              setNameValue(event.target.value);
            }}
            label='User Name'
            type='text'
            fullWidth
          />
          <TextField
            autoFocus
            required
            margin='dense'
            id='pass'
            value={passValue}
            onChange={(event) => {
              event.preventDefault();
              setPassValue(event.target.value);
            }}
            label='Password'
            type='Password'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <MyButton name='Sign in' typeBtn='submit' />
          <MyButton functionClick={handleClose} name='Cancel' />
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={buttonTheme}>
      <>
        <MyButton name='Exit' functionClick={()=>changeUserStatus(null)} />
      </>
    </ThemeProvider>
  );
};
