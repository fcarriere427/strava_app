import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import targetToDate from './functions'
import daysInYear from '../../utils/functions'

///////////////////////////////////////////////////////////////////////////////////////////////
class StatsBar extends Component {
  render(){
    return(
      <Row className="bg-secondary text-white py-2">
        <Col xs="4">
          <Distances current={this.props.current} target={this.props.target} />
        </Col>
        <Col xs="4">
          <Gaps current={this.props.current} target={this.props.target} />
        </Col>
        <Col xs="4">
          <Averages current={this.props.current} target={this.props.target} />
        </Col>
      </Row>
    )
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class Distances extends Component {
  render() {
    let target_date = targetToDate(this.props.target);
    return (
      <div>
        <p className="fw-light text-black"><i>Distances</i></p>
        <p>Current:<br/> {this.props.current} km</p>
        <p>Target:<br/> {target_date} km</p>
      </div>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
class Gaps extends Component {
  render() {
    let target_date = targetToDate(this.props.target);
    let delta_km = Math.round((this.props.current - target_date)*10)/10;
    let year = new Date().getFullYear().toString();
    let delta_days = Math.round(delta_km / this.props.target * daysInYear(year)*10)/10;
    return (
      <div>
        <p className="fw-light text-black"><i>Gaps</i></p>
        <p>{delta_km} km</p>
        <p>{delta_days} days</p>
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
        <p className="fw-light text-black"><i>New targets</i></p>
        <p>Week: {new_avg_week} km</p>
        <p>Day: {new_avg_day} km</p>
      </div>
    );
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////
export {
  StatsBar
}
