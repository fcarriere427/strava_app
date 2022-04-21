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
    console.log("annees[] = " + annees);
  }

  render(){
    return(
      <div>
        <p> log tableau années = {this.annees[0]} </p>

        <form>
          <label>
            Select year:
            <select value={this.props.currentYear} onChange={this.props.updateHandler}>
              {/* {
                this.annees.map( (x,y) =>
                  <option key={y}>{x}</option> )
              } */}
            </select>
          </label>
        </form>

      </div>
    )
  }
}

export {
  SelectYear
}
