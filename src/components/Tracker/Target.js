import React, { Component } from 'react'

///////////////////////////////////////////////////////////////////////////////////////////////
class Target extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <input type="range" min="500" max ="1500" value={this.props.value} onChange={this.props.updateHandler}/>
        <p> Target: {this.props.value} </p>
        <input type="button" value="reset" onClick={this.props.resetHandler}/>
      </div>
    )
  }
}

export default Target
