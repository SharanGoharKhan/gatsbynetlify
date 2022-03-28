import { Box, Typography, useMediaQuery } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import DesktopService from "../../images/desktop-banner.svg"
import DesktopGroup from "../../images/desktop-group.png"
import { useTheme } from "@mui/material/styles"
import "../../styles/styles.css"
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
        <div className="typos">
          <Typography variant="h2" display="inline" className="brackets">
            {"{"}
            <Typography variant="h4" display="inline" className="typos-before">
              {" "}
              DESK
            </Typography>

            <Typography variant="h4" display="inline" className="typos-main">
              {" "}
              DEKSTOP APP DEVELOPEMENT
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              className="typos-after"
              style={{
                top: "0vmin",
                right: "9vmin",
              }}
            >
              {" "}
              MEN
            </Typography>
            {"}"}
          </Typography>
        </div>
        <Box style={{ textAlign: "center" }} mt={15} mb={15}>
          <img
            src={DesktopGroup}
            alt="desktop"
            className={matches ? "small-desktop-image" : "desktop-image"}
          />
        </Box>
      </div>
      <ContactUs />
    </Layout>
  )
}
