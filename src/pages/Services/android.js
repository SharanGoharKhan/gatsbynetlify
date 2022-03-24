import { Box, Grid, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import AndroidService from "../../images/android.svg"
import AndroidGroup from "../../images/android-group.png"
import "./styles.css"
export default function Android() {
  return (
    <Layout>
      <Banner
        titleMain={"ANDROID"}
        titleSecondary={"DEVELOPEMENT"}
        subTitle={
          "We develop beautiful Android apps with UX as a primary focus"
        }
        image={AndroidService}
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
              AND
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800", fontSize: "5vmin" }}
            >
              {" "}
              ANDROID DEVELOPEMENT
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              style={{
                fontWeight: "800",
                position: "absolute",
                top: "0",
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
          <img src={AndroidGroup} className="android-image" />
        </Box>
      </div>
      <ContactUs />
    </Layout>
  )
}
