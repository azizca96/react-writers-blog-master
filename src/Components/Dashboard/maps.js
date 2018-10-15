import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { NotFound } from '../Errors'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import GoogleMapsContainer from '../Data&Tests/googleMaps'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
const styles ={
  main:{
   // minWidth: 375,
    position: 'relative',
   // maxWidth: 355,
    marginLeft: 0,
    width: 1151,
    height: 651,
    
  }
}
const maps=() => {
  return (      <div >

<GoogleMapsContainer 

/>

 </div>)
}
export default ({ match: { url }}) =>
  <Fragment>

      
    <Route exact path={url} component={maps} />

   
  </Fragment>