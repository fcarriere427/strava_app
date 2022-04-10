import React, { Component } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////
class Target extends Component {
  render(){
    return(
      <input type="range" min="500" max ="1500" value={this.props.target} onChange={evt => this.props.handler}/>
      <p> Target: {this.props.value} </p>
    )
  }
}

export default Target
