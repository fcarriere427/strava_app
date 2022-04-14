import React, { Component } from 'react';
import { Container } from 'reactstrap'

class Footer extends Component {

  render() {
    let today = new Date();
    let date_str = today.toLocaleDateString('fr-FR');

    return (
      <Container fluid className = "bg-dark text-white text-center">
        <footer>
          <p>Current date : {date_str} </p>
        </footer>
        <div>
          <p className="fw-light text-black"><a href="strava_old_app">Ancienne appli Strava</a></p>
        </div>
      </Container>
    );
  }
}

export default Footer;
