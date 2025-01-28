import React, { lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary} from "react-error-boundary";
import { ErrorFallback } from "./components/smartComponents/errorFallback/ErrorFallback";

import RoutingComponent from "./routingComponent/RoutingComponent";

const Main = lazy(() => import ("./layout/main/Main"));
const FavoritesPage = lazy(() => import("./layout/favoritesPage/FavoritesPage"));
const SignUpPage = lazy(() => import("./layout/signUpPage/SignUpPage"));

function App() {
    return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path='/' element={<RoutingComponent/>}>
          <Route index element={<Main />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/login' element={<SignUpPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;