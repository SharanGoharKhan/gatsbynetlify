import React from "react"
import { Box, Link as MaterialUILink, useTheme } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { colors } from "../../utils/colors"

export default function BannerIcons() {
  const theme = useTheme()

  const classes = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: "48px",
    },
    logoContainer: {
      borderWidth: 1,
      borderStyle: "solid",
      width: "40px",
      height: "40px",
      borderColor: colors.white,
      margin: "auto",
      [theme.breakpoints.up("sm")]: {
        marginRight: "10px",
        margin: "10px",
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <Box sx={classes.logoContainer}>
        <MaterialUILink
          href="https://www.facebook.com/ninjascodeofficial"
          target="_blank"
        >
          <FacebookIcon style = {{marginTop: "5px", color: 'white'}} />
          
        </MaterialUILink>
      </Box>
      <Box sx={classes.logoContainer}>
        <MaterialUILink href="https://twitter.com/NinjasCode1" target="_blank">
          <TwitterIcon style = {{marginTop: "5px", color: 'white'}}  />
        </MaterialUILink>
      </Box>
      <Box sx={classes.logoContainer}>
        <MaterialUILink
          href="https://www.linkedin.com/company/14512538"
          target="_blank"
        >
          <LinkedInIcon style = {{marginTop: "5px", color: 'white'}}  />
        </MaterialUILink>
      </Box>
      <Box sx={classes.logoContainer}>
        <MaterialUILink
          href="https://www.instagram.com/ninjascodeofficial/"
          target="_blank"
        >
          <InstagramIcon style = {{marginTop: "5px", color: 'white'}} />
        </MaterialUILink>
      </Box>
      <Box sx={classes.logoContainer}>
        <MaterialUILink
          href="https://github.com/Ninjas-Code-official"
          target="_blank"
        >
          <GitHubIcon style = {{marginTop: "5px", color: 'white'}} />
        </MaterialUILink>
      </Box>
    </Box>
  )
}
