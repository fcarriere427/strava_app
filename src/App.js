import React from 'react';
import logo from './atom.png';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StravaTracker name = "Florian"/>
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Welcome to my personal Strava app</p>
    </header>
  }
}

class Footer extends React.Component {
  render() {
    <header className="App-footer">
      <p><a href="strava_old_app">Ancienne appli Strava</a></p>
    </header>
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

// récupération des distances réelles par mois
function getMonthDistances(){
  return new Promise((resolve, reject) => {
    let reduce = [];
    fetch('/strava_old/month_distance')
    .then(response => response.json())
    .then(data => {
      data.rows.forEach(doc => {
        reduce[doc.key] = doc.value;
      })
    })
    .then(data => resolve(reduce));
  })
}

export default App;
