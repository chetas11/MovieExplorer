import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function Header() {
    const classes = useStyles();

    return (
        <div className="appbar">
        <AppBar position="static" style={{ background: 'transparent'}}>
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                <h4 className="title">buyceps TEST</h4>
            </Typography>
            <div className="navlinks">
                <a>Login</a>&nbsp;&nbsp;&nbsp;
                <a>Sign up</a>
            </div>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default Header
