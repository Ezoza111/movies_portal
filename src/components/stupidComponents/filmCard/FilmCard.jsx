import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const FilmCard = ({ title, year, rank, image }) => {
  return (
    <StyledFilmCard className='film-card'>
      <img loading='lazy' src={image} alt={title} />
      <div className='text-container'>
        <h2>
          {rank}. {title}
        </h2>
        <p>{year}</p>
      </div>
    </StyledFilmCard>
  );
};

export default FilmCard;

const StyledFilmCard = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${theme.secondary};
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
  }

  p {
    margin: 0;
  }
`;
