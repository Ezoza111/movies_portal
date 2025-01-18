import React, { useEffect } from "react";
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { FavoritesPage } from "./layout/favoritesPage/FavoritesPage";


function App() {

  return (
    <>
     <Header />
     <Main />
     <FavoritesPage />
    </>
  );
}

export default App;
