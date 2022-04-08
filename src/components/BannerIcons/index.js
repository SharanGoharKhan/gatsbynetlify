import React from "react"
import { Box, Link as MaterialUILink } from "@material-ui/core"
import Facebook from "../../svg/facebook"
import Twitter from "../../svg/twitter"
import LinkedIn from "../../svg/linkedin"
import useStyles from "./styles"
import Instagram from "../../svg/instagram"

export default function BannerIcons() {
  const classes = useStyles()
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
          href="https://www.instagram.com/ninjas.code/"
          target="_blank"
        >
          <Instagram style={{ marginTop: 6 }} />
        </MaterialUILink>
      </Box>
    </Box>
  )
}
