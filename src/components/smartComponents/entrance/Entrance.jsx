import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React from "react";
import { butonTheme } from "../../../styles/Theme";
import { ThemeProvider } from "@emotion/react";
import { MyButton } from "../../stupidComponents/button/MyButton";
import { ExitAccaunt } from "../../stupidComponents/exitAccaunt/exitAccaunt";

// вход
export const Entrance = ({loginStatusTrue, loginStatusFalse}) => {
   const [open, setOpen] = React.useState(false)
   const [nameValue, setNameValue] = React.useState('');
   const [passValue, setPassValue] = React.useState('');
   const [userOutAccaunt, setUserOutAccaunt] = React.useState(true)
   const signAccaunt = () => {
    setUserOutAccaunt(false)
}
const outAccaunt = () => {
  setUserOutAccaunt(true)
}
    const handleClickOpen = () => {
       setOpen(true)
    }
    const handleClose = () => {
      setOpen(false)
   }
   const handleSignIn = () => {
      const enterAkkaunt = () => {
        const user = JSON.parse(localStorage.getItem(nameValue));
        if (user[0].password === passValue) {
          loginStatusFalse()
          signAccaunt()
        }
          else { alert('Ой не правильный пороль')};
      }
      localStorage.getItem(nameValue) ? enterAkkaunt() : alert('Пользователь с таким именим не существует')
    }
    const exitUserAccaunt =() => {
      loginStatusTrue();
      outAccaunt();
    }
  return (
    userOutAccaunt ?  
      <ThemeProvider theme={butonTheme}>
        <MyButton name='Sign In' functionClick={handleClickOpen} />
        <Dialog Dialog open={open} onClose={handleClose} aria-labelledby="enrtanceDialog"
      PaperProps={{component: 'form', onSubmit: ()=>handleSignIn()}}>
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
        onChange={(event) => {event.preventDefault(); setPassValue(event.target.value)}}
        label='Password'
        type="Password"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
    <MyButton name='Sign in' typeBtn='submit' />
    <MyButton functionClick={handleClose} name='Cancel' />
    </DialogActions>
      </Dialog>
    
    </ThemeProvider> : 
    <ThemeProvider theme={butonTheme}>
    <> <Box component='h3'>{nameValue.toLocaleUpperCase()}</Box>
    <MyButton name='Exit' functionClick={exitUserAccaunt} /> 
 </>
     </ThemeProvider>
  //   <ThemeProvider theme={butonTheme}>
  //     {userOutAccaunt ? <MyButton name='Sign In' functionClick={handleClickOpen} /> :
  //       <> <Box component='h3'>{nameValue.toLocaleUpperCase()}</Box>
  //          <MyButton name='Exit' functionClick={exitUserAccaunt} /> 
  //       </> 
  //     }  
  //     <Dialog open={open} onClose={handleClose} aria-labelledby="enrtanceDialog"
  //     PaperProps={{component: 'form', onSubmit: ()=>handleSignIn()}}
  //  >
  //   <DialogTitle id="enrtanceDialog"/>
  //   <DialogContent>
  //     <DialogContentText>Entrance to see video</DialogContentText>
  //     <TextField autoFocus
  //       required
  //       margin="dence"
  //       id="name"
  //       value={nameValue}
  //       onChange={(event) => {setNameValue(event.target.value)}}
  //       label='User Name'
  //       type="text"
  //       fullWidth
  //       />
  //     <TextField autoFocus
  //       required
  //       margin="dence"
  //       id="pass"
  //       value={passValue}
  //       onChange={(event) => {event.preventDefault(); setPassValue(event.target.value)}}
  //       label='Password'
  //       type="Password"
  //       fullWidth
  //     />
  //   </DialogContent>
  //   <DialogActions>
  //   <MyButton name='Sign in' typeBtn='submit' />
  //   <MyButton functionClick={handleClose} name='Cancel' />
  //   </DialogActions>
  //     </Dialog>
  //   </ThemeProvider>
  )
}

