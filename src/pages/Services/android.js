import { Box, Grid, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import AndroidService from "../../images/android.svg"
import AndroidGroup from "../../images/android-group.png"
import "./styles.css"
import "../../styles/styles.css"

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
          <Typography variant="h2" display="inline" className="brackets">
            {"{"}
            <Typography variant="h4" display="inline" className="typos-before">
              {" "}
              AND
            </Typography>

            <Typography variant="h4" display="inline" className="typos-main">
              {" "}
              ANDROID DEVELOPEMENT
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              className="typos-after"
              style={{
                top: "0",
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
          <img src={AndroidGroup} className="android-image" />
        </Box>
      </div>
      <ContactUs />
    </Layout>
  )
}
