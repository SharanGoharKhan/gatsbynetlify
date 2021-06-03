import React, { useEffect } from 'react'
import { Typography, makeStyles, Grid, Button, Icon, useMediaQuery, useTheme } from '@material-ui/core';
import './Enatega.css'
import enategaHome1 from '../../images/enategaHome1.png'
import enategaHome2 from '../../images/enategaHome2.png'
import {TopBar} from '../../components'
import ColorScheme from "./components/ColorScheme";
import Feature from "./components/Features";
import Flows from "./components/Flows";
import Typographys from "./components/Typography";
import VideoDemo from "./components/VideoDemo";
import Dashboard from "./components/Dashboard";
import RiderAndRestaurant from './components/RiderAndRestaurant';
import { ContactUs, Footer } from "../../components";

const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: '#175CFF',
        margin: 'auto',
        marginTop: '40px',
        width: '74px',
        height: '2px'
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    button: {
        marginTop: theme.spacing(6),
        backgroundColor: '#6BCF93',
        borderRadius: 4,
        height: 52,
        width: 160

    },
    button2: {
        marginTop: theme.spacing(6),
        borderColor: '#6BCF93',
        borderStyle:'solid',
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: 'transparent',
        height: 52,
        width: 160
    }
}));

const Enatega = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classes = useStyles();
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <>
        <TopBar barColor="#FAFBFF" fontColor="#070707" />
        <div className="enategaDiv" style={{textAlign: matches ? 'start' :'center'}}>
             <Grid container justify="center" style={{margin:'auto',width:'90%'}} spacing={2} alignItems="center" >
                <Grid item xs={12} md={6} sm={12}>
                    <Typography style={{ letterSpacing: 1, fontFamily: 'Montserrat', fontWeight: 700, fontSize: '40px' }} variant="h1" gutterBottom>
                        Enatega
                    </Typography>
                    <Typography style={{ letterSpacing: 1, fontFamily: 'Montserrat', fontWeight: 700, fontSize: '40px' }} variant="h1" gutterBottom>
                        Multivendor Food
                    </Typography>
                    <Typography style={{ width: '100%', lineHeight: '37px', fontSize: '16px', fontFamily: 'Montserrat', fontWeight: '400', color: '#625B5B', marginTop: 30 }} >
                        A full fledged solution highly suitable to build any restaurant, food delivery app for iOS & Android with <Typography style={{ fontWeight: '600', fontFamily: 'Montserrat', display: 'inline' }}> Multi-Vendor Support </Typography>built using React Native, Expo, GraphQL, Apollo Client, Node & MongoDB. Easy to build apps like FoodPanda, UberEats, Swiggy, GrubHub, Deliveroo, JustEat, DoorDash, Zomato.
                        <Typography style={{ fontWeight: '600', lineHeight: '37px', fontFamily: 'Montserrat' }}> Offers 3 Mobile Apps(rider, customer & restaurant), Admin Dashboard, Analytics Dashboard & API Server.
                       <Typography style={{ fontWeight: '600', lineHeight: '37px', fontFamily: 'Montserrat' }}>Note: This product is available with Expo client.</Typography></Typography>
                        <Typography style={{ fontWeight: '400', lineHeight: '50px', fontFamily: 'Montserrat' }}>
                            Last Modified: March 18, 2021
                    </Typography>
                    </Typography>
                    <Grid container justify="flex-start" alignItems="center">
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                className={classes.button}
                                autoCapitalize={true}
                            >
                                <Typography autoCapitalize={false} style={{ fontSize: 14, fontWeight: 600, fontFamily:'Montserrat', }} >Contact Us</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                className={classes.button2}
                                autoCapitalize={true}
                            >
                                <Typography autoCapitalize={false} style={{ fontSize: 14, color: '#4F4F4F',fontFamily:'Montserrat', fontWeight: 600 }} >Docs</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} sm={12}>
             
                      <Grid container justify="center" style={{marginRight:'20%', marginTop:'10%'}} alignItems="center">
                      <Grid item xs={6} sm={6} style={{zIndex:1}}>
                      <img style={{width:'130%', height:'60%'  }} src={enategaHome2} />
                    
                        </Grid>
                        <Grid item xs={6} sm={6}>
                        <img style={{marginLeft:'-35%',width:'130%', height:'60%'}} src={enategaHome1} />
                        </Grid>
                      </Grid>
                    
                </Grid>
            </Grid> 
        </div>
        <Feature />
        <Flows />
        <Dashboard />
        <RiderAndRestaurant />
        <Typographys />
        <ColorScheme />
        <VideoDemo />
        <ContactUs />
        <Footer />
      </>                  
    );
}

export default Enatega;