import React from "react";
import styled from "styled-components";
import { MainContainer } from "../../components/stupidComponents/container/MainContainer.styled";
import FilmCard from "../../components/stupidComponents/filmCard/FilmCard";
import { useLocalStorage } from "../../components/smartComponents/customHooks/useLocalStorage";

export const FavoritesPage = () => {
  let  [movies, setMovies] = React.useState(JSON.parse(localStorage.getItem('favoriteFilmsArray')))
    let  moviesArr= [{primaryTitle: "kkk", startYear: '2025', primaryImage:'2023', id:'1'},
      {primaryTitle: "kkk", startYear: '2025', primaryImage:'2023', id:'2'},
      {primaryTitle: "kkk", startYear: '2025', primaryImage:'2023', id:'3'},
      {primaryTitle: "kkk", startYear: '2025', primaryImage:'2023', id:'4'},
    ]
  
   
    return (
      <StyledFavorites>
         <MainContainer direction='column' wrap='wrap'>
            <div>FavoritesPage</div>
            <button onClick={() => {localStorage.setItem('favoriteFilmsArray', JSON.stringify(moviesArr))}}>addLsArray</button>
            <button onClick={() => {localStorage.removeItem('favoriteFilmsArray')}}>removeLsArray</button>
            {movies.map((movie) => <FilmCard key={movie.id}
              title={movie.primaryTitle}
              year={movie.startYear}
              rank={movie.averageRating}
              image={movie.primaryImage}
              movie={movie} />)}

         </MainContainer>
      </StyledFavorites>
    )
}

const StyledFavorites = styled.section`
      width: 100%;
      border: 1px solid red;
      padding-top: 30px;
      padding-bottom: 30px;

      div {
        
      }
  `