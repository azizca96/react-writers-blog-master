import React, { Component } from 'react';
import {Bar, Line, Pie,Radar, Doughnut} from 'react-chartjs-2'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
class doughnut extends Component {
    constructor(props){
        super(props);
        this.state = { 
            chartData:{
                labels: ['Boston', 'Madrid', 'LA' , 'Milan','Sandiego'],
                datasets: [
                    {
                        label: 'Population',
                        data:[
                            605010,
                            186789,
                            520458,
                            458623,
                            351032
                        ],
                        backgroundColor:[
                            '#FFE74C',
                            '#CBE84E',
                            '#68E8E5',
                            '#FF804F',
                            '#C9C6C1'

                        ]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                
            
        
                 <Doughnut
                 data={this.state.chartData}
                 options={{ title:{
                     display:true,
                     text:'largest cities'
                 },
                 legend:{
                     display:true,
                     position:'right',
                     
                 }
                 
                 } }
                 width="330"
                 height="300"/>
                 <CardContent/>
                 <Card/>
            </div>
        );
    }
}

export default doughnut;