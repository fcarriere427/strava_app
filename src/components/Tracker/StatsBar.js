import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import targetToDate from './functions'
import daysInYear from '../../utils/functions'

const axios = require('axios').default;


///////////////////////////////////////////////////////////////////////////////////////////////
class StatsBar extends Component {
  render(){
    return(
      <Row className="bg-secondary text-white py-2">
        <Col className="my-auto border" md="4">
          <Distances current={this.props.current} target={this.props.target} />
        </Col>
        <Col className="my-auto border" md="4">
          <Deltas current={this.props.current} target={this.props.target} />
        </Col>
        <Col className="my-auto border" md="4">
          <Averages current={this.props.current} target={this.props.target} />
        </Col>
      </Row>
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class Deltas extends Component {
  render() {
    let target_date = targetToDate(this.props.target);
    let delta_km = Math.round((this.props.current - target_date)*10)/10;
    let year = new Date().getFullYear().toString();
    let delta_days = Math.round(delta_km / this.props.target * daysInYear(year)*10)/10;
    return (
      <div>
        <p>Delta in km: {delta_km} km</p>
        <p>Delta in days: {delta_days} days</p>
      </div>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class Distances extends Component {
  render() {
    let target_date = targetToDate(this.props.target);
    return (
      <div>
        <p className="fw-light">Distances (km): </p>
        <p>Current: {this.props.current}</p>
        <p>Target: {target_date}</p>
      </div>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class Averages extends Component {
  render() {
    let target_date = targetToDate (this.props.target);
    let delta_km = Math.round((this.props.current - target_date)*10)/10;
    let year = new Date().getFullYear().toString();
    let new_avg_week = Math.round((this.props.target - delta_km) / daysInYear(year) * 7 * 10)/10;
    let new_avg_day = Math.floor(new_avg_week/7*10)/10;
    return (
      <div>
        <p>New avg/week: {new_avg_week} km</p>
        <p>New avg/day: {new_avg_day} km</p>
      </div>
    );
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////
export {
  StatsBar
}
