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

ReactDOM.render(
  <>
    <Header />
    <div className="container-fluid">
      <div className="row">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/teste" element={<App />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
