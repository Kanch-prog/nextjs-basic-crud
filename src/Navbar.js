import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center', 
  },
  navlink:{
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  appBar: {
    backgroundColor: '#009688', 
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}> 
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <a className={classes.navlink} href="/">
            <Typography variant="h6" className={classes.title}>
              TRAVEL AROUND THE WORLD
            </Typography>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
