import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer, Tracker } from './components';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/list" element={<List />} />
        <Route path="/report" element={<Blog />} />
        <Route path="/strava_old_app" />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


{/* <Header name = "Florian" /> */}
