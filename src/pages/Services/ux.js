import { Box, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import UXImage from "../../images/ux.svg"
import UXGroup from "../../images/ux-group.png"
import "./styles.css"

export default function Ux() {
  return (
    <Layout>
      <Banner
        titleMain={"UI/UX"}
        titleSecondary={"RENDER"}
        subTitle={
          "We Create truly habit-forming products. With the beautiful look and UX in mind"
        }
        image={UXImage}
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
                right: "7.5vmin",
                WebkitTextStroke: "1px #179AFB",
                WebkitTextFillColor: "white",
                fontSize: "4vmin",
              }}
            >
              {" "}
              DESIGN
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800", fontSize: "5vmin" }}
            >
              {" "}
              UI/UX DESIGN
            </Typography>

            {"}"}
          </Typography>
        </div>
        <Box style={{ textAlign: "center" }} mt={15} mb={15}>
          <img src={UXGroup} className="ux-image" />
        </Box>
      </div>
      <ContactUs />
    </Layout>
  )
}
