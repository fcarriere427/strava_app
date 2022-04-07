import React, { Component } from 'react'
import Chart from 'react-gauge-chart'

class GaugeChart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("this.props.delta = " + this.props.delta);
    console.log("this.props.name = " + this.props.name);
  }

  render() {
    let needle = 0.5 + (this.props.delta/100) ; // si delta = 0 --> aiguille à 50% -->
    return (
      <div className="Tracker">
        <Chart
          id="tracker-gauge"
          style={width:'100%'}
          nrOfLevels={3}
          colors={['#EA4228', '#5BE12C', '#EA4228']}
          arcWidth={0.5}
          hideText={true}
          percent={needle}
          // formatTextValue={value => value + ' days'}
        />
      </div>
    )
  }
}
export default GaugeChart
