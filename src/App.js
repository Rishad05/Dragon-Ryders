import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Destination from './Component/Destination/Destination';
import NotMatch from './Component/NotMatch/NotMatch';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import VehicleInfo from './Component/VehicleInfo/VehicleInfo';


export const userContext =createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
          <Switch>
          
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/destination/:vehicleName/:id">
              <Destination></Destination>
            </PrivateRoute>
            <PrivateRoute path="/destination">
              <Destination></Destination>
            </PrivateRoute>
            <PrivateRoute path="/vehicleInfo/:id">
              <VehicleInfo></VehicleInfo>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotMatch></NotMatch>
            </Route>
          </Switch>
      </Router>
      </userContext.Provider>
  );
}

export default App;
