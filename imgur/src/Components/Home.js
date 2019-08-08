import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Resize from './Resize';
import Gif from './gif';
import Header from './Add_header';
import Footer from './Add_footer';
import upload from './upload_imgur';


import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button : {
      align: 'center',
      padding: '5px',
      

  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        
        <Grid item sm={6}>
        <Router>
        <Link to ="/resize">
        <Button variant="outlined" color="primary" className={classes.button} >
        Resize
      </Button>
      </Link>
      </Router>
        </Grid>

        <Grid item sm={6}>
        <Router>
        <Link to ="/header">
        <Button variant="outlined" color="primary" className={classes.button}>
        Add Header
      </Button>
      </Link>
      </Router>
        </Grid>

        <Grid item sm={6}>
        <Router>
            <Link to="/footer">
        <Button variant="outlined" color="primary" className={classes.button}>
        Add Footer
      </Button>
      </Link>
      </Router>
        </Grid>

        <Grid item sm={6}>
        <Router>
            <Link to="/gif">
        <Button variant="outlined" color="primary" className={classes.button}>
        Make Gif
      </Button>
      </Link>
      </Router>
        </Grid>

        <Grid item sm={6}>
        <Router>
        <Link to ="/upload">
        <Button variant="outlined" color="primary" className={classes.button}>
        Share on Imgur
      </Button>
      </Link>
      </Router>
        </Grid>
        <Grid item sm={6}>
        <a href="https://console.firebase.google.com/u/0/project/stackimgur/storage/stackimgur.appspot.com/files">
        <Button variant="outlined" color="primary" className={classes.button}>
        Gallery
      </Button>
      </a>
        </Grid>
       
      </Grid>

      <div>
          <Router>
          <Switch>
              <Route path="/resize" component={Resize}/>
              <Route path="/gif" component={Gif} />
              <Route path="/header" component={Header} />
              <Route path="/footer" component={Footer} />
              <Route path="/upload" component={upload} />
          </Switch>
          </Router>
      </div>
    </div>
  );
}