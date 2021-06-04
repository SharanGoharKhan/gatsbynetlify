
import React, { useState } from "react";
import { makeStyles, Grid, Typography, TextareaAutosize,Button, Box } from '@material-ui/core';
import CallIcon from "../../svg/callIcon";
import AddressIcon from "../../svg/addressIcon";
import EmailIcon from "../../svg/emailIcon";

const useStyles = makeStyles((theme) => ({

    container: {
        backgroundColor: '#283646',
        padding: theme.spacing(6),
        height: 'fit-content',
        textAlign: 'center',
        // paddingLeft:theme.spacing(10),
        // paddingRight:theme.spacing(10),
        marginTop: theme.spacing(6)
    },
    textInput: {
        width: "100%",
        height: '7vmin',
        borderRadius: 2,
        borderWidth: 1,
        padding: 10,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '2.5vmin'
    },
    heading: {
        fontWeight: 700,
        color: '#fff',
        fontSize: '5vmin',
        textAlign: 'center',
        fontFamily: 'Montserrat'
    },
    iconText: {
        fontSize: '3vmin',
        fontWeight: 600,
        color: '#CFD3D7',
        fontFamily: 'Montserrat'
    },
    iconText2: {
        fontSize: '3vmin',
        fontWeight: 700,
        color: '#fff',
        fontFamily: 'Montserrat'
    }
}));

const ContactUs = () => {
    const classes = useStyles();
    const [params, setParams] = useState({
        username: '',
        email: '',
        message: ''
    })
    return (
        <div id="contact" className={classes.container}>
            <Grid container justify="center" direction="row" spacing={5} alignItems="center" >
                <form name="contact" action="POST" data-netlify="true">
                    <Grid item xs={12}>
                        <Typography className={classes.heading} variant="h3" gutterBottom>
                            Let's Talk with us
                </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <input name="name" value={params.username} onChange={(event) => { setParams({ ...params, username: event.target.value }) }} type="text" className={classes.textInput} placeholder="Enter your name" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <input name="email" type="text" onChange={(event) => { setParams({ ...params, email: event.target.value }) }} value={params.email} className={classes.textInput} placeholder="Enter your email" />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TextareaAutosize name="quote" value={params.message} onChange={(event) => { setParams({ ...params, message: event.target.value }) }} style={{ width: '100%', height: '20vh', fontFamily: 'Montserrat', fontWeight: '600', borderRadius: '8px', padding: 10 }} aria-label="empty textarea" placeholder="Message..." />
                    </Grid>
                    <Grid item style={{ textAlign: 'end' }} xs={12} md={8}>
                        <Button type="submit" variant="contained" size="large" style={{ width: '15%', color: '#3751FF', fontFamily: 'Montserrat', backgroundColor: '#3A86FF' }}>
                            <Typography style={{ fontFamily: 'Montserrat', color: '#fff', fontSize: '3vmin', fontWeight: '600' }}>Send</Typography>
                        </Button>
                    </Grid>
                </form>
                <Grid item xs={12}>
                    <Typography className={classes.heading} variant="h3" gutterBottom>
                        Get in Touch
            </Typography>
            </Grid>
            <Grid style={{textAlign:'center'}} item xs={6} sm={6} md={6} lg={4}>
            <Box style={{display:'block',textAlign:'center', alignItems:'center'}}>
            {/* <img alt="call" style={{width:'9vmin'}} src={callIcon} /> */}
            <CallIcon />
            <Box style={{padding:'2vmin'}}> 
            <Typography className={classes.iconText}>
                Phone Number
            </Typography>
                            <Typography className={classes.iconText2} >
                                (62) 1829017
            </Typography>
            </Box>
                 </Box>
            </Grid>
            <Grid style={{textAlign:'center'}} item xs={6} sm={6} md={6} lg={4}>
            <Box style={{display:'block',textAlign:'center', alignItems:'center'}}>
            {/* <img alt="email" style={{width:'9vmin'}} src={emailIcon} /> */}
            <EmailIcon />
            <Box style={{textAlign:'center',padding:'2vmin'}}> 
            <Typography className={classes.iconText}>
            Email
            </Typography>
                            <Typography className={classes.iconText2} >
                                Hello@studio.co
            </Typography>
            </Box>
                 </Box>
            </Grid>
            <Grid style={{textAlign:'center'}} item xs={8} sm={6} md={6} lg={4}>
            <Box style={{display:'block',textAlign:'center', alignItems:'center'}}>
            {/* <img alt="location" style={{width:'9vmin'}} src={mapIcon} /> */}
            <AddressIcon />
            <Box style={{padding:'2vmin'}}> 
            <Typography className={classes.iconText}>
            Map Street
            </Typography>
                            <Typography className={classes.iconText2} >
                                John Bucarest st 100
            </Typography>
                        </Box>
                    </Box>
                </Grid>
                {/* <Grid item style={{textAlign:'center'}} xs={4} sm={6} md={6} lg={4}>
            <Box style={{display:'block',width:'fit-content',  alignItems:'center', justifyContent:'space-evenly'}}>
            <img alt="email" style={{width:'9vmin'}} src={emailIcon} />
            <Box style={{padding:'2vmin'}}>
            <Typography s className={classes.iconText}>
            Email
            </Typography>
            <Typography s className={classes.iconText2} >
            Hello@studio.co
            </Typography>
            </Box>
                 </Box>
         </Grid>
            <Grid style={{textAlign:'center'}} item xs={4} sm={6} md={6} lg={4}>
            <Box style={{display:'block',width:'fit-content',  alignItems:'center', justifyContent:'space-evenly'}}>
            <img alt="location" style={{width:'9vmin'}} src={mapIcon} />
            <Box style={{padding:'2vmin'}}>
            <Typography  className={classes.iconText}>
            Map Street
            </Typography>
            <Typography  className={classes.iconText2} >
            John Bucarest st 100
            </Typography>
            </Box>
                 </Box>
      </Grid> */}
            </Grid>
        </div>
    );
}

export default ContactUs;

