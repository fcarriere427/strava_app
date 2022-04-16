import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { GaugeChart } from './Tracker/Gauge'
import { StatsBar } from './Tracker/StatsBar'
import { TargetBlock } from './Tracker/TargetBlock'
import { UpdateBar } from './Tracker/UpdateBar'

class Home extends Component {

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h2> Welcome on my running app! </h2>
        <img src={require("../assets/Homer-Simpson-Running.jpg")} } />
      </div>
    );
  }
}

export default Home;
