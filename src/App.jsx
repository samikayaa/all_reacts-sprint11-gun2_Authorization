import React, { useEffect } from 'react';
import axios from 'axios';
import './index.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

import { Routes, Route } from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContextProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute"

function App() {
  useEffect(() => {
    axios
      .post('https://nextgen-project.onrender.com/api/s11d2/friends', {
        name: 'Mark',
        email: 'mark@f.com',
        age: 60,
      })
      .then((res) => console.log(res, 'al'))
      .catch((error) => console.log(error));
  }, []);
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />

        <Switch>
          <PrivateRoute exact path="/">
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute exact path="/friends">
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute path="/login">
            <LoginForm />
          </PrivateRoute>
          <PrivateRoute path="/friends/add">
            <AddFriend />
          </PrivateRoute>

        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;
