
import React from 'react'
import "./FeaturedWork.css";
// import { useHistory } from "react-router-dom";
import { Typography, makeStyles, Grid, Button, useTheme, useMediaQuery } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "gatsby";


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
        backgroundColor: '#3751FF',
        borderRadius: 10,
        padding: theme.spacing(1)

    },
}));

const FeaturedWorkComponent = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const classes = useStyles();
    // const History = useHistory()
    return (

        <div className="lightDiv">
            <Grid container justify='center' alignItems="center">
                <Grid style={{ textAlign: matches ? 'start' : 'center' }} item xs={12} sm={4}>
                    <Typography style={{ fontWeight: 700, fontSize: '4.5vmin', fontFamily: 'Montserrat' }} variant="h3" gutterBottom>
                        {props.heading}
                    </Typography>
                    <Typography style={{ color: '#455880', fontSize: '2.5vmin', fontFamily: 'Poppins', marginTop: 30 }} >
                        We are not intimidated by unconventional ideas. Our past projects involved social networking, geolocation, booking software, assisted typing and more.
                    </Typography>
                    <Link style={{textDecoration:'none'}} to={`/${props.route}`}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        // onClick={() => History.push(`/${props.route}`)}
                        endIcon={<ArrowForwardIcon />}
                    >
                         <Typography style={{ fontSize: '3vmin', fontFamily: 'Poppins' }} >Case Study  </Typography> 
                    </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} style={{ textAlign: matches ? 'end' : 'center' }} sm={7}>
                    <img alt={props.heading} style={{ width: '55vmin', height: '100%', marginTop: 30 }} src={props.src} />
                </Grid>
            </Grid>
        </div>
    );
}

export default FeaturedWorkComponent;

