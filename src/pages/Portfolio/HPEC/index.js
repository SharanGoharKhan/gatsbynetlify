import { Box, Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import { ContactUs } from "../../../components"
import Layout from "../../../components/layout"
import "./styles.css"
import Circle from "../../../images/circle.svg"
import Main from "../../../images/hpec-main.svg"
import Fade from "../../../images/fade.svg"
import WhiteBlock from "../../../images/white-block.svg"
import Ladder from "../../../images/ladder.png"
import CircleGroup from "../../../images/circle-group.png"
import PurpleBlock from "../../../images/purple-block.svg"

export default function Hpec() {
  return (
    <Layout bar={"#200E34"} font={"#fff"}>
      <div className="hpec-background">
        <Container>
          <Grid container>
            <Grid item xs={6}>
              <Box style={{ marginTop: 20 }}>
                <Typography variant="h3" className="main-text">
                  HPEC
                </Typography>
                <Typography variant="h5" className="secondary-text">
                  Physicians
                </Typography>
                <Typography variant="body2" className="caption-text">
                  We make it easy for physicians to lead the future of patient
                  care
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img src={Circle} alt="cirlce" className="outer-image" />
              <img src={Main} alt="main" className="inner-image" />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="hpec-background-low">
        <Grid container alignItems="center">
          <Grid item md={6}>
            <Box style={{ position: "relative" }}>
              <img src={WhiteBlock} alt="white-block" />
              <Typography variant="h1" className="question-mark">
                ?
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Grid
              container
              item
              xs={10}
              direction="column"
              justifyContent="center"
            >
              <Typography variant="h6" style={{ color: "white" }}>
                The Problem
              </Typography>
              <Typography variant="body1" className="comments">
                USERS SAY:
              </Typography>
              <Typography variant="body1" className="comments">
                {"{ I need a doctor so privately }"} <br />- 25 y/o
              </Typography>
              <Typography variant="body1" className="comments">
                {"{ Always should search for groups of good physicians }"}{" "}
                <br />- 34 y/o
              </Typography>
              <Typography variant="body1" className="comments">
                {"{ I can visit a hospital I can't travel }"} <br />- 55 y/o
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="hpec-background-lower">
        <img src={Ladder} alt="ladder" style={{ width: "65%" }} />
        <img src={CircleGroup} alt="circle" className="circle-group" />
        <Typography variant="h1" className="p">
          P
        </Typography>
      </div>
      <div className="font-container">
        <img src={PurpleBlock} alt="circle" className="purple-block" />
        <Typography variant="h1" className="c">
          C
        </Typography>
        <Box className="text-container">
          <>
            <Typography
              variant="body2"
              style={{ display: "inline", color: "#3348b4", fontWeight: 800 }}
            >
              Typography
            </Typography>
            <Typography
              variant="body2"
              style={{ display: "inline", fontWeight: 800 }}
            >
              {" "}
              & Colors
            </Typography>
          </>
        </Box>
        <Box className="poppins-container">
          <Box style={{ display: "flex", alignItems: "center" }}>
            <>
              <Typography
                variant="h2"
                style={{ display: "inline", fontWeight: 800 }}
                mr={5}
              >
                POPPINS
              </Typography>
              <Typography variant="body2" style={{ display: "inline" }}>
                {" "}
                BOLD
              </Typography>
            </>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "5rem",
            }}
          >
            <>
              <Typography variant="body2" style={{ display: "inline" }} mr={5}>
                Regular
              </Typography>
              <Typography
                variant="h2"
                style={{ display: "inline", fontWeight: 800, color: "#3348b4" }}
              >
                {" "}
                POPPINS
              </Typography>
            </>
          </Box>
        </Box>
        <Box className="color-container">
          <Box>
            <Typography variant="h4" style={{ fontWeight: 100 }}>
              Color Pallete
            </Typography>
          </Box>
          <Box className="color"></Box>
          <Box className="color"></Box>
          <Box className="color"></Box>
        </Box>
      </div>

      <ContactUs />
    </Layout>
  )
}
