import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'


///////////////////////////////////////////////////////////////////////////////////////////////
class SelectYear extends Component {

  componentDidMount(){
    // Remplissage du tableau annees
    let start_year = 2015 // début des activités Strava
    const annees = [];
    let last_year = new Date().getFullYear();
    let i = last_year - start_year;
    for (let year = start_year; year <= last_year; year++){
      annees[i]=year;
      i = i-1;
    }
  }

  render(){
    return(
      <form>
        <label>
          Select year:
          <select multiple={true} value={this.annees} onChange={this.props.updateHandler}>
          </select>
        </label>
      </form>
    )
  }
}

export {
  SelectYear
}
