import { hot } from "react-hot-loader"
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import IOSService from "../../images/ios.png"
import "./styles.css"
import { useTheme } from "@mui/material/styles"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

function Ios() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <>
      <Seo
        title="iOS Development Services"
        description="Crafting Exceptional iOS Apps for Your Business"
      />
      <Layout>
        <Banner
          titleMain={"iOS Development Services"}
          titleSecondary={"Crafting Exceptional iOS Apps for Your Business"}
          subTitle={
            "Our iOS development services focus on delivering cutting-edge, user-centric apps designed to enhance your business's mobile presence. By harnessing the power of Swift and Objective-C, our experienced developers create seamless, feature-rich, and intuitive applications tailored to your target audience. We prioritize performance, security, and usability, ensuring your iOS app delivers a consistent and enjoyable user experience across all Apple devices. From concept to deployment on the App Store, we work closely with you to transform your vision into a high-quality iOS app that drives growth and customer engagement."
          }
          image={IOSService}
        />
        <div style={{ position: "relative" }}>
          <BottomServices />
          <Typos second="IOS DEVELOPEMENT " />

          <Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Box className="left-content">
                  <Box>
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: 700,
                        textAlign: matches ? "start" : "center",
                      }}
                    >
                      Project Examination
                    </Typography>
                    <Typography
                      variant="caption"
                      className="subheading-ios"
                      style={{
                        textAlign: matches ? "justify" : "center",
                        marginRight: 10,
                      }}
                    >
                      True experts will never get to code right from the
                      beginning — any app needs a coherent outline on how to
                      move forward. In order to set objectives for the project
                      management roadmap, we gather and analyze project
                      requirements. This helps us get a clear understanding of
                      future work and consider all potential goings-on.
                    </Typography>
                  </Box>
                  <StaticImage
                    src="../../images/Device1.png"
                    quality={40}
                    alt="d1"
                    className={matches ? "small-device-image" : "device-image"}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box mt={2} />
            <Grid container>
              <Grid item md={6}></Grid>
              <Grid item md={6}>
                <Box className="left-content">
                  <StaticImage
                    src="../../images/Device2.png"
                    quality={40}
                    alt="d1"
                    className={matches ? "small-device-image" : "device-image"}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: 700,
                        textAlign: matches ? "start" : "center",
                        marginLeft: 10,
                      }}
                    >
                      Feature Prioritization
                    </Typography>
                    <Typography
                      variant="caption"
                      className="subheading-ios"
                      style={{
                        textAlign: matches ? "justify" : "center",
                        marginLeft: 10,
                      }}
                    >
                      By putting aside all non-functional extras, we help a
                      client get a better vision of a future product. Our
                      managers use the MoSCoW method and plan a vital set of
                      features. Thus, dispose of features users are not
                      interested in and reduce the cost.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box mt={2} />

            <Grid container>
              <Grid item md={6}>
                <Box className="left-content">
                  <Box>
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: 700,
                        textAlign: matches ? "start" : "center",
                      }}
                    >
                      Focused UI/UX design
                    </Typography>
                    <Typography
                      variant="caption"
                      className="subheading-ios"
                      style={{
                        textAlign: matches ? "justify" : "center",
                        marginRight: 10,
                      }}
                    >
                      We create wireframes and build low and high-fidelity
                      prototypes screen by screen. If the client wants to get a
                      universal interface — we’ll deal with it, if the client
                      wants to have two custom versions for iOS and Android —
                      it’s always possible to implement the specific elements of
                      each operating system.
                    </Typography>
                  </Box>
                  <StaticImage
                    src="../../images/Device1.png"
                    quality={40}
                    alt="d1"
                    className={matches ? "small-device-image" : "device-image"}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box mt={2} />

            <Grid container>
              <Grid item md={6}></Grid>
              <Grid item md={6}>
                <Box className="left-content">
                  <StaticImage
                    src="../../images/Device2.png"
                    quality={40}
                    alt="d1"
                    className={matches ? "small-device-image" : "device-image"}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: 700,
                        textAlign: matches ? "start" : "center",
                        marginLeft: 10,
                      }}
                    >
                      Qualified Development
                    </Typography>
                    <Typography
                      variant="caption"
                      className="subheading-ios"
                      style={{
                        textAlign: matches ? "justify" : "center",
                        marginLeft: 10,
                      }}
                    >
                      According to Scrum, we split the development process into
                      sprints — it allows us to present intermediate builds to a
                      client, therefore keep them in the loop. We use TestFlight
                      and Google Play beta releases, which makes it possible to
                      test a product on real devices.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box mt={2} />

            <Grid container>
              <Grid item md={6}>
                <Box className="left-content">
                  <Box>
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: 700,
                        textAlign: matches ? "start" : "center",
                        marginRight: 10,
                      }}
                    >
                      QA testing
                    </Typography>
                    <Typography
                      variant="caption"
                      className="subheading-ios"
                      style={{
                        textAlign: matches ? "justify" : "center",
                        marginRight: 10,
                      }}
                    >
                      We use quality control and management system to deliver
                      high-quality products. Combining manual testing and
                      automated testing technologies (RSpec, Capybara), we cover
                      a wide range of conditions and scenarios, so a client
                      could be sure a product won’t have any flyings out of
                      control.
                    </Typography>
                  </Box>
                  <StaticImage
                    src="../../images/Device1.png"
                    quality={40}
                    alt="d1"
                    className={matches ? "small-device-image" : "device-image"}
                  />
                </Box>
              </Grid>
            </Grid>
            <Box mt={2} />

            <Grid container>
              <Grid item md={6}></Grid>
              <Grid item md={6}>
                <Box className="left-content">
                  <StaticImage
                    src="../../images/Device2.png"
                    quality={40}
                    alt="d1"
                    className={matches ? "small-device-image" : "device-image"}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: 700,
                        textAlign: matches ? "start" : "center",
                        marginLeft: 10,
                      }}
                    >
                      Release and Maintenance
                    </Typography>
                    <Typography
                      variant="caption"
                      className="subheading-ios"
                      style={{
                        textAlign: matches ? "justify" : "center",
                        marginLeft: 10,
                      }}
                    >
                      We ensure mobile apps that we work on are accepted and
                      published in the App Store and Google Play. To make sure
                      all bugs are fixed and the product steadily works, we
                      provide post-launch support and further scale-up if
                      needed.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default hot(module)(Ios)
