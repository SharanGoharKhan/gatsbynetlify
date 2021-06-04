import React from 'react';
import {Typography, makeStyles, Grid } from '@material-ui/core';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: '#175CFF',
        margin: 'auto',
        marginTop: '40px',
        width: '74px',
        height: '2px'
    },
    root: {
        flexGrow: 1,
        backgroundColor: '#fff',
        height: 'fit-content',
        marginTop: theme.spacing(10)
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
}));

const Dashboard = (props) => {
    const classes = useStyles();

    return (
        <>

            <div className={classes.root}>
                
                    <Grid container direction="row">
                        <Grid item xs={12} lg={7}>
                            <Typography variant="h5" gutterBottom style={{ textAlign: 'center', fontSize: '200%', lineHeight: '60px', marginTop: 10, letterSpacing: -1, fontFamily: 'Montserrat', fontWeight: '700' }}>Dashboard Features</Typography>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#6FCF96' }} />
                                </Grid>
                                <Grid item xs={9} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#333333', fontFamily: 'Montserrat' }}>Roles based access</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#6FCF96' }} />
                                </Grid>
                                <Grid item xs={9} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#333333', fontFamily: 'Montserrat' }}>Zone Management</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#6FCF96' }} />
                                </Grid>
                                <Grid item xs={9} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#333333', fontFamily: 'Montserrat' }}>Coupons Management</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#6FCF96' }} />
                                </Grid>
                                <Grid item xs={9} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#333333', fontFamily: 'Montserrat' }}>Riders Management</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#6FCF96' }} />
                                </Grid>
                                <Grid item xs={9} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#333333', fontFamily: 'Montserrat' }}>Restaurant Management</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='center'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#6FCF96' }} />
                                </Grid>
                                <Grid item xs={9} lg={5}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#333333', fontFamily: 'Montserrat' }}>Multi Language Dashboard</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify='flex-end'>
                                <Grid item xs={1}>
                                    <CheckCircleSharpIcon style={{ fontSize: 25, color: '#6FCF96' }} />
                                </Grid>
                                <Grid item xs={10} lg={8}>
                                    <Typography style={{ lineHeight: '25px', fontSize: 15, color: '#333333', fontFamily: 'Montserrat' }}>Dispatcher module for managing orders, assign</Typography>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                        <Grid style={{textAlign:'center'}} item xs={12} lg={5}>
                            <StaticImage alt="dashboard" style={{ width: '70vmin' }} src={'../../../images/dashboard.png'} />
                        </Grid>

                    </Grid>
                
            </div>
        </>


    );
}

export default Dashboard;

