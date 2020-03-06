import React, {Component} from 'react';
import Chart from 'react-apexcharts';

class SimpleDonut extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            items: [],
            isLoaded: false,
            series: [0,0,0],
            options: {
              chart: {
                type: 'radialBar',
              },
              // plotOptions: {
              //   pie: {
              //     donut: {
              //       labels: {
              //         show: true,
              //       }
              //     }
              //   }
              // },
              title: {
                text: "Économie en Euros",
                align: "left",
                margin: 30,
                offsetY: 10,
                style: {
                  fontSize: "25px"
                }
            },
              // legend: {
              //   position: 'bottom'
              // },
              labels: ["Train", "Avion", "Voiture"],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
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
  console.log(this.props.prix)
    return (
        <div>
        <Chart options={this.state.options} series={this.state.series} type="donut"/>
        </div>
    
    );
    
}
}

export default SimpleDonut;