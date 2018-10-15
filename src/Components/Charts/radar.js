import React, { Component } from 'react';
import {Bar, Line, Pie,Radar, Doughnut} from 'react-chartjs-2'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
class radar extends Component {
    constructor(props){
        super(props);
        this.state = { 
            chartData:{
                labels: ['Boston', 'Madrid', 'LA' , 'Milan'],
                datasets: [
                    {
                        label: 'Population',
                        data:[
                            605010,
                            186789,
                            520458,
                            458623
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(255,90,22,0.6)',
                            'rgba(255,922,19,0.1)',
                            'rgba(255,922,19,0.8)'

                        ]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                
            
        
                 <Radar
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
                 width="380"
                 height="300"/>
                 <CardContent/>
                 <Card/>
            </div>
        );
    }
}

export default radar;