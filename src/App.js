import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { FavoritesPage } from "./layout/favoritesPage/FavoritesPage";
import { Routes, Route, Link } from "react-router-dom";
import { RoutingComponent } from "./routingComponent/RoutingComponent";
import { SignUpPage } from "./layout/signUpPage/SignUpPage";
import { useStepContext } from "@mui/material";

function App() {
  const [userStatusOut, setUserStatusOut] = React.useState(true)
   const changeUserStatus = (props) => {
      setUserStatusOut(props)
   }
    return (
    <>
      <Routes>
        <Route path='/' element={<RoutingComponent userStatusOut={userStatusOut} changeUserStatus={changeUserStatus}/>}>
          <Route index element={<Main />} />
          <Route path='/favorites' element={<FavoritesPage  />} />
          <Route path='/login' element={<SignUpPage changeUserStatus={changeUserStatus} userStatusOut={userStatusOut}/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
