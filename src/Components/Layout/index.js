import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  AppBar, Toolbar, IconButton, Typography, Hidden,
  Drawer, CssBaseline, MenuList, MenuItem,Divider
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import { compose } from 'recompose'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Avatar from '@material-ui/core/Avatar';
//import chart from "./components/Dashboard/charts";
import SvgIcon from '@material-ui/core/SvgIcon';
import HomeIcon from "../Icons/HomeIcon"
import DashboardIcon from "../Icons/DashboardIcon"
import ChartIcon from "../Icons/ChartIcon"
import DataTableIcon from "../Icons/DataTableIcon"
import FormIcon from "../Icons/FormIcon"
import GalleryIcon from "../Icons/GalleryIcon"
import MapsIcon from "../Icons/MapsIcon"
const drawerWidth = 240

const styles = theme => ({
  buttons: {
margin:15,

  },
  
  root: {
    flexGrow: 1,
    height: 830,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});


class Layout extends Component {
  
  
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };



  render() {
    const { classes, theme, location: { pathname }, children, writers } = this.props
    //const { mobileOpen } = this.state

    const drawer = (

      <div>
   
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        
        <MenuList>
       
        
          <MenuItem component={Link} to="/" selected={'/' === pathname}>
          <HomeIcon className={classes.buttons} />
          <Typography variant="title" gutterBottom>
            Home
            </Typography>
          </MenuItem>
          <MenuItem component={Link} to="/dashboard" selected={'/dashboard' === pathname}>
          <DashboardIcon className={classes.buttons} />
          <Typography variant="title" gutterBottom>
            Writers
            </Typography>
          </MenuItem>
          <MenuItem component={Link} to="/charts" selected={'/charts' === pathname}>
          <ChartIcon className={classes.buttons} />
          <Typography variant="title" gutterBottom>
            Charts
          </Typography>
          </MenuItem>
          <MenuItem component={Link} to="/datatable" selected={'/datatable' === pathname}>
          <DataTableIcon className={classes.buttons} />
          <Typography variant="title" gutterBottom>
            DataTable
          </Typography>
          </MenuItem>
          <MenuItem component={Link} to="/form" selected={'/form' === pathname}>
          <FormIcon className={classes.buttons} />
          <Typography variant="title" gutterBottom>
            Form
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem component={Link} to="/gallery" selected={'/gallery' === pathname}>
          <GalleryIcon className={classes.buttons} />
          <Typography variant="title" gutterBottom>
            Gallery
            </Typography>
          </MenuItem>
          <MenuItem component={Link} to="/maps" selected={'/maps' === pathname}>
          <MapsIcon className={classes.buttons} />
          <Typography variant="title" gutterBottom>
            Maps
            </Typography>
          </MenuItem>
          <MenuList>



            })}
          </MenuList>
        </MenuList>
      </div>
    )

    return <Fragment>
      <CssBaseline/>

      <div className={classes.root}>
        
        <AppBar position="absolute"  className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
            color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Administrator Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        <Hidden smDown implementation="css">
          <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
          >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />

            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
          
        </main>
      </div>
    </Fragment>
  }
}
Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default compose(
  withRouter,
  withStyles(styles, {withTheme: true })
)(Layout)
