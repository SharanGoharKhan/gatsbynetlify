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

import FacebookRound from "../../images/facebook-icon.svg"
import { Link as GatsbyLink } from "gatsby"
import InstaRound from "../../images/instagram-icon.svg"
import TwitterRound from "../../images/twitter-icon.svg"
import LinkedInRound from "../../images/linkedin-icon.svg"
import { colors } from "../../utils/colors"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: colors.white,
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
    color: colors.lightGray,
    opacity: "60%",
    fontFamily: "Montserrat",
  },
  alignLeft: {
    textAlign: "left",
  },
  footerText: {
    color: colors.lightPurple,
    fontWeight: 500,
    fontSize: "2vmin",
    fontFamily: "Montserrat",
  },
  links: {
    textDecoration: "none",
    color: "gray",
    fontSize: "2.5vmin",
  },
  icons: {
    "& img": {
      width: 30,
      height: 30,
    },
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Grid container justify="center" spacing={6}>
        <Grid item xs={12} sm={6} md={4}>
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
        <Grid item xs={12} sm={6} md={4}>
          <Grid
            container
            direction="column"
            spacing={2}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography className={classes.subHeading} gutterBottom>
                Quick Links
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <GatsbyLink to={"/Portfolio"} className={classes.links}>
                Portfolio
              </GatsbyLink>
            </Grid>
            <Grid item xs={12}>
              <GatsbyLink to={"/Services"} className={classes.links}>
                Services
              </GatsbyLink>
            </Grid>
            <Grid item xs={12}>
              <GatsbyLink to={"/Career"} className={classes.links}>
                Career
              </GatsbyLink>
            </Grid>
            <Grid item xs={12}>
              <GatsbyLink to={"/Team"} className={classes.links}>
                Team
              </GatsbyLink>
            </Grid>
            <Grid item xs={12}>
              <GatsbyLink to={"/#contact"} className={classes.links}>
                ContactUs
              </GatsbyLink>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
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
              className={classes.icons}
            >
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://www.facebook.com/ninjascodeofficial"
                  target="_blank"
                >
                  <img src={FacebookRound} alt="facebook" />
                </MaterialLink>
              </Grid>
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://www.instagram.com/ninjas.code/"
                  target="_blank"
                >
                  <img src={InstaRound} alt="instagram" />
                </MaterialLink>
              </Grid>
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://www.linkedin.com/company/14512538"
                  target="_blank"
                >
                  <img src={LinkedInRound} alt="linkedin" />
                </MaterialLink>
              </Grid>
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://twitter.com/NinjasCode1"
                  target="_blank"
                >
                  <img src={TwitterRound} alt="twitter" />
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
