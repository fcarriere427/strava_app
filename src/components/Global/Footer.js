import React, { Component } from 'react';

class Footer extends Component {

  render() {
    let today = new Date();
    let date_str = today.toLocaleDateString('fr-FR');
    
    return (
        <footer className="App-footer">
          <p><a href="strava_old_app">Ancienne appli Strava</a></p>
          <p>Current date : {date_str} </p>
        </footer>
    );
  }
}

export default Footer;
