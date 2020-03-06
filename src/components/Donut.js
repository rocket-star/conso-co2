import React, {Component} from 'react';
import Chart from 'react-apexcharts';

class Donut extends Component {
    constructor(props){
        super(props);
        this.state = {
            series: [98, 67, 61],
            options: {
              chart: {
                height: 390,
                type: 'radialBar',
              },
              title: {
                text: "Économie en Euros",
                align: "center",
                margin: 40,
                offsetY: 50,
                offsetX: 0,
                style: {
                  fontSize: "25px"
                }
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  dataLabels: {
                    name: {
                      show: false,
                    },
                    value: {
                      show: false,
                    }
                  }
                }
              },
              colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
              labels: ['Train', 'Avion', 'Voiture'],
              legend: {
                show: true,
                floating: true,
                fontSize: '14px',
                position: 'left',
                offsetX: 100,
                offsetY: 90,
                labels: {
                  useSeriesColors: true,
                },
                markers: {
                  size: 0
                },
                formatter: function(seriesName, opts) {
                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                  vertical: 3
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                      show: false
                  }
                }
              }]
            },
        }
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
            series: this.props.prix
        });
      }

render(){
    return (
        <div>
        <Chart options={this.state.options} series={this.state.series} type="radialBar" height={390} />
        </div>
    
    );
    
}
}

export default Donut;