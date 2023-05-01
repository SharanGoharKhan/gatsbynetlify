import React from "react"
import {
  Grid,
  Typography,
  Box,
  Button,
  Divider,
  Link as MaterialLink,
} from "@mui/material"
import { Link as GatsbyLink } from "gatsby"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { colors } from "../../utils/colors"

const Footer = () => {
  const classes = {
    container: {
      backgroundColor: colors.white,
      padding: 80,
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
  }

  return (
    <div style={classes.container}>
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
              <Typography style={classes.heading} gutterBottom>
                Ninjas Code
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={classes.innerText} gutterBottom>
                At our company, we value the importance of delivering an MVP in
                the shortest possible time. To ensure efficiency and quality, we
                employ agile development methodologies and iterative design
                processes. Trust us to build your MVP quickly without
                compromising on quality.
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
              <Typography style={classes.subHeading} gutterBottom>
                Quick Links
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <GatsbyLink to={"/Portfolio"} style={classes.links}>
                Portfolio
              </GatsbyLink>
            </Grid>
            <Grid item xs={12}>
              <GatsbyLink to={"/Services"} style={classes.links}>
                Services
              </GatsbyLink>
            </Grid>
            <Grid item xs={12}>
              <GatsbyLink to={"/Career"} style={classes.links}>
                Career
              </GatsbyLink>
            </Grid>
            <Grid item xs={12}>
              <GatsbyLink to={"/Team"} style={classes.links}>
                Team
              </GatsbyLink>
            </Grid>
            <Grid item xs={12}>
              <GatsbyLink to={"/#contact"} style={classes.links}>
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
              <Typography style={classes.subHeading} gutterBottom>
                Follow Us
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
              style={classes.icons}
            >
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://www.facebook.com/ninjascodeofficial"
                  target="_blank"
                >
                  <FacebookRoundedIcon style={{color: "black"}} fontSize="large"/>
                </MaterialLink>
              </Grid>
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://www.instagram.com/ninjascodeofficial/"
                  target="_blank"
                >
                  <InstagramIcon style={{color: "black"}} fontSize="large"/>
                </MaterialLink>
              </Grid>
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://www.linkedin.com/company/14512538"
                  target="_blank"
                >
                  <LinkedInIcon style={{color: "black"}} fontSize="large"/>
                </MaterialLink>
              </Grid>
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://github.com/Ninjas-Code-official"
                  target="_blank"
                >
                  <GitHubIcon style={{color: "black"}} fontSize="large"/>
                </MaterialLink>
              </Grid>
              <Grid item xs={3} lg={2}>
                <MaterialLink
                  href="https://twitter.com/NinjasCode1"
                  target="_blank"
                >
                  <TwitterIcon style={{color: "black"}} fontSize="large"/>
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
            <Typography style={classes.footerText} gutterBottom>
              Ninjas Code - © 2023 All Rights Reserved
            </Typography>
            <Box>
              <GatsbyLink
                to="/TermsAndConditions"
                style={{ textDecoration: "none" }}
              >
                <Button>
                  <Typography style={classes.footerText} gutterBottom>
                    Terms and conditions
                  </Typography>
                </Button>
              </GatsbyLink>
              <Button>
                <Typography style={classes.footerText} gutterBottom>
                  -
                </Typography>
              </Button>
              <GatsbyLink
                to="/PrivacyPolicy"
                style={{ textDecoration: "none" }}
              >
                <Button>
                  <Typography style={classes.footerText} gutterBottom>
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
