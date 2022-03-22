import { Box, Typography, Icon, useMediaQuery } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import DesktopService from "../../images/desktop-banner.svg"
import DesktopGroup from "../../images/desktop-group.png"
import { useTheme } from "@mui/material/styles"

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
        <div
          className="typos"
          style={{
            width: "100%",
            textAlign: "center",
            padding: 20,
            marginTop: 20,
          }}
        >
          <Typography
            variant="h2"
            display="inline"
            style={{
              color: "#179AFB",
              fontWeight: "900",
              position: "relative",
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
                top: 70,
                left: 40,
                WebkitTextStroke: "1px #179AFB",
                WebkitTextFillColor: "white",
              }}
            >
              {" "}
              DESK
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800" }}
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
                top: 0,
                right: 50,
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
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
