import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import TimeIcon from '@mui/icons-material/AccessTime';
import { theme } from '../../../styles/Theme';
import { useLocalStorage } from '../../smartComponents/customHooks/useLocalStorage';
import { SignUpLink } from '../../../layout/signUpPage/SignUpLink';
import { useNavigate } from 'react-router-dom';

const FilmModal = ({
  open,
  handleClose,
  title,
  year,
  image,
  rank,
  description,
  runtimeMinutes,
  movieId, 
  userName,
  updateFavorites,
}) => {
  const [favorites, setFavorites] = useLocalStorage([], "favorites");
  const [favorite, setFavorite] = useState(false);
  //перенаправление на страницу регистрации
  const navigate = useNavigate();
  const redirectSignUp = () => navigate('/login');

  useEffect(() => {
  // Проверяем, есть ли фильм в избранном только при монтировании или при изменении movieId
  const isFavorite = favorites.some((film) => film.movieId === movieId);
  
  // Избегаем лишних обновлений состояния
  if (isFavorite !== favorite) {
    setFavorite(isFavorite);
  }
}, [movieId, favorite, favorites]); // Здесь dependencies только те, что зависят от изменения movieId или текущего состояния favorite


  // Переключение избранного
  const toggleFavorite = () => {
    let updatedFavorites;
  
    if (favorite) {
      // Если фильм уже в избранном, удаляем его
      updatedFavorites = favorites.filter((film) => film.movieId !== movieId);
      console.log(updatedFavorites); // Логируем для проверки
      
    } else {
      // Если фильма нет в избранном, добавляем его
      const newFavorite = {
        title,
        year,
        image,
        rank,
        description,
        runtimeMinutes,
        movieId,
      };
  
      // Проверяем, не добавлен ли этот фильм раньше, и добавляем только если его нет
      updatedFavorites = [...favorites, newFavorite];
      console.log(updatedFavorites); // Логируем для проверки
    }
  
    // Обновляем локальное хранилище и состояние
    setFavorites(updatedFavorites); // Здесь favorites всегда будет обновляться без потерь
    setFavorite(!favorite);
  
    // Проверяем, передана ли функция updateFavorites
    if (updateFavorites) {
      updateFavorites(updatedFavorites);
    }
  };
  

  return (
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
                <p>{year}</p>
              </div>
              <div className='icon-text-wrap'>
                <TimeIcon />
                <p>{runtimeMinutes} min</p>
              </div>
              <div className='icon-text-wrap'>
                <StarIcon />
                <p>{rank}</p>
              </div>
            </div>
            <p>{description}</p>
            {/* Кнопка избранного */}
            <IconButton
              className="icon-button"
              onClick={userName === null ? redirectSignUp : toggleFavorite}
              color="primary"
              aria-label="add to favorites"
              style={{ color: '#ffea00' }}
            >
              {favorite ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </div>
        </div>
      </ModalBox>
    </Modal>
  );
};

export default FilmModal;

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
