import { Box, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import UXImage from "../../images/ux.svg"
import UXGroup from "../../images/ux-group.png"

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
              DESIGN
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800" }}
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
