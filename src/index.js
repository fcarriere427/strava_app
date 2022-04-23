import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Header, Footer, Tracker, List, Reports, Activity } from './components';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header name="Florian"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/list" element={<List />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/activity/:id" element={<Activity />} />
        <Route path="/strava_old_app" />
      </Routes>
      <Footer />
    </Router>
    <a
      href="/strava_old_app"
      style={{color: "grey"}}
      className="text-center"
    >
      <i>Old app</i>
    </a>
  </React.StrictMode>,
  document.getElementById('root')
);
