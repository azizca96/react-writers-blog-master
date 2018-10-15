import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { NotFound } from '../Errors'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
//import ChartData from './chart_data'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Pie from '../Charts/pie'
import Bar from '../Charts/bar'
import Line from '../Charts/line'
import Doughnut from '../Charts/doughnut'
import Radar from '../Charts/radar'
const styles = {
  TopRight: {
    display: 'flex',
    width: 400,
    height: 300,
    minWidth: 275,
    marginLeft: '50vw',
    marginTop: '0.05vh',
   // backgroundColor: '#263238'
  },
  TopLeft: {
    position: 'absolute',
    top: 90,
    display: 'flex',
    width: 400,
    height: 300,
    minWidth: 275,
    marginRight: '60vw',
    //marginTop: '0.01vh',
    ///position: absolute,
   // backgroundColor: '#269238'
  },
  MiddleLeft:{
    position:'absolute',
    bottom: 80,
    display: 'flex',
    width: 400,
    height: 300,
    minWidth: 275,
    marginRight: '60vw',
   // backgroundColor: '#261238'
  },
  MiddleRight:{
    position:'absolute',
    bottom: 80,
    right: 160,
    display: 'flex',
    width: 400,
    height: 300,
    minWidth: 275,
    marginLeft: '50vw',
    marginTop: '0.05vh',
   // backgroundColor: '#638'
  },
  BottomLeft:{
    position:'absolute',
    bottom: -150,
    display: 'flex',
    width: 400,
    height: 300,
    minWidth: 275,
    marginRight: '60vw',
   // backgroundColor: '#1238'
  }
}
const charts=() => {
  return (      <div >
    <Card style={styles.TopRight}>
    <CardContent>

   <Pie/>
   </CardContent>
  </Card>
  <Card style={styles.TopLeft}>
    <CardContent>

   <Bar/>
   </CardContent>
  </Card>
  <Card style={styles.MiddleLeft}>
    <CardContent>

   <Line/>
   </CardContent>
  </Card>

    <Card style={styles.MiddleRight}>
    <CardContent>

   <Doughnut/>
   </CardContent>
  </Card>



 </div>
 
 )
}
export default ({ match: { url }}) =>
  <Fragment>

      
    <Route exact path={url} component={charts} />

   
  </Fragment>