import { Box, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import WebService from "../../images/web-banner.svg"
import WebGroup from "../../images/group-web.png"

export default function Web() {
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
              DEV
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800" }}
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
                top: 0,
                right: 50,
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              {" "}
              PRO
            </Typography>
            {"}"}
          </Typography>
        </div>
        <Box style={{ textAlign: "center" }} mt={15} mb={15}>
          <img src={WebGroup} className="web-image" />
        </Box>
      </div>
      <ContactUs />
    </Layout>
  )
}
