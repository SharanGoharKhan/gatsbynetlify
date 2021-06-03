import React from 'react'
import {makeStyles,Grid } from '@material-ui/core';
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import logo3 from '../../images/logo3.png'
import logo4 from '../../images/logo4.png'
import logo5 from '../../images/logo5.png'


const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor:'#FAFBFF',
        padding:theme.spacing(6),
        marginTop:theme.spacing(10),
        height:'fit-content'
        // width:'100%'
    },
    logo:{
        width:'20vmin'
    }
}));

const Logos = () => {
    const classes = useStyles();
    return (
        <div className={classes.container} >
            <Grid container direction="row" justify="center" alignItems="center" spacing={6}>
            <Grid item xs={4} sm={6} md={4} lg={2}>
                <img className={classes.logo} alt="logo" src={logo1} />
            </Grid>
            <Grid item xs={4} sm={6} md={4} lg={2}>
            <img className={classes.logo} alt="logo" src={logo2} />
            </Grid>
            <Grid item xs={4} sm={6} md={4} lg={2}>
            <img className={classes.logo} alt="logo" src={logo3} />
            </Grid>
            <Grid item xs={4} sm={6} md={4} lg={2}>
            <img className={classes.logo} alt="logo" src={logo4} />
            </Grid>
            <Grid item xs={4} sm={6} md={4} lg={2}>
            <img className={classes.logo} alt="logo" src={logo5} />
            </Grid>
        </Grid>

        </div>
        
    );
}

export default Logos;

