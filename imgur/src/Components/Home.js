import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ButtonBase from '@material-ui/core/ButtonBase';

import Upload from './Upload'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

    paper: {
        padding: theme.spacing(1),
        margin:'auto',
        maxWidth: 10,
    },

    image: {
        margin: '1%',
        display: 'block',
        maxWidth: '1%',
        maxHeight: '',
        
        
        
    },
}));

export default function Complexgrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Paper className={classes.Paper}>
        <center>
        <Grid container>
        <Grid container spacing={1}>

        <div>
        <Grid item >
        <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/1e/53/94/1e5394f4-e9a5-3dff-427f-a199ac5abdb3/AppIcon-1x_U007emarketing-85-220-0-3.png/320x0w.jpg" onClick={<Upload />}/>
        </ButtonBase>
        
        </Grid>
        </div>

        <div>
        <Grid item >
        <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="https://cdn3.iconfinder.com/data/icons/linecons-layout/512/header_layout-512.png"/>
        </ButtonBase>
        </Grid>
        </div>
        </Grid>
        
        
        <Grid container spacing={1}>
        <div>
        <Grid item >
        <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="https://png.pngtree.com/svg/20170824/96c718089c.svg"/>
        </ButtonBase>
        </Grid>
        </div>

        <div>
        <Grid item >
        <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="https://i.gifer.com/MXwH.gif"/>
        </ButtonBase>
        </Grid>
        </div>
        </Grid>

        <Grid container spacing={1}>
        <Grid item >
        <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="https://i.imgur.com/BcG5FtS.jpg"/>
        </ButtonBase>
        </Grid>

        <Grid item >
        <ButtonBase className={classes.image}>
        <img className={classes.img} alt="complex" src="https://www.freeiconspng.com/uploads/art-gallery-icon-9.jpg"/>
        </ButtonBase>
        </Grid>
        </Grid>

        </Grid>
        </center>
        


        
        </Paper>
        </div>
    )
}