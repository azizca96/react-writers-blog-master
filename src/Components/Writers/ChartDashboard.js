import React, { Component } from 'react';
import {Bar, Line, Pie,Radar, Doughnut,Basic} from 'react-chartjs-2'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
class ChartDashboard extends Component {
    constructor(props){
        super(props);
        this.state = { 
            chartData:{
                labels: ['january', 'february', 'march' , 'april','mai','june','july','august','september','october','november','december'],
                datasets: [
                    {
                        label: 'Population',
                        data:[
                            60501,
                            18678,
                            52045,
                            45862,
                            35103,
                            12658,
                            98752,
                            20312,
                            77654,
                            52035,
                            45012,
                            32458
                        ],
                        borderColor:['#157A6E'],
                        backgroundColor: ['#56D09A'],
                       // borderWidth:2,
                        //borderDashOffset	:50
   
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                
            
        
                 <Line
                 data={this.state.chartData}
                 options={{ title:{
                     display:true,
                     text:'annual results'
                 },
                 /*legend:{
                     display:true,
                     position:'right',
                     
                 }*/
                 
                 } }
                 width="1180"
                 height="380"
                 />
                 <CardContent/>
                 <Card/>
            </div>
        );
    }
}

export default ChartDashboard;