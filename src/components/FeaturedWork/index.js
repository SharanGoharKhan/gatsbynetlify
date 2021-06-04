import React from 'react'
import featureImage from '../../images/Feature.png'
import macbookImage from '../../images/macbook.png'
import FeaturedWorkComponent from "./FeaturedWork";
import iphoneImage from '../../images/iphone.png'
import { Divider, Typography, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import "./FeaturedWork.css";


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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();

  return (
    <div id="feature">
      <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Typography style={{ fontWeight: 700, fontSize: '6vmin', fontFamily: 'Poppins' }} variant="h3" gutterBottom>
          Featured Works
        </Typography>
        <Typography style={{ fontWeight: 400, color: '#333333', fontFamily: 'Poppins', fontSize: '3vmin', width: matches ? '50%' : '90%', margin: 'auto' }} gutterBottom>
          If you have an idea we will execute it. Our premade solution range
          from ecommerce, food delivery, listing apps and more.
        </Typography>
        <Divider className={classes.divider} />
        <FeaturedWorkComponent
          details="Enatega is a full fledge food delivery solution. We have two premade solution for single vendor and multiple vendors for multiple restaurants."
          heading={'ENATEGA'}
          route="Enatega"
          src={featureImage} />
        <FeaturedWorkComponent
          details="Sense Chat is decentralized chat application that is used for communication as well as awarding users with crypto tokens for their participation"
          heading={'Sense.Chat'}
          route="SenseChat"
          src={macbookImage} />
      </div>
    </div>
  );
}

export default FeaturedWork;