import {
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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeUserStatus } from "../../../store/usernameSlice";
import { useState } from "react";

// вход
export const Entrance = () => {
  const [open, setOpen] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const { userName } = useSelector((state) => state.userName.userName);
  const dispatch = useDispatch();

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
        dispatch(changeUserStatus(`${nameValue}`));
        dispatch(changeUserStatus(false));
      } else {
        alert("Ой, не правильный пароль");
      }
    };
    localStorage.getItem(nameValue)
      ? enterAccount()
      : alert("Пользователя с таким именем не существует");
  };
  return userName === null ? (
    <ThemeProvider theme={buttonTheme}>
      <MyButton maxWidth='200px' width='100%' name='Sign In' functionClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='entranceDialog'
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            handleSignIn();
          },
        }}>
        <DialogTitle id='entranceDialog' />
        <DialogContent sx={{maxWidth: '500px'}}>
          <DialogContentText sx={{paddingBottom: '15px'}}>Please sign in to your account to be able to add movies to your favorites</DialogContentText>
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
        <DialogActions sx={{justifyContent: 'center', paddingBottom: '32px'}}>
          <MyButton maxWidth='150px' width='100%' name='Sign in' typeBtn='submit' />
          <MyButton maxWidth='150px' width='100%' functionClick={handleClose} name='Cancel' />
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={buttonTheme}>
      <>
        <MyButton
          name='Exit'
          functionClick={() => dispatch(changeUserStatus(null))}
        />
      </>
    </ThemeProvider>
  );
};
