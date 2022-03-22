import { Box, Button, Grid, Typography, useMediaQuery } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import StartUpImage from "../../images/starups.svg"
import Mockup1 from "../../images/mockup1.png"
import Mockup2 from "../../images/mockup2.png"
import { useTheme } from "@mui/material/styles"

export default function Saas() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Layout>
      <Banner
        titleMain={"SOFTWARE FOR"}
        titleSecondary={"STARTUPS"}
        subTitle={
          "We help startups test their ideas fast and on budget - applying our analytics and techinal expertises"
        }
        image={StartUpImage}
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
              START
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800" }}
            >
              {" "}
              STARTUP SOLUTIONS
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              style={{
                fontWeight: "800",
                position: "absolute",
                top: 0,
                right: 50,
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              {" "}
              SOLU
            </Typography>

            {"}"}
          </Typography>
        </div>
        <Box mt={15} mb={15}>
          <Grid container alignItems="center" spacing={3}>
            <Grid
              item
              md={6}
              style={{
                display: "flex",
                justifyContent: matches ? "center" : "flex-end",
              }}
            >
              <img src={Mockup1} className="mockup-images" />
            </Grid>
            <Grid item md={4}>
              <Box style={{ textAlign: matches ? "center" : "start" }}>
                <Typography variant="body1" style={{ fontWeight: 900 }}>
                  ENATEGA SINGLE_VENDOR
                </Typography>
                <Typography variant="caption">
                  A Full Fledged Solution Highly Suitable To Build Any
                  Restaurant, Food Delivery App For IOS & Android With
                  Multi-Vendor Support Built Using React Native, Expo, GraphQL,
                  Apollo Client, Node & MongoDB. Easy To Build Apps Like
                  FoodPanda, UberEats, Swiggy, GrubHub, Deliveroo, JustEat,
                  DoorDash.
                </Typography>
                <br />
                <Button variant="contained" className="case-btn">
                  Case Study
                </Button>
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
              }}
            >
              <Box style={{ textAlign: matches ? "center" : "start" }}>
                <Typography variant="body1" style={{ fontWeight: 900 }}>
                  ENATEGA MULTI_VENDOR
                </Typography>
                <Typography variant="caption">
                  A full fledged solution highly suitable to build any
                  restaurant, food delivery app for iOS & Android with
                  Multi-Vendour built using React Native, Expo, GraphQL, Apollo
                  Client, Node & MongoDB. Easy to build apps like FoodPanda,
                  UberEats, Swiggy, GrubHub, Deliveroo, JustEat, DoorDash,Zomato
                </Typography>
                <br />
                <Button variant="contained" className="case-btn">
                  Case Study
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              style={{ textAlign: matches ? "center" : "start" }}
            >
              <img src={Mockup2} className="mockup-images" />
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
            <Button variant="contained" className="quote-btn">
              Case Study
            </Button>
          </Box>
        </Box>
      </div>
      <ContactUs />
    </Layout>
  )
}
