
import React from 'react'
import { Divider, Typography, makeStyles, Paper, Box, Grid, Button, Icon } from '@material-ui/core';
import "./FeaturedWork.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import { useHistory } from "react-router-dom";

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
        backgroundColor: '#3751FF',
        borderRadius: 10,
        height: 60

    },
}));

const FeaturedWorkComponent = (props) => {
    const classes = useStyles();
    // const History = useHistory()
    return (

        <div className="lightDiv">
            <Grid container justify='center' alignItems="center" spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography style={{ fontWeight: 700, fontSize: '32px', fontFamily: 'Montserrat' }} variant="h3" gutterBottom>
                        {props.heading}
                    </Typography>
                    <Typography style={{ color: '#455880', marginTop: 30 }} >
                        We are not intimidated by unconventional ideas. Our past projects involved social networking, geolocation, booking software, assisted typing and more.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        // onClick={()=>History.push('/Enatega')}
                        endIcon={<ArrowForwardIcon />}
                    >
                        <Typography style={{ fontSize: 18 }} >Case Study  </Typography>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <img style={{ width: '100%', height: '100%' }} src={props.src} />
                </Grid>
            </Grid>
        </div>


    );
}

export default FeaturedWorkComponent;

