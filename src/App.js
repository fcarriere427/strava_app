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
    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my personal Strava app</p>
      </header>
    )
  }
}

class Footer extends React.Component {
  render() {
    return(
      <header className="App-header">
        <p><a href="strava_old_app">Ancienne appli Strava</a></p>
      </header>
    )
  }
}

class StravaTracker extends React.Component {

  calcCumulAnnuel(){
    const cumul = 0;
    getMonthDistances()
    .then(cumulMensuel => {
      // ici, reduce['2015,07'] renvoie la bonne valeur, en mètres
      for (let i = 1; i <= 12; i++){
        // prepare la clé de lecture dans le tableau reduce
        let month = (i).toString(); if (month.length<2) { month = '0' + month };
        let year = now.getFullYear();
        let key = year + ',' + month;
        // si la valeur n'est pas nulle, on l'ajoute au cumul
        if (cumulMensuel[key]) {cumul = cumul + reduce[key]};
      }
      return Math.round(cumul/1000*10)/10;; // div par 1000 pour passer en km, puis arrondi au dixième
    })
  }

  render() {
    return (
      <div className="Tracker">
        <h3>Tracker for {this.props.name}</h3>
        <h3>Current mileage (as of today): {calcCumulAnnuel()}</h3>
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
