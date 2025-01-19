import styled from "styled-components";

const FilmCard = ({ title, year, rank, image }) => {
  return (
    <StyledFilmCard className='film-card'>
      <img src={image} alt={title} />
      <h2>
        {rank}. {title}
      </h2>
      <p>Year: {year}</p>
    </StyledFilmCard>
  );
};

export default FilmCard;

const StyledFilmCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 50px;
    height: auto;
    border-radius: 5px;
  }

  h2 {
    font-size: 18px;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;
