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

export const Register = ({ userName, changeUserStatus}) => {
  const [open, setOpen] = React.useState(false);
  const [nameValue, setNameValue] = React.useState("");
  const [passValue, setPassValue] = React.useState("");
  const [passCheckValue, setPassCheckValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleRegistration = (props) => {
    const checkUserName = () => {
      if (localStorage.getItem(nameValue)) {
        alert("Пользователь с таким именим уже существует ");
      } else {
        localStorage.setItem(`${nameValue}`, JSON.stringify([{ name: nameValue, password: passValue }]));

        userName === null ? alert("Ура вы зарегистрировались нажмите на кнопку Sign In для входа в приложение"): alert('Нажмите кнопку Exit для входа под другим именим')
        //changeUserStatus(false);
        handleClose();
      }
    };
    passValue.length < 4
      ? alert("Слишком короткий пороль введите чуть по длиннее")
      : passValue === passCheckValue
      ? checkUserName()
      : alert("Пороли не совпадают попробуйте снова");
  };

  return (
    <ThemeProvider theme={buttonTheme}>
      <MyButton name='Sign Up' functionClick={handleClickOpen}></MyButton>
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
        <DialogContent>
          <DialogContentText>Log in to see video</DialogContentText>
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
            margin='dence'
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
        <DialogActions>
          <MyButton name='Sign Up' typeBtn='submit' />
          <MyButton functionClick={handleClose} name='Cancel' />
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};
