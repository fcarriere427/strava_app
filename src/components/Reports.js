import React, { Component } from 'react';

class Reports extends Component {
  constructor(props){
    super(props);
    this.state = {
      activitiesList: []
    };
  }

  render() {
    return(
      <div>
        <p>To do :-) </p>
        <p>You should rather see the <a href="https://old_strava.letsq.xyz/strava_report.html"> old app reports</a></p>
      </div>
    );
  }
}

export default Reports;
