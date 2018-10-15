import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { NotFound } from '../Errors'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import CustomizedTable from '../Data&Tests/data'

const datatable=() => {
  return (      <div >
<CustomizedTable/>

 </div>)
}
export default ({ match: { url }}) =>
  <Fragment>

      
    <Route exact path={url} component={datatable} />

   
  </Fragment>