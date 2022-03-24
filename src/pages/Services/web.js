import { Box, Typography, useMediaQuery } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import WebService from "../../images/web-banner.svg"
import WebGroup from "../../images/group-web.png"
import { useTheme } from "@mui/material/styles"
import "./styles.css"

export default function Web() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Layout>
      <Banner
        titleMain={"WEB"}
        titleSecondary={"DEVELOPEMENT"}
        subTitle={
          "Create responsive and multi-purpose web solutions. With stunning design and amazing performance level."
        }
        image={WebService}
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
              DEV
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800", fontSize: "5vmin" }}
            >
              {" "}
              DEVELOPEMENT PROCESS
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              style={{
                fontWeight: "800",
                position: "absolute",
                top: "0vmin",
                right: "19.5vmin",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
                fontSize: "4vmin",
              }}
            >
              {" "}
              PRO
            </Typography>
            {"}"}
          </Typography>
        </div>
        <Box style={{ textAlign: "center" }} mt={15} mb={15}>
          <img
            src={WebGroup}
            className={matches ? "web-image-small" : "web-image"}
          />
        </Box>
      </div>
      <ContactUs />
    </Layout>
  )
}
