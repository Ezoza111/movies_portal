
import React from "react";
import { MyButton } from "../../stupidComponents/button/MyButton";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ThemeProvider } from "@mui/material";
import { butonTheme } from "../../../styles/Theme";
import { Entrance } from "../entrance/Entrance";
import { Register } from "../registration/Registration";

export const Login = ({loginStatusTrue, loginStatusFalse}) => {
    const [openLogin, setOpenLogin] = React.useState(false);
    const handleClickOpen = () => {
        setOpenLogin(true)
     }
     const handleClose = () => {
        setOpenLogin(false)
     }

    return(
        <ThemeProvider theme={butonTheme}>
         <MyButton name='Login' functionClick={handleClickOpen}/>
          <Dialog 
            open={openLogin} 
            onClose={handleClose}
            aria-labelledby="selectDialog">
               <DialogTitle id="selectDialog"/>
               <DialogContent>
                 <DialogContentText>Select action</DialogContentText>
               </DialogContent>
               <DialogActions>
                <Entrance loginStatusTrue = {loginStatusTrue} loginStatusFalse= {loginStatusFalse}/>
                <Register/>
             </DialogActions>
          </Dialog>
        </ThemeProvider>
    )
}