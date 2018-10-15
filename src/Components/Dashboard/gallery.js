import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { NotFound } from '../Errors'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TitlebarGridList from '../Data&Tests/grid'

const gallery=() => {
  return (      <div >
<TitlebarGridList />
</div>)
}
export default ({ match: { url }}) =>
  <Fragment>

      
    <Route exact path={url} component={gallery} />

   
  </Fragment>