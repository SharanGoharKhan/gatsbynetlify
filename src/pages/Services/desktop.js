import { Box, Typography, Icon, useMediaQuery } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import DesktopService from "../../images/desktop-banner.svg"
import DesktopGroup from "../../images/desktop-group.png"
import { useTheme } from "@mui/material/styles"
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
          <Typography
            variant="h2"
            display="inline"
            style={{
              color: "#179AFB",
              fontWeight: "900",
              position: "relative",
              fontSize: "10vmin",
            }}
          >
            {"{"}
            <Typography
              variant="h4"
              display="inline"
              style={{
                color: "#000",
                fontWeight: "800",
                position: "absolute",
                top: "10vmin",
                left: "5.5vmin",
                WebkitTextStroke: "1px #179AFB",
                WebkitTextFillColor: "white",
                fontSize: "4vmin",
              }}
            >
              {" "}
              DESK
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800", fontSize: "5vmin" }}
            >
              {" "}
              DEKSTOP APP DEVELOPEMENT
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              style={{
                fontWeight: "800",
                position: "absolute",
                top: "0vmin",
                right: "9vmin",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
                fontSize: "4vmin",
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
            className={matches ? "small-desktop-image" : "desktop-image"}
          />
        </Box>
      </div>
      <ContactUs />
    </Layout>
  )
}
