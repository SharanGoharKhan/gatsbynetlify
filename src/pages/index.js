import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./index.css";
import Layout from "../components/layout"
import Seo from "../components/seo"

import TopBar from '../components/TopBar/index'
import { Grid, Card, Paper, Typography, makeStyles, Box, useMediaQuery } from '@material-ui/core';
import FacebookLogo from  '../images/facebook.png'
import twitterLogo from '../images/twitter.png'
import linkedinLogo from '../images/linkedin.png'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(6),
  },
  grid: {
    padding: theme.spacing(10),
  },
  root: {
    padding: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'flex-start',
    color: theme.palette.text.secondary,
    boxShadow: '10px -10px 5px #98B6FF'
  },
  title: {
    color: '#fff',
    fontWeight: 700,
    fontSize: '2.5rem',
    //   fontFamily: 'monospa'
  },
  subtitle: {
    color: '#fff',
    fontWeight: 500,
    fontSize: '17px',
    letterSpacing: 1
    // fontFamily: 'Montserrat'
  },
  cardHeaderText: {
    // color: 'black',
    fontWeight: 700,
    fontSize: '17px',
    // fontFamily: 'Montserrat'
  },
  boldText: {
    color: '#fff',
    fontWeight: 700,
    fontSize: '25px',
  },
  number: {
    color: '#fff',
    padding: 8
  }
}));

const IndexPage = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <>
      <Seo title="Ninjas Code" />
      <TopBar barColor="#179AFB" fontColor="#fff" />
      <div className="background">
        <Grid container direction="row" spacing={matches ? 6 : 0} className={classes.grid}>
          <Grid item lg={5} >
            <Typography variant="h3" gutterBottom className={classes.title}>
              How Can We Level Up Your Business
                         </Typography>
            <Typography variant="h3" gutterBottom className={classes.subtitle}>
              Multiply together. Moved given years multiply for. Saw, can't second. Firmament fish had midst make signs. God multiply form.
                         </Typography>
            <div className="imgDiv">
              <StaticImage src="../images/facebook.png" imgClassName="img" formats={["AUTO", "WEBP", "AVIF"]} quality={95} alt="facebook"/>
              <StaticImage src="../images/twitter.png" imgClassName="img" formats={["AUTO", "WEBP", "AVIF"]} quality={95} alt="twitter"/>
              <StaticImage src="../images/linkedin.png" imgClassName="img" formats={["AUTO", "WEBP", "AVIF"]} quality={95} alt="linkedin"/>
              
              {/* <img src={FacebookLogo} className="img" />
              <img src={twitterLogo} className="img" style={{ width: 15 }} />
              <img src={linkedinLogo} className="img" style={{ width: 15 }} /> */}
            </div>
          </Grid>
          <Grid item lg={7}>
            <Grid container direction='row' style={{ marginTop: '40px' }} alignItems="center" justify='center' spacing={2}>
              <Grid item sm={6}>
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
                      <Typography gutterBottom>
                        Venture capitals are no longer giving investments for just an idea. You have to prove that you put your skin in the.
                             </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={6}>
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
                      <Typography gutterBottom>
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
                      <Typography gutterBottom>
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
    </>
    // <Layout>
    //   <Seo title="Home" />
    //   <h1>Hi people</h1>
    //   <p>Welcome to your updated Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <StaticImage
    //     src="../images/gatsby-astronaut.png"
    //     width={300}
    //     quality={95}
    //     formats={["AUTO", "WEBP", "AVIF"]}
    //     alt="A Gatsby astronaut"
    //     style={{ marginBottom: `1.45rem` }}
    //   />
    //   <p>
    //     <Link to="/page-2/">Go to page 2</Link> <br />
    //     <Link to="/page-3/">Go to page 3</Link> <br />
    //     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    //   </p>
    // </Layout>
  )
}

export default IndexPage
