import { hot } from "react-hot-loader"
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import StartUpImage from "../../images/starups.webp"
import { StaticImage } from "gatsby-plugin-image"
import { useTheme } from "@mui/material/styles"
import { Link } from "gatsby"
import "./styles.css"
import Seo from "../../components/seo"

function Saas() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <>
      <Seo
        title="Startup Solutions"
        description="Accelerating Your Startup's Success with Tailored Tech Services"
      />
      <Layout>
        <Banner
          titleMain={"Startup Solutions"}
          titleSecondary={
            "Accelerating Your Startup's Success with Tailored Tech Services"
          }
          subTitle={
            "Our startup solutions are designed to empower emerging businesses with the technology and tools they need to succeed in a competitive landscape. We work closely with you to understand your unique challenges, goals, and vision, creating tailored strategies that align with your startup's objectives. Our comprehensive range of services, from web and mobile app development to UI/UX design and cloud computing, ensures your startup is equipped with cutting-edge solutions that drive growth and user engagement. We also provide expert guidance on technology selection, product development, and scaling strategies, supporting your startup through every stage of its journey. With our dedicated startup solutions, we help turn your innovative ideas into thriving businesses."
          }
          image={StartUpImage}
        />
        <div style={{ position: "relative" }}>
          <BottomServices />
          <Typos second="STARTUP SOLUTIONS " top="0vmin" right="19.5vmin" />

          <Box style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <Grid container alignItems="center" spacing={3}>
              <Grid
                item
                md={6}
                style={{
                  display: "flex",
                  justifyContent: matches ? "center" : "flex-end",
                }}
              >
                <StaticImage src="../../images/mockup1.png" quality={40} className="mockup-images" alt="mockup" />
              </Grid>
              <Grid item md={4}>
                <Box style={{ textAlign: matches ? "center" : "start" }}>
                  <Typography variant="body1" style={{ fontWeight: 900 }}>
                    ENATEGA SINGLE_VENDOR
                  </Typography>
                  <Typography variant="caption">
                    A Full Fledged Solution Highly Suitable To Build Any
                    Restaurant, Food Delivery App For IOS & Android With
                    Multi-Vendor Support Built Using React Native, Expo,
                    GraphQL, Apollo Client, Node & MongoDB. Easy To Build Apps
                    Like FoodPanda, UberEats, Swiggy, GrubHub, Deliveroo,
                    JustEat, DoorDash.
                  </Typography>
                  <br />
                </Box>
              </Grid>
            </Grid>
            <Grid container alignItems="center" spacing={3}>
              <Grid item xs={0} md={2}></Grid>
              <Grid
                item
                md={4}
                style={{
                  display: "flex",
                  justifyContent: matches ? "center" : "flex-end",
                  order: matches && 2,
                }}
              >
                <Box style={{ textAlign: matches ? "center" : "start" }}>
                  <Typography variant="body1" style={{ fontWeight: 900 }}>
                    ENATEGA MULTI_VENDOR
                  </Typography>
                  <Typography variant="caption">
                    A full fledged solution highly suitable to build any
                    restaurant, food delivery app for iOS & Android with
                    Multi-Vendour built using React Native, Expo, GraphQL,
                    Apollo Client, Node & MongoDB. Easy to build apps like
                    FoodPanda, UberEats, Swiggy, GrubHub, Deliveroo, JustEat,
                    DoorDash,Zomato
                  </Typography>
                  <br />
                  <Link to="/Enatega" style={{ textDecoration: "none" }}>
                    <Button variant="contained" id="case-btn">
                      Case Study
                    </Button>
                  </Link>
                </Box>
              </Grid>
              <Grid
                item
                md={6}
                style={{
                  textAlign: matches ? "center" : "start",
                  order: matches && 1,
                }}
              >
                <StaticImage src="../../images/mockup2.png" quality={40} className="mockup-images" alt="mockup" />
              </Grid>
            </Grid>
            <Box
              mt={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h6"
                style={{ fontWeight: 900, textAlign: "center" }}
              >
                Have an idea to implement
                <br />
                or
                <br />
                want a ready-made solution
              </Typography>
              <Button variant="contained" id="quote-btn" href="/#contact">
                Get Quote
              </Button>
            </Box>
          </Box>
        </div>
      </Layout>
    </>
  )
}

export default hot(module)(Saas)
