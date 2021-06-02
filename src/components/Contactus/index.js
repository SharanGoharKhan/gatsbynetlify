
import React, { useState } from "react";
import { makeStyles, Grid, Typography, TextareaAutosize, Box } from '@material-ui/core';
import callIcon from '../../images/callIcon.png'
import emailIcon from '../../images/emailIcon.png'
import mapIcon from '../../images/mapIcon.png'

const useStyles = makeStyles((theme) => ({

    container: {
        backgroundColor: '#283646',
        padding: theme.spacing(6),
        height:'fit-content',
        textAlign:'center',
        // paddingLeft:theme.spacing(10),
        // paddingRight:theme.spacing(10),
        marginTop:theme.spacing(6)
    },
    textInput: {
        width: "100%",
        height: '3vh',
        borderRadius: 10,
        borderWidth:1,
        padding: 10,
        fontFamily:'Montserrat',
        fontWeight:'600',
    },
    heading:{
        fontWeight: 700, 
        color: '#fff', 
        fontSize: '5vh' ,
        textAlign: 'center',
        fontFamily:'Montserrat' 
    },
    iconText:{
        fontSize:'2vh',
        fontWeight:600,
        color:'#CFD3D7',
        fontFamily:'Montserrat'
    },
    iconText2:{
        fontSize:'3vh',
        fontWeight:700,
        color:'#fff',
        fontFamily:'Montserrat'
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
        <div className={classes.container}>
        <Grid container justify="center" direction="row" spacing={5} alignItems="center" >
            <Grid item xs={12}>
                <Typography className={classes.heading} variant="h3" gutterBottom>
                    Let's Talk with us
                </Typography>
            </Grid>
            <Grid item  xs={12} md={4}>
                <input value={params.username} onChange={(event) => { setParams({ ...params, username: event.target.value }) }} type="text" className={classes.textInput} placeholder="Enter your name" />
            </Grid>
            <Grid item xs={12} md={4}>
                <input type="text" onChange={(event) => { setParams({ ...params, email: event.target.value }) }} value={params.email} className={classes.textInput} placeholder="Enter your email" />
            </Grid>
            <Grid item xs={12} md={8}>
                <TextareaAutosize value={params.message} onChange={(event) => { setParams({ ...params, message: event.target.value }) }} style={{ width: '100%', height: '20vh',fontFamily:'Montserrat',fontWeight:'600', borderRadius: '8px', padding: 10 }} aria-label="empty textarea" placeholder="Message..." />
            </Grid>
            <Grid item xs={12}>
            <Typography className={classes.heading} variant="h3" gutterBottom>
                   Get in Touch
            </Typography>
            </Grid>
            <Grid style={{textAlign:'center'}} item xs={12} sm={6} md={6} lg={4}>
            <Box style={{display:'flex', width:'fit-content',textAlign:'center', alignItems:'center', justifyContent:'space-evenly'}}>
            <img alt="call" src={callIcon} />
            <Box style={{padding:20}}> 
            <Typography variant="h6" className={classes.iconText}>
                Phone Number
            </Typography>
            <Typography variant="h6" className={classes.iconText2} >
            (62) 1829017
            </Typography>
            </Box>
                 </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box style={{display:'flex',width:'fit-content',  alignItems:'center', justifyContent:'space-evenly'}}>
            <img alt="email" src={emailIcon} />
            <Box style={{padding:20}}>
            <Typography variant="h6" className={classes.iconText}>
            Email
            </Typography>
            <Typography variant="h6" className={classes.iconText2} >
            Hello@studio.co
            </Typography>
            </Box>
                 </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
            <Box style={{display:'flex',width:'fit-content',  alignItems:'center', justifyContent:'space-evenly'}}>
            <img alt="location" src={mapIcon} />
            <Box style={{padding:20}}>
            <Typography variant="h6" className={classes.iconText}>
            Map Street
            </Typography>
            <Typography variant="h6" className={classes.iconText2} >
            John Bucarest st 100
            </Typography>
            </Box>
                 </Box>
            </Grid>
        </Grid>
        </div>
    );
}

export default ContactUs;

