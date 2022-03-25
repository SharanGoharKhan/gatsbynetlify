import React from "react"
import {
  makeStyles,
  Grid,
  Typography,
  Box,
  Button,
  Divider,
  Link as MaterialLink,
} from "@material-ui/core"
import { Link as ScrollLink } from "react-scroll"
import FacebookRound from "../../svg/FacebookRound"
import { Link as GatsbyLink } from "gatsby"
import InstaRound from "../../svg/InstaRound"
import TwitterRound from "../../svg/TwitterRound"
import LinkedInRound from "../../svg/LinkedInRound"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#fff",
    padding: theme.spacing(10),
    height: "fit-content",
    textAlign: "center",
  },
  heading: {
    fontSize: "3.5vmin",
    fontWeight: 700,
    fontFamily: "Montserrat",
  },
  subHeading: {
    fontSize: "2.5vmin",
    fontWeight: 500,
    fontFamily: "Montserrat",
    textAlign: "left",
  },
  innerText: {
    fontWeight: 400,
    fontSize: "2.2vmin",
    color: "#333333",
    opacity: "60%",
    fontFamily: "Montserrat",
  },
  alignLeft: {
    textAlign: "left",
  },
  footerText: {
    color: "#755A7D",
    fontWeight: 500,
    fontSize: "2vmin",
    fontFamily: "Montserrat",
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Grid container justify="center" spacing={6}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Grid
            container
            direction="column"
            spacing={2}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography className={classes.heading} gutterBottom>
                Ninjas Code
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.innerText} gutterBottom>
                Ninjas Code is an software house who provide services and custom
                apps to their clients
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={2}>
          <Grid
            container
            direction="column"
            spacing={3}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography className={classes.subHeading} gutterBottom>
                Quick Links
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ScrollLink
                href={"#"}
                className={classes.innerText}
                style={{ textDecoration: "none" }}
                to="test"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Testimonials
              </ScrollLink>
            </Grid>
            <Grid item xs={12}>
              <ScrollLink
                href={"#"}
                style={{ textDecoration: "none" }}
                className={classes.innerText}
                to="contactus"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
              >
                Contact Us
              </ScrollLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={2}>
          <Grid
            container
            direction="column"
            spacing={2}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography className={classes.subHeading} gutterBottom>
                Our Work
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <MaterialLink href="https://enatega.com/" target="_blank">
                <Typography className={classes.innerText} gutterBottom>
                  Enatega
                </Typography>
              </MaterialLink>
            </Grid>
            <Grid item xs={12}>
              <MaterialLink href="https://www.stylizenow.com" target="_blank">
                <Typography className={classes.innerText} gutterBottom>
                  Stylize Now
                </Typography>
              </MaterialLink>
            </Grid>
            <Grid item xs={12}>
              <MaterialLink href="https://vinifynd.com/" target="_blank">
                <Typography className={classes.innerText} gutterBottom>
                  Vinifynd
                </Typography>
              </MaterialLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={5}>
          <Grid
            container
            direction="column"
            spacing={4}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography className={classes.subHeading} gutterBottom>
                Follow Us
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              spacing={1}
              justify="center"
              alignItems="center"
            >
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://www.facebook.com/ninjascodeofficial"
                  target="_blank"
                >
                  <FacebookRound />
                </MaterialLink>
              </Grid>
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://twitter.com/NinjasCode1"
                  target="_blank"
                >
                  <TwitterRound />
                </MaterialLink>
              </Grid>
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://www.linkedin.com/company/14512538"
                  target="_blank"
                >
                  <LinkedInRound />
                </MaterialLink>
              </Grid>
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://www.instagram.com/ninjascode/"
                  target="_blank"
                >
                  <InstaRound />
                </MaterialLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="fullWidth" />
        </Grid>
        <Grid item xs={12}>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography className={classes.footerText} gutterBottom>
              NinjasCode - © 2021 All Rights Reserved
            </Typography>
            <Box>
              <GatsbyLink
                to="/TermsAndConditions"
                style={{ textDecoration: "none" }}
              >
                <Button>
                  <Typography className={classes.footerText} gutterBottom>
                    Terms and conditions
                  </Typography>
                </Button>
              </GatsbyLink>
              <Button>
                <Typography className={classes.footerText} gutterBottom>
                  -
                </Typography>
              </Button>
              <GatsbyLink
                to="/PrivacyPolicy"
                style={{ textDecoration: "none" }}
              >
                <Button>
                  <Typography className={classes.footerText} gutterBottom>
                    Privacy Policy
                  </Typography>
                </Button>
              </GatsbyLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
