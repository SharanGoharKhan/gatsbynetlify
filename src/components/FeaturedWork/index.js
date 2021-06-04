import React from 'react'
import featureImage from '../../../public/static/Feature.png'
import macbookImage from '../../../public/static/macbook.png'
import FeaturedWorkComponent from "./FeaturedWork";
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
          We are not intimidated by unconventional ideas. Our past projects involved social networking, geolocation, booking software, assisted typing and more.
  </Typography>
        <Divider className={classes.divider} />
        <FeaturedWorkComponent heading={'ENATEGA'} route="Enatega" src={featureImage} />
        <FeaturedWorkComponent heading={'Sense.Chat'} route="SenseChat" src={macbookImage} />
        {/* <FeaturedWorkComponent heading={'GKHAIR'} src={iphoneImage} /> */}
      </div>
    </div>
  );
}

export default FeaturedWork;