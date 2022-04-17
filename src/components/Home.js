import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { GaugeChart } from './Tracker/Gauge'
import { StatsBar } from './Tracker/StatsBar'
import { TargetBlock } from './Tracker/TargetBlock'
import { UpdateBar } from './Tracker/UpdateBar'

class Home extends Component {

  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}> Welcome on my running app! </h2>
        <p style={{ textAlign: "center" }}>
          <img src={require("../assets/Homer-Simpson-Running.jpg")} />
        </p>
      </div>
    );
  }
}

export default Home;
