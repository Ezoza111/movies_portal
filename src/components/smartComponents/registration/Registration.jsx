import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  ThemeProvider,
  TextField,
} from "@mui/material";
import { MyButton } from "../../stupidComponents/button/MyButton";
import { buttonTheme } from "../../../styles/Theme";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeUserStatus } from "../../../store/usernameSlice";
import { useState } from "react";

export const Register = () => {
  const { userName } = useSelector((state) => state.userName.userName);
  const dispatch = useDispatch();
  const userAdd = (name) => {
    dispatch(changeUserStatus(`${name}`));
  };

  const [open, setOpen] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [passCheckValue, setPassCheckValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleRegistration = (props) => {
    const checkUserName = () => {
      if (localStorage.getItem(nameValue)) {
        alert("Пользователь с таким именем уже существует!");
      } else {
        localStorage.setItem(
          `${nameValue}`,
          JSON.stringify([{ name: nameValue, password: passValue }])
        );
        userName === null
          ? userAdd(nameValue)
          : alert("Нажмите кнопку Exit для входа под другим именем");
        handleClose();
      }
    };
    passValue.length < 4
      ? alert("Слишком короткий пароль! Нужно ввести минимум 4 символа!")
      : passValue === passCheckValue
      ? checkUserName()
      : alert("Пароли не совпадают. Попробуйте снова");
  };

  return (
    <ThemeProvider theme={buttonTheme}>
      <MyButton maxWidth='200px' width='100%' name='Sign Up' functionClick={handleClickOpen}></MyButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='registrationDialog'
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            handleRegistration();
          },
        }}>
        <DialogTitle id='registrationDialog' />
        <DialogContent sx={{maxWidth: '500px'}}>
          <DialogContentText>Please sign in to your account to be able to add movies to your favorites</DialogContentText>
          <TextField
            autoFocus
            required
            margin='normal'
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
            margin='normal'
            id='pass'
            value={passValue}
            onChange={(event) => {
              setPassValue(event.target.value);
            }}
            label='Password'
            type='Password'
            fullWidth
          />
          <TextField
            autoFocus
            required
            margin='dense'
            id='passCheck'
            value={passCheckValue}
            onChange={(event) => {
              setPassCheckValue(event.target.value);
            }}
            label='Password'
            type='Password'
            fullWidth
          />
        </DialogContent>
        <DialogActions sx={{justifyContent: 'center', paddingBottom: '32px'}}>
          <MyButton maxWidth='150px' width='100%' name='Sign Up' typeBtn='submit' />
          <MyButton maxWidth='150px' width='100%' functionClick={handleClose} name='Cancel' />
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};
