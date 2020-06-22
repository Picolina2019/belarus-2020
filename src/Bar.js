import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: '#f7efdf',
          foreColor: '#333',
        },
        xaxis: {
          categories: [
            'Tsepkalo',
            'Babariko',
            'Lukashenko',
            'Tihanouskaja',
            'Against All',
          ],
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        fill: {
          colors: ['#f44336'],
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: 'Pool numbers in %',
          align: 'center',
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: '2rem',
          },
        },
      },
      series: [
        {
          name: 'Percentage',
          data: [15.7, 58.2, 3.8, 20.4, 1.9],
        },
      ],
    };
  }
  onChange = () => {
    this.setState({
      options: {
        ...this.state.options,
        plotOptions: {
          ...this.state.options.plotOptions,
          bar: {
            ...this.state.options.plotOptions.bar,
            horizontal: !this.state.options.plotOptions.bar.horizontal,
          },
        },
      },
    });
  };
  render() {
    const style = {
      backgroundColor: '#816abd',
      color: 'white',
      height: '2rem',
      border: 'none',
      fontSize: '1rem',
      borderRadius: '1rem',
      outline: 'none',
      cursor: 'pointer',
      marginBottom: '0.5rem',
    };
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type='bar'
          height='430'
          width='100%'
        />
        <button onClick={this.onChange} style={style}>
          Horizontal
        </button>
      </>
    );
  }
}
export default Bar;
