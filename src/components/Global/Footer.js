import React, { Component } from 'react';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = { date: '' };
  }

  componentDidMount(){
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.setState = { date: date };
  }

  render() {
    return (
        <footer className="App-footer">
          <p><a href="strava_old_app">Ancienne appli Strava</a></p>
          <p>Current date : {this.state.date} </p>
        </footer>
    );
  }
}

export default Footer;
