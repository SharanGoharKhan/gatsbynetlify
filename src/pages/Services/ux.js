import { Box, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import UXImage from "../../images/ux.svg"
import UXGroup from "../../images/ux-group.png"
import "./styles.css"
import "../../styles/styles.css"

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
          <Typography variant="h2" display="inline" className="brackets">
            {"{"}
            <Typography
              variant="h4"
              display="inline"
              className="typos-before"
              style={{
                top: "10vmin",
                right: "7.5vmin",
              }}
            >
              {" "}
              DESIGN
            </Typography>

            <Typography variant="h4" display="inline" className="typos-main">
              {" "}
              UI/UX DESIGN
            </Typography>

            {"}"}
          </Typography>
        </div>
        <Box style={{ textAlign: "center" }} mt={15} mb={15}>
          <img src={UXGroup} className="ux-image" alt="ux" />
        </Box>
      </div>
      <ContactUs />
    </Layout>
  )
}
