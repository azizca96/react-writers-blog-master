import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { NotFound } from '../Errors'
import ChartDashboard from './ChartDashboard'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Writer from './Writer'
const styles ={
  main: {
    display: 'flex',

    minWidth: 275,

   // backgroundColor: '#263238'
  }
}
const dashboard=() => {
  return (<div>
    <Card style={styles.main}>
<CardContent>
    <ChartDashboard/>
    </CardContent>
    </Card>
    </div>)
}
export default ({ match: { url } }) =>
  <Fragment>

      
    <Route exact path={url} component={dashboard} />

   
  </Fragment>