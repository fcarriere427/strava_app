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
        <p> To do :-) You should rather see the 
          <a href="/strava_old_app/strava_report">
            <p>old app reports</p>
          </a>
        </p>
      </div>
    );
  }
}

export default Reports;
