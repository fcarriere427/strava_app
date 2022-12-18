import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { targetToDate, daysInYear } from '../functions'

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
    let today = new Date();
    let start = new Date(today.getFullYear(), 0, 0);
    let diff = today - start;
    let day = Math.floor(diff / (1000 * 60 * 60 * 24)); // calcul = secondes dans 1 jour
    let remain_days = 365 - day + 1; // histoire de piquets et d'intervalles..
    let new_avg_day = Math.floor((this.props.target - this.props.current)/remain_days*10)/10;
    let new_avg_week = Math.round(new_avg_day * 7 * 10)/10;
    return (
      <div>
        <p className="fw-light text-black"><i>New targets</i></p>
        <p>Day: {new_avg_day} km</p>
        <p>Week: {new_avg_week} km</p>
        <p className="fw-light text-gray">Remaining days: {remain_days} days</p>
      </div>
    );
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////
export {
  StatsBar
}
