
import React from 'react'
import { Divider, Typography, makeStyles, Paper, Box, Grid, Button, Icon } from '@material-ui/core';
import "./FeaturedWork.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import featureImage from '../../images/Feature.png'
import macbookImage from '../../images/macbook.png'
import FeaturedWorkComponent from "./FeaturedWork";
import iphoneImage from '../../images/iphone.png'

const useStyles = makeStyles((theme) => ({

  title: {
    fontFamily: theme.typography
  },
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

const FeaturedWork = () => {
  const classes = useStyles();
  return (
    <div id="feature">
      <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Typography style={{ fontWeight: 700, fontSize: '40px' }} variant="h3" gutterBottom>
          Featured Works
      </Typography>
        <Typography style={{ fontWeight: 400, color: '#333333', fontSize: '21px', width: '50%', margin: 'auto' }} gutterBottom>
          We are not intimidated by unconventional ideas. Our past projects involved social networking, geolocation, booking software, assisted typing and more.
      </Typography>
        <Divider className={classes.divider} />
        <FeaturedWorkComponent heading={'ENATEGA'} src={featureImage} />
        <FeaturedWorkComponent heading={'ECOMMERO'} src={macbookImage} />
        <FeaturedWorkComponent heading={'GKHAIR'} src={iphoneImage} />
      </div>
    </div>
  );
}

export default FeaturedWork;