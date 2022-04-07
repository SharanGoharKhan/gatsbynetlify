import { Box, useMediaQuery, useTheme } from "@material-ui/core"
import React, { useEffect } from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import AndroidService from "../../images/android.svg"
import AndroidGroup from "../../images/android-group.png"
import "./styles.css"
import "../../utils/styles/styles.css"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Android() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("md"))
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
        <Box
          style={{
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src={AndroidGroup}
            className={small ? "android-image-small" : "android-image"}
            alt="android"
          />
        </Box>
      </div>
    </Layout>
  )
}
