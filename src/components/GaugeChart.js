import React, { Component } from 'react'
import Chart from 'react-google-charts'

let gaugeData = [
  ['Label', 'Value'],
  ['Delta', 0],
]

class GaugeChart extends Component {
  constructor(props) {
    super(props);
    console.log("props = " + props.value);
  }

  componentDidMount() {
    //console.log("props.value = " + {this.props.value});
    let value = this.props.value;
    console.log("value = " + value)
    gaugeData = [
      ['Label', 'Value'],
      ['Delta', 50],
    ]
  }

  render() {
    return (
      <div className="Tracker">
        <Chart
          width={300}
          // height={600}
          chartType="Gauge"
          loader={<div>Loading Chart</div>}
          data={gaugeData}
          options={{
            redFrom: 0,
            redTo: 30,
            greenFrom:30,
            greenTo:70,
            yellowFrom: 70,
            yellowTo: 100,
            minorTicks: 10,
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}
export default GaugeChart
