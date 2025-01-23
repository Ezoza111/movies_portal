import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import FilmModal from './FilmModal';

const FilmCard = ({ title, year, rank, image, description, runtimeMinutes, movieId, userName}) => {
  const [open, setOpen] = useState(false);

  // Открытие и закрытие модалки
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledFilmCard className='film-card' onClick={handleOpen}>
        <img loading='lazy' src={image} alt={title} />
        <div className='text-container'>
          <StyledRank>{rank}</StyledRank>
          <h2>{title}</h2>
          <p>{year}</p>
        </div>
      </StyledFilmCard>

      {/* Модалка с информацией о фильме */}
      <FilmModal
        movieId={movieId}
        open={open}
        handleClose={handleClose}
        title={title}
        year={year}
        image={image}
        rank={rank}
        description={description}
        runtimeMinutes={runtimeMinutes}
        userName={userName}
      />
    </>
  );
};

export default FilmCard;

// Стили для карточки фильма
const StyledRank = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${theme.colors.accent[500]};
  color: ${theme.colors.font};
  padding: 5px 10px;
  border-radius: 0 4px 0 4px;
`;

const StyledFilmCard = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${theme.colors.secondary};
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  img {
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 290px;
    object-fit: cover;
  }

  .text-container {
    padding: 15px;
    gap: 5px;
  }

  h2 {
    font-size: 18px;
    margin: 0;
    padding-bottom: 5px;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
  }
`;
