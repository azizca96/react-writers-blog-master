import React, { Component } from 'react';
import {Bar, Line, Pie,Radar, Doughnut} from 'react-chartjs-2'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
class pie extends Component {
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
                            '#000000',
                            '#FFD000',
                            '#DDA448',
                            '#FF2B2B',
                            '#6952A8'

                        ]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                
            
        
                 <Pie
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

export default pie;