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
        <p> To do :-) You should rather see the </p>
        <a
          href="/strava_old_app/strava_report"
          style={{color: "grey"}}
          className="text-center"
        >
          <i>old app reports</i>
        </a>
      </div>
    );
  }
}

export default Reports;
