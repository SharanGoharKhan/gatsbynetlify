import { hot } from "react-hot-loader"
import { Box, useMediaQuery, useTheme } from "@material-ui/core"
import React, { useEffect } from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import AndroidService from "../../images/android.svg"
import AndroidGroup from "../../images/android-group.png"
import "./styles.css"
import Aos from "aos"
import "aos/dist/aos.css"

function Android() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Layout>
      <Banner
        titleMain={"Android Development Services"}
        titleSecondary={"Creating Engaging Android Apps Tailored to Your Needs"}
        subTitle={
          "Our Android development services are dedicated to building feature-rich, high-performance apps that cater to the diverse needs of your business and user base. Leveraging the power of Kotlin and Java, our expert developers craft scalable, user-friendly applications that provide a seamless experience across a wide range of Android devices. We emphasize security, performance, and adaptability, ensuring your Android app stays ahead of the curve in the ever-evolving mobile landscape. From ideation to deployment on Google Play, we collaborate closely with you to bring your vision to life with a top-notch Android app that drives growth and customer engagement."
        }
        image={AndroidService}
      />
      <div style={{ position: "relative" }}>
        <BottomServices />
        <Typos second="ANDROID DEVELOPEMENT " />
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

export default hot(module)(Android)
