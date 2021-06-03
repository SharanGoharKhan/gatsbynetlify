import React from 'react'
import SpeedIcon from '@material-ui/icons/Speed';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import TimerIcon from '@material-ui/icons/Timer';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { Typography, makeStyles, Grid } from '@material-ui/core';

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
        width:'100%',
        lineHeight:'3vmin',
        fontSize:'3vmin',
        margin:'auto', 
        color:'#fff',
        fontFamily:'Montserrat'
    },
    image: {
        borderStyle:'solid',
        padding:'4vmin',
        borderWidth:1, 
        borderColor:'#fff', 
        borderRadius:10, 
        boxShadow:'2px -3vmin 1vmin #faf9f7'
    }
}));

const WhyUs = () => {
    const classes = useStyles();
    return (
        <div id="whyus" className={classes.background}>
        <Typography style={{color:'#fff', fontFamily:'Montserrat',fontSize:'5vmin', fontWeight:'700'}} variant='h4'>
            Why Us
        </Typography>
        <Grid container spacing={3} justify="center" className={classes.grid}>
        <Grid item xs={6} sm={6} md={6} lg={3}>
        
         <SpeedIcon className={classes.image} style={{color:'#fff', fontSize:'12vmin'}} />
          <div className={classes.subTitle}>UX driven approach</div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
        
        <ShutterSpeedIcon className={classes.image} style={{color:'#fff', fontSize:'12vmin'}} />
        <div className={classes.subTitle}>3 months time to market</div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
        
        <TimerIcon className={classes.image} style={{color:'#fff', fontSize:'12vmin'}} />
        <div className={classes.subTitle}>$3000 costs limit</div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
        
        <FlashOnIcon className={classes.image} style={{color:'#fff', fontSize:'12vmin'}} />
        <div className={classes.subTitle}>Complete process transparency</div>
        </Grid>
        </Grid>
        </div>

    );
}

export default WhyUs;