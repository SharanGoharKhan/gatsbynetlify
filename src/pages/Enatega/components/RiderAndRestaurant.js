import React from 'react';
import {Typography, makeStyles,Grid, Button } from '@material-ui/core';
import enategaMobile from "../../../images/enategaMobile.png";
import ios2 from "../../../images/ios2.png";
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';

const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: '#6FCF96',
        margin: 'auto',
        marginTop: '40px',
        width: '74px',
        height: '2px'
    },
    top:{
        paddingTop:theme.spacing(6)
    },
    root: {
        flexGrow: 1,
        backgroundColor: '#6FCF96',
        height: 'fit-content',
        marginTop: theme.spacing(10),
        paddingBottom:theme.spacing(4)
    },
    images1: {
        width: '80%',
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    paper: {
        padding: theme.spacing(2),
        elevation: 1,
        height: 150,
        width: 250,
        alignContent: 'center',
        color: theme.palette.text.secondary,
    },
    button:{
        textAlign:'center', 
        marginTop:theme.spacing(4),
    },
    buttonInner:{
        backgroundColor:'#fff',
        padding:theme.spacing(1), 
        // width:'3%',
        color:'#6FCF96',
        fontFamily:'Montserrat',
        marginBottom:10
    }
}));

const RiderAndRestaurant = (props) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>

                <Grid container className={classes.top} direction="row">
                        <Grid item xs={12} lg={7}>
                        <Grid container direction="column" justify='center'>
                            <Grid item xs={12}>
                            <Typography variant="h5" gutterBottom style={{ textAlign: 'center', fontSize: '35px',color:'#fff', lineHeight: '60px', marginTop: 10, letterSpacing: -1, fontFamily: 'Montserrat', fontWeight: '700' }}>Rider & Restaurant Features</Typography>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#fff' }} />
                                </Grid>
                                <Grid item xs={10} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#fff', fontFamily: 'Montserrat' }}>Roles based access</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#fff' }} />
                                </Grid>
                                <Grid item xs={10} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#fff', fontFamily: 'Montserrat' }}>Zone Management</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#fff' }} />
                                </Grid>
                                <Grid item xs={10} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#fff', fontFamily: 'Montserrat' }}>Coupons Management</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#fff' }} />
                                </Grid>
                                <Grid item xs={10} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#fff', fontFamily: 'Montserrat' }}>Riders Management</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#fff' }} />
                                </Grid>
                                <Grid item xs={10} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#fff', fontFamily: 'Montserrat' }}>Restaurant Management</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#fff' }} />
                                </Grid>
                                <Grid item xs={10} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#fff', fontFamily: 'Montserrat' }}>Multi Language Dashboard</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#fff' }} />
                                </Grid>
                                <Grid item xs={10} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#fff', fontFamily: 'Montserrat' }}>Dispatcher module for managing orders, assign</Typography>
                                </Grid>
                            </Grid>
                            </Grid>
                            <Grid  item xs={12}>
                            <div className={classes.button}>
                                <Button className={classes.buttonInner}>Buy Now $3500</Button>
                            </div>
                            </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{textAlign:'center'}} lg={5}>
                            <img alt="Enatega" style={{width:'50%', textAlign:'center', marginTop:20}} src={enategaMobile} />
                        </Grid>

                    </Grid>
            </div>
        </>


    );
}

export default RiderAndRestaurant;

