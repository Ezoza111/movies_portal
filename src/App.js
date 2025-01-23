import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { FavoritesPage } from "./layout/favoritesPage/FavoritesPage";
import { Routes, Route, Link } from "react-router-dom";
import { RoutingComponent } from "./routingComponent/RoutingComponent";
import { SignUpPage } from "./layout/signUpPage/SignUpPage";
import { useStepContext } from "@mui/material";
import { ErrorBoundary} from "react-error-boundary";
import { ErrorFallback } from "./components/smartComponents/errorFallback/ErrorFallback";


function App() {
  const [user, setUser] = React.useState({
    userStatusOut: true,
    userName: null,
  });

  const changeUserStatus = (props) =>{
    const newUser = {...user};
    if (typeof props === 'boolean') {
      newUser.userStatusOut = props;
      setUser(newUser)
    }
    if (typeof props === 'string') {
      newUser.userName = props
      setUser(newUser)
    } 
    if (props=== null) {
       newUser.userName = null
    setUser(newUser)
    }
   
  };
  
    return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path='/' element={<RoutingComponent userName={user.userName} changeUserStatus={changeUserStatus}/>}>
          <Route index element={<Main userName={user.userName}/>} />
          <Route path='/favorites' element={<FavoritesPage userName={user.userName}/>} />
          <Route path='/login' element={<SignUpPage  userName={user.userName} changeUserStatus={changeUserStatus}/>} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;