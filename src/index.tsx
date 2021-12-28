import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Cliente from './views/cliente/Cliente';
import Login from './views/auth/login/Login';


ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cliente/*" element={<Cliente />} />
      </Routes>
    </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
