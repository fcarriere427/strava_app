import React, { Component } from 'react';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = { today: "" };
  }

  componentDidMount(){
    let today = new Date();
    let current = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    this.setState({ today: current });
  }

  render() {
    return (
        <footer className="App-footer">
          <p><a href="strava_old_app">Ancienne appli Strava</a></p>
          <p>Current date : {this.state.today} </p>
        </footer>
    );
  }
}

export default Footer;
