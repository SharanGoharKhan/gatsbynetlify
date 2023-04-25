import React from "react"
import { Box, Link as MaterialUILink, useTheme } from "@mui/material"
import Facebook from "../../svg/facebook"
import Twitter from "../../svg/twitter"
import LinkedIn from "../../svg/linkedin"
import Instagram from "../../svg/instagram"
import GithubIcon from "../../svg/GithubIcon"
import { colors } from "../../utils/colors"

export default function BannerIcons() {
  const theme = useTheme()

  const classes = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: 48,
    },
    logoContainer: {
      borderWidth: 1,
      borderStyle: "solid",
      width: "40px",
      height: "40px",
      borderColor: colors.white,
      margin: "auto",
      [theme.breakpoints.up("sm")]: {
        marginRight: 10,
        margin: 10,
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }
  return (
    <Box
      style={{
        display: "flex",
        textAlign: "center",
        marginTop: "40px",
      }}
    >
      <Box className={classes.logoContainer}>
        <MaterialUILink
          href="https://www.facebook.com/ninjascodeofficial"
          target="_blank"
        >
          <Facebook style={{ marginTop: "32%" }} />
        </MaterialUILink>
      </Box>
      <Box className={classes.logoContainer}>
        <MaterialUILink href="https://twitter.com/NinjasCode1" target="_blank">
          <Twitter style={{ marginTop: "32%" }} />
        </MaterialUILink>
      </Box>
      <Box className={classes.logoContainer}>
        <MaterialUILink
          href="https://www.linkedin.com/company/14512538"
          target="_blank"
        >
          <LinkedIn style={{ marginTop: "26%" }} />
        </MaterialUILink>
      </Box>
      <Box className={classes.logoContainer}>
        <MaterialUILink
          href="https://www.instagram.com/ninjascodeofficial/"
          target="_blank"
        >
          <Instagram style={{ marginTop: 6 }} />
        </MaterialUILink>
      </Box>
      <Box className={classes.logoContainer}>
        <MaterialUILink
          href="https://github.com/Ninjas-Code-official"
          target="_blank"
        >
          <GithubIcon style={{ width: 30, marginTop: 6 }} fill={"white"} />
        </MaterialUILink>
      </Box>
    </Box>
  )
}
