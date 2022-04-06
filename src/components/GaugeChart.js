import React, { Component } from 'react'
import Chart from 'react-google-charts'
const gaugeData = [
  ['Label', 'Value'],
  ['Delta', 0],
]
class GaugeChart extends Component {
  render() {
    return (
      <div className="Tracker">
         <Chart
                width={600}
                height={140}
                chartType="Gauge"
                loader={<div>Loading Chart</div>}
                data={gaugeData}
                options={{
                  redFrom: 0,
                  redTo: 30,
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
