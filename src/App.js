import React, { useEffect } from "react";
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { FavoritesPage } from "./layout/favoritesPage/FavoritesPage";
import { Routes, Route, Link } from "react-router-dom";
import { RoutingComponent } from "./routingComponent/RoutingComponent";


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<RoutingComponent />}>
        <Route index element={<Main />} />
        <Route path='/favorites'element={<FavoritesPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
