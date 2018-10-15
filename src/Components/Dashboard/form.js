import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { NotFound } from '../Errors'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import Icon from '@material-ui/core/Icon';
const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    card: {
    minWidth: 375,
    position: 'relative',
    maxWidth: 355,
    marginLeft: 350,
    width: 551,
    height: 551,
    //margin: 5000
  },
  textField: {
 
    width: 200,
    marginLeft:50
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};
function form(props)  {
   // const { classes } = props;
   
  return (
      <div>
      
      <Card style={styles.card}>
        <CardContent>
        <FormControl style={styles.container} >
        <TextField
          id="name"
          label="Name"
          
          style={styles.textField}
          
        />
        <TextField
          id="lastname"
          label="LastName"
          
          style={styles.textField}
          
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          style={styles.textField}
          
        />
        <TextField
          id="name"
          label="Re Password"
          type="password"
          style={styles.textField}
          
        />
        <br/>
        <div>
        <Typography variant="caption" gutterBottom align="center">
        femme
      </Typography>
      
        <Radio
          //checked={this.state.selectedValue === 'a'}
          //onChange={this.handleChange}
          value="a"
          name="radio-button-demo"
          aria-label="A"
          style={styles.textField}
        />
        </div>
        <Typography variant="caption" gutterBottom align="center">
        homme
      </Typography>
        <Radio
         // checked={this.state.selectedValue === 'b'}
          //onChange={this.handleChange}
          value="b"
          name="radio-button-demo"
          aria-label="B"
          style={styles.textField}
        />
    </FormControl>
    <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
       // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

         
        </CardContent>
        <CardActions>
        <Button variant="contained" color="primary" >
        Submit
        
      </Button>
        </CardActions>
      </Card>
    </div>
  )
}


form.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  //export default withStyles(styles)(datatable);

export default  ({ match: { url }}) =>
  <Fragment>

      
    <Route exact path={url} component={form} />

   
  </Fragment>