import React from 'react'
import {makeStyles,Grid } from '@material-ui/core';

import EasyEats from "../../images/easyEats.png";
import StylizeNow from "../../svg/Stylize";
import Vinifynd from "../../svg/easyEats";


const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor:'#FAFBFF',
        padding:theme.spacing(6),
        marginTop:theme.spacing(10),
        height:'fit-content'
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
            <Grid item xs={4} sm={6} md={3} lg={2}>
                <Vinifynd />
            </Grid>
            <Grid item xs={4} sm={6} md={3} lg={3}>
            <StylizeNow />
            </Grid>
            <Grid item xs={4} sm={6} md={3} lg={3}>
            <img src={EasyEats} />
            </Grid>
        </Grid>

        </div>
        
    );
}

export default Logos;

