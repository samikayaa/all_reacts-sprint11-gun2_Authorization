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
          <Route path="/friends">
            <FriendsList />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/friends/add">
            <AddFriend />
          </Route>
          <Route path="/">
            <FriendsList />
          </Route>
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;
