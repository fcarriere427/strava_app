import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

///////////////////////////////////////////////////////////////////////////////////////////////
class SelectYear extends Component {

  constructor(props){
    super(props);
    this.state = {
       annees: []
     };
   }

  componentDidMount(){
    // Remplissage du tableau annees
    let start_year = 2015 // début des activités Strava
    let last_year = new Date().getFullYear()
    let annees = []
    for (let year = start_year; year <= last_year; year++){
        annees.push(year);
    };
    this.setState({annees: annees});
  }

  render(){
    return(
      <div>
        {/* <ul> log tableau années = {this.state.annees.map(annee => (
          <li key={annee}>{annee}</li>
          ))}
        </ul> */}

        <p> this.props.currentYear = {this.props.currentYear}</p>

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
