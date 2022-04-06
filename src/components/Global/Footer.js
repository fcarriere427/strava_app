import React, { Component } from 'react';

class Footer extends Component {

  render() {
    let today = new Date();
    let current = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    return (
        <footer className="App-footer">
          <p><a href="strava_old_app">Ancienne appli Strava</a></p>
          <p>Current date : {current} </p>
        </footer>
    );
  }
}

export default Footer;
