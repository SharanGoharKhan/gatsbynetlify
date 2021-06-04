import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./index.css";
import Layout from "../components/layout"
import "../components/layout.css"
import Seo from "../components/seo"

import { TopBar, FeaturedWork, WhyUs, Testimonal, FAQ, Logos, ContactUs, Footer } from '../components'
import { Grid, Card, Paper, Typography, makeStyles, Box, useMediaQuery } from '@material-ui/core';
import Facebook from "../svg/facebook";
import Twitter from "../svg/twitter";
import LinkedIn from "../svg/linkedin";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(6),
  },
  grid: {
    padding: theme.spacing(4),
  },
  root: {
    padding: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: '10px -10px 5px #98B6FF'
  },
  title: {
    color: '#fff',
    fontWeight: 700,
    fontSize: '8.5vmin',
    fontFamily: 'Montserrat'
  },
  subtitle: {
    color: '#fff',
    fontWeight: 500,
    fontSize: '3vmin',
    lineHeight: '30px',
    // letterSpacing: 1,
    fontFamily: 'Montserrat'
  },
  cardHeaderText: {
    // color: 'black',
    fontWeight: 700,
    fontSize: '3vmin',
    fontFamily: 'Montserrat'
    // fontFamily: 'Montserrat'
  },
  boldText: {
    color: '#fff',
    fontWeight: 700,
    fontSize: '4vmin',
    fontFamily: 'Montserrat'
  },
  number: {
    color: '#fff',
    padding: 8,
    fontFamily: 'Montserrat'
  },
  cardText: {
    fontSize: '2.5vmin',
    fontFamily: 'Montserrat'
  },
  logoContainer:
    { borderWidth: 1, borderColor: 'white', borderStyle: 'solid', display: 'flex', width: '40px', height: '40px', justifyContent: 'center', alignItems: 'center', marginRight: '10px', borderRadius: '4px' }
}));

const IndexPage = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <>
      <Seo title="Ninjas Code" />
      <TopBar barColor="#179AFB" fontColor="#fff" />
      <div id="Home" className="background">
        <Grid container direction="row" justify="center" alignItems="center" spacing={matches ? 0 : 0} className={classes.grid}>
          <Grid style={{ textAlign: matches ? 'start' : 'center' }} item xs={12} lg={4} >
            <Typography variant="h3" gutterBottom className={classes.title}>
              How Can We Level Up Your Business
                         </Typography>
            <Typography variant="h3" gutterBottom className={classes.subtitle}>
              Multiply together. Moved given years multiply for. Saw, can't second. Firmament fish had midst make signs. God multiply form.
                         </Typography>
            <Box style={{ display: 'flex', marginTop: '25px' }}>
              <Box className={classes.logoContainer}>
                <Facebook />
              </Box>
              <Box className={classes.logoContainer}>
                <Twitter />
              </Box>
              <Box className={classes.logoContainer}>
                <LinkedIn />
              </Box>
            </Box>
          </Grid>
          <Grid style={{ textAlign: matches ? 'end' : 'center' }} item xs={12} lg={8}>
            <Grid container direction='row' style={{ marginTop: '20px' }} alignItems="center" justify='center' spacing={2}>
              <Grid item sm={5}>
                <Grid container direction='column' spacing={8}>
                  <Grid item xs={12}>
                    <Typography className={classes.boldText} gutterBottom>
                      3 Things make us unique
                             </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography className={classes.cardHeaderText} gutterBottom>
                          Raise Funds
                             </Typography>
                        <div style={{ width: '40px', textAlign: 'center', height: '40px', backgroundColor: '#175CFF', borderRadius: '50%' }}>
                          <Typography className={classes.number}>
                            01
                             </Typography>
                        </div>
                      </div>
                      <Typography className={classes.cardText} gutterBottom>
                        Venture capitals are no longer giving investments for just an idea. You have to prove that you put your skin in the.
                             </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={5}>
                <Grid container direction='column' spacing={3}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography className={classes.cardHeaderText} gutterBottom>
                          Raise Funds
                             </Typography>

                        <div style={{ width: 40, textAlign: 'center', height: 40, backgroundColor: '#175CFF', borderRadius: '50%' }}>
                          <Typography className={classes.number}>
                            02
                             </Typography>
                        </div>
                      </div>
                      <Typography className={classes.cardText} gutterBottom>
                        Venture capitals are no longer giving investments for just an idea. You have to prove that you put your skin in the.
                             </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography className={classes.cardHeaderText} gutterBottom>
                          Raise Funds
                             </Typography>
                        <div style={{ width: 40, textAlign: 'center', height: 40, backgroundColor: '#175CFF', borderRadius: '50%' }}>
                          <Typography className={classes.number}>
                            03
                             </Typography>
                        </div>
                      </div>
                      <Typography className={classes.cardText} gutterBottom>
                        Venture capitals are no longer giving investments for just an idea. You have to prove that you put your skin in the.
                             </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </div>
      <FeaturedWork />
      <WhyUs />
      <Testimonal />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  )
}

export default IndexPage
