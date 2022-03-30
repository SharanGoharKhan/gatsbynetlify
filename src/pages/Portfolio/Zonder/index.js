import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"
import React from "react"
import Layout from "../../../components/layout"
import Background from "../../../images/zonder-bg.png"
import Device1 from "../../../images/zonder-d1.png"
import Device2 from "../../../images/zonder-d2.png"
import ZigZag from "../../../images/zig-zag.png"
import Cycle from "../../../images/zonder-cycle.png"
import Board from "../../../images/board.png"

import "./styles.css"

export default function Zonder() {
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("sm"))
  const medium = useMediaQuery(theme.breakpoints.down("medium"))

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
      }}
      className="zonder-bg"
    >
      <Layout bar="transparent" font={"#fff"}>
        <Container className={"zonder-container"}>
          <Typography variant="h2" className="white-color font-bold title">
            zonder
          </Typography>
          <Typography variant="caption" className="white-color ">
            A digital travel companion that keeps track of <br />
            your experiences and rewards you for exploring <br /> new places
            around the world.
          </Typography>
          <Box
            className="zonder-image1-container"
            display={{ xs: "none", sm: "block" }}
          >
            <img src={Device1} alt="main" />
          </Box>
          <Box
            className="zonder-image2-container"
            display={{ xs: "none", md: "block" }}
          >
            <img src={Device2} alt="main" style={{ marginTop: 2 }} />
          </Box>
        </Container>
        <Box className="blue-container">
          <Box
            className="inner-blue"
            mt={20}
            display="flex"
            alignItems={"center"}
            flexDirection="column"
          >
            <img
              src={Cycle}
              alt={"cycle"}
              style={{ width: "500px", maxWidth: "100%" }}
            />
            <Box mt={2} style={{ width: "50%" }}>
              <Typography style={{ display: "inline" }} className="white-color">
                Don't just{" "}
                <Typography style={{ color: "#000", display: "inline" }}>
                  travel.
                </Typography>
              </Typography>
              <Typography className="font-bold">
                Explore{" "}
                <Typography
                  className="white-color"
                  style={{ display: "inline" }}
                >
                  the world with <br /> zonder
                </Typography>
              </Typography>
            </Box>
            <Box
              className="zig-zag"
              mt={10}
              display="flex"
              alignItems={"center"}
              flexDirection="column"
            >
              <img src={ZigZag} alt={"zigzag"} style={{ width: "60%" }} />
            </Box>

            <Box mt={20} className="board-container">
              <Divider
                style={{
                  backgroundColor: "#fff",
                  height: "40px",
                  width: "100%",
                }}
              />
              <img src={Board} alt={"board"} />
            </Box>
            <Box mt={20} mb={20}>
              <Typography variant="body2" align="center">
                COLORS WE USED
              </Typography>
              <Box className="colors-box">
                <Box
                  className="color-box"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <Typography variant="caption">#FFFFFF</Typography>
                </Box>
                <Box
                  className="color-box"
                  style={{ backgroundColor: "#3ACECC" }}
                >
                  <Typography variant="caption">#3ACECC</Typography>
                </Box>
                <Box
                  className="color-box"
                  style={{ backgroundColor: "#D75687" }}
                >
                  <Typography variant="caption">#D75687</Typography>
                </Box>
                <Box
                  className="color-box"
                  style={{ backgroundColor: "#52E389" }}
                >
                  <Typography variant="caption">#52E389</Typography>
                </Box>
                <Box
                  className="color-box"
                  style={{ backgroundColor: "#5F97E9" }}
                >
                  <Typography variant="caption">#5F97E9</Typography>
                </Box>
              </Box>
              <Typography variant="body2" align="center">
                TYPOGRAPHY
              </Typography>
              <Box mt={2}>
                <Grid
                  container
                  item
                  md={6}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Typography variant="h4">Segoe UI</Typography>
                </Grid>
                <Grid
                  container
                  item
                  md={9}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Typography variant="h4" className="font-bold">
                    Segoe UI
                  </Typography>
                </Grid>
                <Box mt={10} style={{ textAlign: "center" }}>
                  <button className="zonder-btn">
                    <Typography variant="caption">Visit Website</Typography>
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            backgroundColor: "white",
            height: "200px",
            marginTop: "-10rem",
          }}
        />
      </Layout>
    </div>
  )
}
