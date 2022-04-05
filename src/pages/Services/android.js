import { Box, Typography } from "@material-ui/core"
import React, { useEffect } from "react"
import { Banner, BottomServices, ContactUs, Typos } from "../../components"
import Layout from "../../components/layout"
import AndroidService from "../../images/android.svg"
import AndroidGroup from "../../images/android-group.png"
import "./styles.css"
import "../../styles/styles.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Android() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])

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
        <Typos first="AND" second="ANDROID DEVELOPEMENT" third="MEN" />
        <Box style={{ textAlign: "center" }} mt={15} mb={15}>
          <img src={AndroidGroup} className="android-image" alt="android" />
        </Box>
      </div>
    </Layout>
  )
}
