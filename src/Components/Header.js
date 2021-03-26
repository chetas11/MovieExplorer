import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

// Header Component

function Header() {
    const classes = useStyles();

    return (
        <div className="appbar">
        <AppBar position="static" style={{ background: 'transparent'}}>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>  
                <p className="title">buyceps TEST</p>
            </Typography>
            <div className="navlinks">
                <small>Login</small>&nbsp;&nbsp;&nbsp;
                <small>Sign up</small>
            </div>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Header
