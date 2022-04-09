import React, { Component } from 'react';
import { Container } from 'reactstrap'

class Footer extends Component {

  render() {
    let today = new Date();
    let date_str = today.toLocaleDateString('fr-FR');

    return (
      <Container className = "container-fluid bg-warning text-black text-center">
        <footer className="App-footer">
          <p><a href="strava_old_app">Ancienne appli Strava</a></p>
          <p>Current date : {date_str} </p>
        </footer>
      </Container>
    );
  }
}

export default Footer;
