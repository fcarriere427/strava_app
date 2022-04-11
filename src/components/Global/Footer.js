import React, { Component } from 'react';
import { Container } from 'reactstrap'

class Footer extends Component {

  render() {
    let today = new Date();
    let date_str = today.toLocaleDateString('fr-FR');

    return (
      <Container fluid className = "bg-primary text-white text-center">
        <footer>
          <p><a href="strava_old_app">Ancienne appli Strava</a></p>
          <p>Current date : {date_str} </p>
        </footer>
      </Container>
    );
  }
}

export default Footer;
