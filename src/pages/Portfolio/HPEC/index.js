import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import React from "react"
import Layout from "../../../components/layout"
import "./styles.css"
import Circle from "../../../images/circle.svg"
import Main from "../../../images/hpec-main.png"
import WhiteBlock from "../../../images/white-block.svg"
import Ladder from "../../../images/ladder.png"
import CircleGroup from "../../../images/circle-group.png"
import PurpleBlock from "../../../images/purple-block.svg"
import Flow from "../../../images/flow.png"
import Mobile1 from "../../../images/mobile1.svg"
import Mobile2 from "../../../images/mobile2.svg"
import Mobile4 from "../../../images/mobile4.svg"
import Mobile6 from "../../../images/mobile6.svg"
import Mobile7 from "../../../images/mobile7.svg"
import Mobile8 from "../../../images/mobile8.svg"
import { useAnimation } from "../../../utils/useAnimation"
import { colors } from "../../../utils/colors"
import Blur from "../../../images/blur.png"

export default function Hpec() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  useAnimation()

  return (
    <Layout bar={"#200E34"} font={colors.white}>
      <div className="hpec-background">
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
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
            <Grid item xs={12} md={6}>
              <Box style={{ position: "relative", left: 0, top: 0 }}>
                <img
                  src={Circle}
                  alt="cirlce"
                  className={matches ? "outer-image-small" : "outer-image"}
                  data-aos="flip-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="800"
                />
                <img
                  src={Blur}
                  alt="blur"
                  style={{ width: "100%", height: "100%" }}
                  className={matches ? "inner-image-small" : "inner-image"}
                  data-aos="flip-left"
                  data-aos-easing="ease-in-sine"
                />
                <img
                  src={Main}
                  alt="main"
                  className={matches ? "inner-image-small" : "inner-image"}
                  data-aos="flip-right"
                  data-aos-easing="ease-in-sine"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        className={
          matches ? "hpec-background-low-small" : "hpec-background-low"
        }
      >
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Box
              style={{ position: "relative" }}
              data-aos="slide-right"
              data-aos-easing="ease-in-sine"
            >
              <img src={WhiteBlock} alt="white-block" />
              <Typography
                variant="h1"
                className={matches ? "question-mark-small" : "question-mark"}
              >
                ?
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
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
      <div
        className="hpec-background-lower"
        style={{ padding: matches && "1rem" }}
      >
        <img
          src={Ladder}
          alt="ladder"
          style={{ width: matches ? "100%" : "65%" }}
        />
        <img
          src={CircleGroup}
          alt="circle"
          className={matches ? "circle-group-small" : "circle-group"}
          data-aos="slide-left"
          data-aos-easing="ease-in-sine"
        />
        <Typography variant="h1" className="p">
          P
        </Typography>
      </div>
      <div className="font-container">
        <img
          src={PurpleBlock}
          alt="circle"
          className="purple-block"
          data-aos="slide-right"
          data-aos-easing="ease-in-sine"
          style={{ display: matches ? "none" : "inline-block" }}
        />
        <Typography
          variant="h1"
          className="c"
          data-aos="slide-left"
          data-aos-easing="ease-in-sine"
        >
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
        <Box
          className="poppins-container"
          style={{ marginLeft: matches ? 0 : "10rem" }}
        >
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
          <Box ml={2} mr={4}>
            <Typography
              variant="h3"
              style={{ fontWeight: 100, fontSize: "3vmin" }}
            >
              Color Pallete
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            mr={5}
          >
            <Box
              className={matches ? "color-small" : "color"}
              style={{ backgroundColor: colors.white }}
            ></Box>
            <Typography variant="body1" align="center">
              #FFFFFF
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            mr={5}
          >
            <Box
              className={matches ? "color-small" : "color"}
              style={{ backgroundColor: "#E1e1e1" }}
            ></Box>
            <Typography
              variant="body1"
              style={{ color: "#e1e1e1" }}
              align="center"
            >
              #E1E1E1
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"center"}
            mr={5}
          >
            <Box
              className={matches ? "color-small" : "color"}
              style={{ backgroundColor: "#7e7dff" }}
            ></Box>
            <Typography
              variant="body1"
              style={{ color: "#737dff" }}
              align="center"
            >
              #7E7DFF
            </Typography>
          </Box>
        </Box>
      </div>

      <div className={matches ? "device-container-small" : "device-container"}>
        <img
          src={Mobile1}
          alt="mobile"
          style={{ top: "2em", left: matches ? "2em" : "4em" }}
          data-aos="fade"
          data-aos-easing="ease-in-sine"
        />
        <img
          src={Mobile2}
          alt="mobile"
          style={{ top: "4em", left: matches ? "15em" : "20em" }}
          data-aos="fade"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        />
        <img
          src={Mobile4}
          alt="mobile"
          style={{
            top: matches ? "22em" : "0em",
            left: matches ? "15em" : "40em",
          }}
          data-aos="fade"
          data-aos-easing="ease-in-sine"
          data-aos-delay="350"
        />
        <img
          src={Mobile8}
          alt="mobile"
          style={{
            top: matches ? "30em" : "25em",
            left: matches ? "2em" : "40em",
          }}
          data-aos="fade"
          data-aos-easing="ease-in-sine"
          data-aos-delay="400"
        />
        <img
          src={Mobile2}
          alt="mobile"
          style={{
            top: "30em",
            left: "60em",
            display: matches ? "none" : "inline-block",
          }}
          data-aos="fade"
          data-aos-easing="ease-in-sine"
          data-aos-delay="450"
        />
        <img
          src={Mobile4}
          alt="mobile"
          style={{
            top: "20em",
            left: "75em",
            display: matches ? "none" : "inline-block",
          }}
          data-aos="fade"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
        />
        <img
          src={Mobile7}
          alt="mobile"
          style={{
            top: "50em",
            left: "40em",
            display: matches ? "none" : "inline-block",
          }}
          data-aos="fade"
          data-aos-easing="ease-in-sine"
          data-aos-delay="550"
        />
        <img
          src={Mobile6}
          alt="mobile"
          style={{
            top: matches ? "50em" : "55em",
            left: matches ? "2em" : "4em",
          }}
          data-aos="fade"
          data-aos-easing="ease-in-sine"
          data-aos-delay="600"
        />
        <img
          src={Mobile8}
          alt="mobile"
          style={{
            top: matches ? "50em" : "60em",
            left: matches ? "15em" : "20em",
          }}
          data-aos="fade"
          data-aos-easing="ease-in-sine"
        />

        <Box className="white-bg"></Box>
        <Box className={matches ? "blue-bg-small" : "blue-bg"}>
          <Grid
            container
            className={matches ? "grid-container-small" : "grid-container"}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
            <Box className="button-container">
              <img src={Flow} alt="flow" />

              <Box
                style={{ textAlign: "center", border: "none" }}
                mb={3}
                mt={3}
              >
                <Button
                  disableRipple
                  target="_blank"
                  className="hpec-btn"
                  href="https://www.hpec.io/"
                >
                  Visit Webiste
                </Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </div>
    </Layout>
  )
}
