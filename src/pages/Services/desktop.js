import { hot } from "react-hot-loader"
import { Box, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import DesktopService from "../../images/desktop-banner.webp"
import { StaticImage } from "gatsby-plugin-image"
import { useTheme } from "@mui/material/styles"
import "./styles.css"
import Seo from "../../components/seo"

function Web() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <>
      <Seo
        title="Desktop App Development Services"
        description="Delivering Powerful and User-Friendly Desktop Solutions"
      />
      <Layout>
        <Banner
          titleMain={"Desktop App Development Services"}
          titleSecondary={
            "Delivering Powerful and User-Friendly Desktop Solutions"
          }
          subTitle={
            "Our desktop app development services focus on creating robust, feature-rich applications that enhance productivity and streamline business processes for your organization. Our experienced team of developers leverages a diverse set of technologies and frameworks, such as Electron, .NET, and Java, to build cross-platform desktop applications tailored to your unique requirements. We prioritize performance, usability, and security, ensuring your desktop app offers a seamless and efficient user experience on Windows, macOS, and Linux platforms. From initial concept to deployment and ongoing support, we work closely with you to develop custom desktop solutions that drive success and boost operational efficiency."
          }
          image={DesktopService}
        />
        <div style={{ position: "relative" }}>
          <BottomServices />
          <Typos second="DESKTOP APP DEVELOPMENT" />
          <Box
            style={{
              textAlign: "center",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <StaticImage
              src="../../images/desktop-group.png"
              quality={40}
              alt="desktop"
              className={matches ? "small-desktop-image" : "desktop-image"}
            />
            <Box mt={5}>
              <Typography
                variant="h5"
                style={{ fontSize: "1.75rem", fontWeight: 900 }}
              >
                Cross Platform Softwares
              </Typography>
              <Typography
                style={{
                  color: "gray",
                  fontSize: "0.8rem",
                  width: "400px",
                  margin: "auto",
                }}
                align="center"
              >
                The tedious part of building desktop apps is to make sure that
                they will run on all major operating systems. With React,
                there’s no need to overpay for different app versions. You can
                build one that runs everywhere!
              </Typography>
            </Box>
          </Box>
        </div>
      </Layout>
    </>
  )
}

export default hot(module)(Web)
