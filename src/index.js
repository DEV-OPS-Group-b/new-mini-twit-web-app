import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";

import './index.css';

import store from "./store";
// import App from './App';
import SignUp from './containers/SignUp/SignUp'
import Login from './containers/Login/Login'
import Public from './containers/Public/Public'
import Profile from './containers/Profile/Profile'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/public" element={<Public />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

