
import React from 'react'
import { Typography, makeStyles, Grid, Button, useTheme, useMediaQuery } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import "./Ecommero.css";


const useStyles = makeStyles((theme) => ({
    divider: {
        backgroundColor: '#175CFF',
        margin: 'auto',
        marginTop: theme.spacing(0),
        width: '74px',
        height: '2px'
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    button: {
        marginTop: theme.spacing(3),
        backgroundColor: 'transparent',
        borderColor:'#AF8F70',
        borderRadius: 10,
        borderWidth:1,
        padding: theme.spacing(2),
        marginBottom:theme.spacing(4)

    },
}));

const Ecommero = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classes = useStyles();
    return (

        <div className="lightDiv">
            <Grid container justify='center' alignItems="center">
                <Grid style={{ textAlign: matches ? 'start' : 'center' }} item xs={12} sm={5}>
                    <Typography style={{ fontWeight: 'bolder', fontSize: '4.5vmin', fontFamily: 'Montserrat' }} variant="h3" gutterBottom>
                    Open source Project - <Typography style={{fontStyle:'italic', display:'inline',fontWeight: 'bold', fontSize: '4.5vmin', fontFamily: 'Montserrat'}}>Ecommero</Typography> 
                    </Typography>
                    <Typography style={{ color: '#333333', fontSize: '2.5vmin', fontFamily: 'Poppins', marginTop: 30 }} >
                    We build our own tools. We actively contribute to open source, working, among others, on Expo, Membrane, React Native Reanimated and Gesture Handler.
                    </Typography>
                    <Typography style={{ color: '#333333', fontSize: '2.5vmin', fontFamily: 'Poppins', marginTop: 30 }} >
                    At the same time, we are an important part of the React Native community - we organize community meetups and a React Native focused conference called App.js.
                    </Typography>
                    <Link style={{ textDecoration: 'none' }}>
                        <Button
                            variant="outlined"
                            color="#AF8F70"
                            size="large"
                            className={classes.button}
                            endIcon={<ArrowForwardIcon style={{color:'#AF8F70'}} />}
                        >
                            <Typography style={{ fontSize: '3vmin',color:'#AF8F70', fontFamily: 'Poppins', textTransform: 'initial' }} >Check On Github </Typography>
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} style={{ textAlign: matches ? 'right' : 'center' }} sm={6}>
                    <StaticImage style={{width:'70vmin', height:'70vmin'}} src='../../images/ecommero.png' />
                </Grid>
            </Grid>
        </div>
    );
}

export default Ecommero;

