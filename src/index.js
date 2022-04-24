import React from 'react';
import { createRoot } from 'react-dom/client';
import { Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Header, Footer, Tracker, List, Reports, Activity } from './components';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Router>
      <Header name="Florian"/>
      <Switch>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/list" element={<List />} />
          <Route path="/reports" element={<Reports />} />
          <Route exact path="/activity/:id" element={<Activity />} />
          <Route path="/strava_old_app" />
        </Routes>
      </Switch>
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
