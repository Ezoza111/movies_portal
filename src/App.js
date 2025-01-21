import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { FavoritesPage } from "./layout/favoritesPage/FavoritesPage";
import { Routes, Route, Link } from "react-router-dom";
import { RoutingComponent } from "./routingComponent/RoutingComponent";
import { SignUp } from "./components/smartComponents/signUp/SignUp";
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
        <Route path='/' element={<RoutingComponent userStatusOut={userStatusOut}/>}>
          <Route index element={<Main />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/login' element={<SignUpPage changeUserStatus={changeUserStatus}/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
