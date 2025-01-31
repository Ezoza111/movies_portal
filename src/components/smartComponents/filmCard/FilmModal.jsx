import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import CalendarIcon from "@mui/icons-material/CalendarToday";
import TimeIcon from "@mui/icons-material/AccessTime";
import { theme } from "../../../styles/Theme";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { MyButton } from "../../stupidComponents/button/MyButton";
import { useTheme, ThemeContext } from "../context/ThemeContext";

const FilmModal = ({
  open,
  handleClose,
  title,
  year,
  endYear,
  image,
  rank,
  description,
  runtimeMinutes,
  movieId,
}) => {
  // Перенаправление на страницу регистрации
  const navigate = useNavigate();
  const redirectSignUp = () => navigate("/login");
  const { isDark } = useTheme(ThemeContext);

  const { userName } = useSelector((state) => state.userName.userName);

  // Состояние для модалки неавторизованного пользователя
  const [authModalOpen, setAuthModalOpen] = useState(false);

  // Закрытие модалки
  const handleAuthModalClose = () => {
    setAuthModalOpen(false);
  };

  const localStorageKey = `favorites_${userName}`;
  const [favorites, setFavorites] = useLocalStorage([], "favorites");
  const [favorite, setFavorite] = useState(false);

  // Проверяем, есть ли фильм в избранном при загрузке модалки
  useEffect(() => {
    const isFavorite = favorites.some((film) => film.movieId === movieId);
    setFavorite(isFavorite);
  }, [movieId]);

  // Переключение избранного
  const toggleFavorite = () => {
    const storedFavorites =
      JSON.parse(localStorage.getItem(localStorageKey)) || [];

    if (favorite) {
      // Если фильм уже в избранном, удаляем его
      const updatedFavorites = storedFavorites.filter(
        (film) => film.movieId !== movieId
      );
      setFavorites(updatedFavorites);
      localStorage.setItem(localStorageKey, JSON.stringify(updatedFavorites));
    } else {
      // Если фильма нет в избранном, добавляем его
      const newFavorite = {
        title,
        year,
        endYear,
        image,
        rank,
        description,
        runtimeMinutes,
        movieId,
      };
      const updatedFavorites = [...storedFavorites, newFavorite];
      setFavorites(updatedFavorites);
      localStorage.setItem(localStorageKey, JSON.stringify(updatedFavorites));
    }

    setFavorite(!favorite);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='movie-title'
        aria-describedby='movie-description'>
        <ModalBox>
          <div className='modal-box-container'>
            <img loading='lazy' src={image} alt={title} />
            <div className='modal-content'>
              <h2 id='movie-title'>{title}</h2>
              <div className='info-wrap'>
                <div className='icon-text-wrap'>
                  <CalendarIcon />
                  {endYear ? (
                    <p>
                      {year} – {endYear}
                    </p>
                  ) : (
                    <p>{year}</p>
                  )}
                </div>
                {runtimeMinutes && (
                  <>
                    <div className='icon-text-wrap'>
                      <TimeIcon />
                      <p>{runtimeMinutes} min</p>
                    </div>
                  </>
                )}
                <div className='icon-text-wrap'>
                  <StarIcon />
                  <p>{rank}</p>
                </div>
              </div>
              <p>{description}</p>
              {/* Кнопка избранного */}
              <IconButton
                className='icon-button'
                onClick={() => {
                  if (!userName) {
                    setAuthModalOpen(true);
                  } else {
                    toggleFavorite();
                  }
                }}
                color='primary'
                aria-label='add to favorites'
                style={{ color: "#ffea00" }}>
                {favorite && userName ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
            </div>
          </div>
        </ModalBox>
      </Modal>

      {/* Модалка для неавторизованных пользователей */}
      <Modal open={authModalOpen} onClose={handleAuthModalClose}>
        <WarningModalBox>
          <Box sx={{ ...modalStyle }}>
            <h2>You are not logged in</h2>
            <p>To add movies to your favorites, please log in.</p>
            <MyButton
              className={`btn-sign-in-warning ${isDark ? "dark" : "light"}`}
              width='100%'
              maxWidth='150px'
              name='Log in'
              backgroundColor={`${isDark ? `${theme.colors.accent}` : `${theme.colors.accentLight}`}`}
              color={`${isDark ? '#000' : `${theme.colors.font}`}`}
              functionClick={redirectSignUp}
            />
          </Box>
        </WarningModalBox>
      </Modal>
    </>
  );
};

export default FilmModal;

const WarningModalBox = styled(Box)`
  text-align: center;
  h2 {
    padding-bottom: 10px;
  }
  p {
    padding-bottom: 20px;
  }
  button {
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: `${theme.colors.secondary}`,
  boxShadow: 24,
  p: 4,
};

// Стили для модалки
const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: ${theme.colors.secondary};
  border-radius: 4px;
  padding: 20px;
  outline: none;

  .modal-box-container {
    display: flex;
    gap: 20px;
  }

  .info-wrap {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }
  .icon-text-wrap {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  img {
    display: block;
    width: 200px;
    height: auto;
    border-radius: 4px;
  }

  .modal-content {
    padding: 15px;
    position: relative;
  }

  .icon-button {
    position: absolute;
    top: 0;
    right: 0;
  }

  h2 {
    font-size: 24px;
    margin: 0;
    padding-bottom: 10px;
    max-width: 80%;
  }
`;

PropTypes.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  endYear: PropTypes.string,
  rank: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  runtimeMinutes: PropTypes.string,
  movieId: PropTypes.string.isRequired,
};
