import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, Tracker } from './components';

ReactDOM.render(
  <React.StrictMode>
    <Header name = "Florian" />
    <Tracker />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
