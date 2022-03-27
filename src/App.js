import React, {Component} from "react";
import './App.css';
import Header from './components/Global/Header/Header';
import Footer from './components/Global/Footer/Footer';

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

class StravaTracker extends React.Component {
  render() {
    let cumul = calcCumulAnnuel();
    console.log('cumul (dans le render) = ' + cumul);
    return (
      <div className="Tracker">
        <h3>Tracker for {this.props.name}</h3>
        <h3>Current mileage: {cumul} km</h3>
      </div>
    );
  }
}

// récupération des distances réelles par mois
function getMonthDistances(){
  console.log("2. on est dans getMonthDistances");
  return new Promise((resolve, reject) => {
    let reduce = [];
    fetch('/strava_old/month_distance')
    .then(response => response.json())
    .then(data => {
      console.log("3. on est dans le then au sein de getMonthDistances");
      data.rows.forEach(doc => {reduce[doc.key] = doc.value })
    })
    .then(data => resolve(reduce))
    .catch(error => {
      console.log('erreur fetch = ' + error);
      reject(error);
    });
  })
}

// récupération des distances réelles par mois
function calcCumulAnnuel(){
  let cumul = 0;
  console.log("1. on est dans calcCumulAnnuel");
  getMonthDistances()
  .then(cumulMensuel => {
    // ici, cumulMensuel['2015,07'] renvoie la bonne valeur, en mètres
    console.log("4. on est dans le then de getMonthDistances");
    for (let i = 1; i <= 12; i++){
      // prepare la clé de lecture dans le tableau reduce
      let month = (i).toString(); if (month.length<2) { month = '0' + month };
      let now = new Date();
      let year = now.getFullYear();
      let key = year + ',' + month;
      // si la valeur n'est pas nulle, on l'ajoute au cumul
      if (cumulMensuel[key]) {cumul = cumul + cumulMensuel[key]};
    }
    console.log('cumul = ' + cumul);
    return Math.round(cumul/1000*10)/10;; // div par 1000 pour passer en km, puis arrondi au dixième
  })
}

export default App;
