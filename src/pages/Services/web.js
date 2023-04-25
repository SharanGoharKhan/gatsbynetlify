import { hot } from "react-hot-loader"
import { Box, useMediaQuery } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import WebService from "../../images/web-banner.svg"
import WebGroup from "../../images/group-web.png"
import { useTheme } from "@mui/material/styles"
import "./styles.css"
import Seo from "../../components/seo"

function Web() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <>
      <Seo title="Web Development Services" />
      <Layout>
        <Banner
          titleMain={"Web Development Services"}
          titleSecondary={
            "Building Impactful Digital Experiences for Your Business"
          }
          subTitle={
            "Our web development services are focused on creating stunning, high-performance websites and web applications that elevate your business's online presence. Our skilled team of developers uses a diverse range of modern technologies, including HTML, CSS, JavaScript, and popular frameworks such as React, Angular, and Vue.js. We prioritize responsiveness, accessibility, and security, ensuring your website delivers a seamless user experience across all devices and browsers. From custom e-commerce platforms to content-rich corporate websites, we collaborate with you throughout the development process to create tailored web solutions that effectively drive user engagement and business growth."
          }
          image={WebService}
        />
        <div style={{ position: "relative" }}>
          <BottomServices />
          <Typos second="DEVELOPEMENT PROCESS " top="0vmin" right="17.5vmin" />

          <Box
            style={{
              textAlign: "center",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <img
              src={WebGroup}
              className={matches ? "web-image-small" : "web-image"}
              alt="web"
            />
          </Box>
        </div>
      </Layout>
    </>
  )
}

export default hot(module)(Web)
