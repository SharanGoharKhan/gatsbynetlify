import React from 'react'
import speedometer from '../../images/speedometer.png'
import ribbon from '../../images/Ribbon.png'
import cost from '../../images/cost.png'
import spark from '../../images/spark.png'

import { Divider, Typography, makeStyles, Paper, Box, Grid, Button, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      background:{
        marginTop: theme.spacing(6),  
        backgroundColor: '#3751FF', 
        height: 'fit-content', 
        textAlign:'center', 
        padding: theme.spacing(6) 
      },
      grid:{
          marginTop: theme.spacing(5)
      },
      subTitle:{
        fontWeight:400, 
        padding:theme.spacing(3),
        width:'40%',
        margin:'auto', 
        color:'#fff'
    },
    image: {
        borderStyle:'solid',
        padding:'10%',
        borderWidth:2, 
        borderColor:'#fff', 
        borderRadius:10, 
        boxShadow:'4px -4px 5px #e8e3e3'
    }
}));

const WhyUs = () => {
    const classes = useStyles();
    return (
        <div id="whyus" className={classes.background}>
        <Typography style={{color:'#fff'}} variant='h4'>
            Why Us
        </Typography>
        <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
         <img src={speedometer} className={classes.image} />
          <div className={classes.subTitle}>UX driven approach</div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
        <img src={ribbon} className={classes.image} />
        <div className={classes.subTitle}>3 months time to market</div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
        <img src={cost} className={classes.image} /> 
        <div className={classes.subTitle}>$30,000 costs limit</div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
        <img src={spark} className={classes.image} />
        <div className={classes.subTitle}>Complete process transparency</div>
        </Grid>
        </Grid>
        </div>

    );
}

export default WhyUs;