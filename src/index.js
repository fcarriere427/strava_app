import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Header, Footer, Tracker, List, Reports, Activity } from './components';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>
      <Header name="Florian"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/list" element={<List />} />
        <Route path="/reports" element={<Reports />} />
        <Route exact path="/activity/:id" element={<Activity />} />
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
  </React.StrictMode>
);
