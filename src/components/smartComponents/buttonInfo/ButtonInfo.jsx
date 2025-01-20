import { Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Icon, IconButton, makeStyles, ThemeProvider} from "@mui/material";
import React  from "react";
import { MyButton } from "../../stupidComponents/button/MyButton";
import { buttonTheme } from "../../../styles/Theme";


export const ButttonInfo = ({addFavorite, movie}) => {
  
    const [openLogin, setOpenLogin] = React.useState(false);

    const checkMovieLs = () => {
      if(localStorage.getItem('favoriteFilmsArray')) {
        const number = JSON.parse(localStorage.getItem('favoriteFilmsArray')).findIndex((el) => el.id === movie.id)
        return number > 0
      } else {
        return false
      }
    }
    const [statusBtnClick, setStatusbtnClick] = React.useState(checkMovieLs);


    const handleClickOpen = () => {
      setOpenLogin(true)
   }
   const handleClose = () => {
      setOpenLogin(false)
   }
    
    const handleClickAddMovie =() => {
         // надо еще прописать если пользователь авторизовать то произойдет вот это все 
        addFavorite(movie.id);
        setStatusbtnClick(!statusBtnClick); //
       // если не авторизован если не авторизован 
       // то направляется на страничку 
     }
    const handleClickRemoveMovie = () => {
      const moviesLS = JSON.parse(localStorage.getItem('favoriteFilmsArray'));
      const newMoviesList = moviesLS.filter((film) => film.id !== movie.id);
      localStorage.setItem('favoriteFilmsArray', JSON.stringify(newMoviesList));
      setStatusbtnClick(statusBtnClick);
    }
   return (
       <ThemeProvider theme={buttonTheme}>
        <MyButton name='Info' functionClick={handleClickOpen}/> 
        <Dialog
            open={openLogin} 
            onClose={handleClose}
            aria-labelledby="movieInfoDialog"
        >
          <DialogTitle id="movieInfoDialog" />
          <DialogContent>
                 <DialogContentText>
                     Информация о фильме все что душе угодно
                 </DialogContentText>
          </DialogContent>
          <DialogActions>
            {statusBtnClick  ? <MyButton name='Add LS' functionClick={handleClickAddMovie} /> : <MyButton name='Remove LS' functionClick={handleClickRemoveMovie} />}
          </DialogActions>
         </Dialog>
       </ThemeProvider>
       // idForBtnLike если он есть в LS то иконка удалить если его нет то сердечка
   )
}