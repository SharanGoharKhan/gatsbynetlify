
import React from "react";
import { makeStyles, Grid, Typography, Box, Link,Button, Divider } from '@material-ui/core';
import FacebookRound from "../../svg/FacebookRound";
import { Link as GatsbyLink } from "gatsby";
import InstaRound from "../../svg/InstaRound";
import TwitterRound from "../../svg/TwitterRound";
import LinkedInRound from "../../svg/LinkedInRound";

const useStyles = makeStyles((theme) => ({

    container: {
        backgroundColor: '#fff',
        padding: theme.spacing(10),
        height:'fit-content',
        textAlign:'center'
    },
    heading:{
        fontSize:'32px',
        fontWeight:700,
        fontFamily:'Montserrat',
    },
    subHeading:{
        fontSize:'18px',
        fontWeight:500,
        fontFamily:'Montserrat',
        textAlign:'left'
    },
    innerText:{
        fontWeight:400,
        fontSize:'16px',
        color:"#333333",
        opacity:'60%',
        fontFamily:'Montserrat'
    },
    alignLeft:{
        textAlign:'left'
    },
    footerText:{
        color:'#755A7D',
        fontWeight:500,
        fontSize:'2.6vmin',
        fontFamily:'Montserrat'
    }
}));

const Footer = () => {
    const classes = useStyles();
  
    return (
        <div className={classes.container}>
        <Grid container justify="center" spacing={6}>
            <Grid item xs={12} sm={6} md={6} lg={3}>
            <Grid container direction="column" spacing={2} justify="center" alignItems="center" > 
            <Grid item xs={12}>
            <Typography className={classes.heading} gutterBottom>
                    Ninjas Code
             </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography className={classes.innerText} gutterBottom>
            Ninjas Code is an software house who provide services and custom apps to their clients
             </Typography>
            </Grid> 
            </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={2}>
            <Grid container direction="column" spacing={3} justify="center" alignItems="center" > 
            <Grid item xs={12}>
            <Typography className={classes.subHeading} gutterBottom>
                Quick Links
             </Typography>
            </Grid>
            <Grid item xs={12}>
             <Link href={'#'} className={classes.innerText} >
               About Us
              </Link>
             
            </Grid>
            <Grid item xs={12}>
            
             <Link href={'#'} className={classes.innerText} >
             Testimonials
              </Link>
            </Grid>
            <Grid item xs={12}>
             <Link  href={'#'} className={classes.innerText}>
               Contact Us
              </Link>
            </Grid> 
            </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={2}>
            <Grid container direction="column" spacing={2} justify="center" alignItems="center" >
            <Grid item xs={12}>
            <Typography className={classes.subHeading} gutterBottom>
                Our Work
             </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography className={classes.innerText} gutterBottom>
             Entega
             </Typography>
            </Grid> 
            <Grid item xs={12}>
            <Typography className={classes.innerText} gutterBottom>
            Stylize Now
             </Typography>
            </Grid> 
            <Grid item xs={12}>
            <Typography className={classes.innerText} gutterBottom>
            Vinifynid
             </Typography>
            </Grid> 
            <Grid item xs={12}>
            <Typography className={classes.innerText} gutterBottom>
            Gk Hair
             </Typography>
            </Grid> 
            </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={5}>
            <Grid container direction="column" spacing={4} justify="center" alignItems="center">
            <Grid item xs={12}>
            <Typography className={classes.subHeading} gutterBottom>
                Follow Us
             </Typography>
            </Grid>
            <Grid container direction="row" spacing={1} justify="center" alignItems="center">
            <Grid item xs={3}>
           <Link href={'#'}>
            <FacebookRound />
            </Link>
            </Grid>
            <Grid item xs={3}>
            <Link href={'#'}>
            <TwitterRound />
            </Link>
            </Grid>
            <Grid item xs={3}>
            <Link href={'#'}>
            <LinkedInRound />
            </Link>
            </Grid>
            <Grid item xs={3}>
            <Link href={'#'}>
            <InstaRound />
            </Link>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
            <Grid item xs={12} >
            <Divider variant="fullWidth" />
            </Grid>
            <Grid item xs={12} >
            <Box style={{display:'flex', justifyContent:'space-between'}}>
            <Typography className={classes.footerText} gutterBottom>
            NinjasCode - © 2021 All Rights Reserved
             </Typography>
             <GatsbyLink to="/TermsAndConditions">
             <Button>
             <Typography className={classes.footerText} gutterBottom>
             Terms and conditions - Privacy Policy
             </Typography>
             </Button>
             </GatsbyLink>
            </Box>
            </Grid>
        </Grid>
        </div>
    );
}

export default Footer;

