import {
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
  IconButton,
  makeStyles,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { MyButton } from "../../stupidComponents/button/MyButton";
import { buttonTheme } from "../../../styles/Theme";
import { useLocalStorage } from "../customHooks/useLocalStorage";

export const ButttonInfo = ({ movie, movies }) => {
  const [favoriteFilms, setFavoriteFilms] = useLocalStorage([],"favoriteFilmsArray");

  const addFavorite = () => {
    const newItem = movies.find((film) => film.id === movie.id); //
    setFavoriteFilms([...favoriteFilms, newItem]);
  };
  const removeFavorite = () => {
    const newFilmsArray = favoriteFilms.filter((film) => film.id !== movie.id);
    setFavoriteFilms(newFilmsArray);
  };
  const [statusBtnClick, setStatusbtnClick] = React.useState(true);

  const [openModalCard, setModalCard] = React.useState(false);
  const handleClickOpen = () => {
    setModalCard(true);
  };
  const handleClose = () => {
    setModalCard(false);
  };

  const handleClickAddMovie = () => {
    // надо еще прописать если пользователь авторизовать то произойдет вот это все
    addFavorite();
    setStatusbtnClick(false); //
    // если не авторизован если не авторизован
    // то направляется на страничку
  };
  const handleClickRemoveMovie = () => {
    removeFavorite();
    setStatusbtnClick(true);
  };
  return (
    <ThemeProvider theme={buttonTheme}>
      <MyButton name="Info" functionClick={handleClickOpen} />
      <Dialog
        open={openModalCard}
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
          {statusBtnClick ? (
            <MyButton name="Add LS" functionClick={handleClickAddMovie} />
          ) : (
            <MyButton name="Remove LS" functionClick={handleClickRemoveMovie} />
          )}
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};
