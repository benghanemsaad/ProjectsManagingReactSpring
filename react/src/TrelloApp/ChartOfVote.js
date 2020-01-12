import React , { Component } from "react";
import  CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class Chart extends Component {	
    render() {
      const options = {
        title: {
          text: "Statistique sur les avis de Collaborateur"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Fovorable",  y: this.props.fav  },
                      { label: "Defavorable", y: this.props.difav  }
                  ]
         }]
     }
          
     return (
        <div>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
  }

export default Chart ; 