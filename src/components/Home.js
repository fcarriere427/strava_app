import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { GaugeChart } from './Tracker/Gauge'
import { StatsBar } from './Tracker/StatsBar'
import { TargetBlock } from './Tracker/TargetBlock'
import { UpdateBar } from './Tracker/UpdateBar'

class Home extends Component {

  render() {
    return (
      <p> Welcome on my running app! </p>
    );
  }
}

export default Home;
