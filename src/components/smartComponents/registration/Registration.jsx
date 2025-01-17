import React, { useEffect } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ThemeProvider, TextField } from "@mui/material"
import { MyButton } from "../../stupidComponents/button/MyButton"
import { butonTheme } from "../../../styles/Theme"

export const Register = ({setArray, arrayUserLocalStorage}) => {
    const [open, setOpen] = React.useState(false);
    const [nameValue, setNameValue] = React.useState('');
    const [passValue, setPassValue] = React.useState('');
    const [passCheckValue, setPassCheckValue] = React.useState('');
    //useEffect(() => {localStorage.setItem('user', JSON.stringify([...arrayUserLocalStorage]))}, [arrayUserLocalStorage])
        const handleClickOpen = () => {
            setOpen(true)
         }
         const handleClose = () => {
            setOpen(false)
         }
         const handleRegistration = () => {
                const checkUserName = () => {
                    //localStorage.removeItem('user')
                        localStorage.setItem('user', JSON.stringify([{name: nameValue, password: passValue}]))
                    //localStorage.setItem('user', JSON.stringify([localStorage.getItem('user'), {name: nameValue, password: passValue}])); 
                    // if (users) {
                    //     users.map((el) => {el.name === nameValue ?
                    //     alert('Пользователь уже существует поменяйте имя пользователя') :
                    //     localStorage.setItem('user', [localStorage.getItem('user'), JSON.stringify({name: nameValue, password: passValue})]); 
                    // }) }
                    //localStorage.setItem('user', [localStorage.getItem('user'), JSON.stringify({name: nameValue, password: passValue})]);
                    //setArray([...arrayUserLocalStorage, {name: nameValue, password: passValue}])
                    //setKey([...key, {name: nameValue, password: passValue}])
                    //console.log(key[0].value);
                    //key.find((el) => el.key === nameValue ? console.log('Bvz ceotcndetn') : setKey([...key, {[nameValue]: passValue}]))
                }
                passValue === passCheckValue ? checkUserName() : console.log('неверный пароли 1 и 2');
                handleClose()
         }
            
    return (
        <ThemeProvider theme={butonTheme}>
            <MyButton name='Registration' functionClick={handleClickOpen}></MyButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="registrationDialog"
               PaperProps={{component: 'form', onSubmit: (event)=>{ 
                event.preventDefault();
                handleRegistration()}}}>
                <DialogTitle id='registrationDialog' />
                <DialogContent>
                <DialogContentText>Log in to see video</DialogContentText>
                <TextField autoFocus
                        required
                        margin="normal"
                        id="name"
                        value={nameValue}
                        onChange={(event) => {setNameValue(event.target.value)}}
                        label='User Name'
                        type="text"
                        fullWidth
                />
                 <TextField autoFocus
                        required
                        margin="normal"
                        id="pass"
                        value={passValue}
                        onChange={(event) => {setPassValue(event.target.value)}}
                        label='Password'
                        type="Password"
                        fullWidth
                />
                 <TextField autoFocus
                        required
                        margin="dence"
                        id="passCheck"
                        value={passCheckValue}
                        onChange={(event) => {setPassCheckValue(event.target.value)}}
                        label='Password'
                        type="Password"
                        fullWidth
                />
                </DialogContent>
                <DialogActions>
                <MyButton name='Registration' typeBtn='submit' />
                <MyButton functionClick={handleClose} name='Cancel'/>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    )
}