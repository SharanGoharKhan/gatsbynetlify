import { Box, Typography, useMediaQuery } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import DesktopService from "../../images/desktop-banner.svg"
import DesktopGroup from "../../images/desktop-group.png"
import { useTheme } from "@mui/material/styles"
import "../../utils/styles/styles.css"
import "./styles.css"

export default function Web() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Layout>
      <Banner
        titleMain={"DESKTOP APP"}
        titleSecondary={"DEVELOPEMENT"}
        subTitle={
          "We get the best out of this framework to build desktop apps that boost user retention"
        }
        image={DesktopService}
      />
      <div style={{ position: "relative" }}>
        <BottomServices />
        <Typos first="DESK" second="DESKTOP APP DEVELOPMENT" third="MEN" />
        <Box
          style={{
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src={DesktopGroup}
            alt="desktop"
            className={matches ? "small-desktop-image" : "desktop-image"}
          />
          <Box mt={5}>
            <Typography
              variant="h5"
              style={{ fontSize: "1.75rem", fontWeight: 900 }}
            >
              Cross Platform Softwares
            </Typography>
            <Typography
              style={{
                color: "gray",
                fontSize: "0.8rem",
                width: "400px",
                margin: "auto",
              }}
              align="center"
            >
              The tedious part of building desktop apps is to make sure that
              they will run on all major operating systems. With React, there’s
              no need to overpay for different app versions. You can build one
              that runs everywhere!
            </Typography>
          </Box>
        </Box>
      </div>
    </Layout>
  )
}
