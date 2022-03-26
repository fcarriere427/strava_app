import React from 'react';
import logo from './atom.png';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to my personal Strava app</p>
        </header>
        <StravaTracker name = "Florian"/>
        <p><a href="strava_old_app">Ancienne appli Strava</a></p>
      </div>
    );
  }
}

class StravaTracker extends React.Component {
  render() {
    return (
      <div className="Tracker">
        <h3>Tracker for {this.props.name}</h3>
      </div>
    );
  }
}

export default App;
