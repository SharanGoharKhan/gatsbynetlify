import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core"
import React from "react"
import Layout from "../../../components/layout"
import Background from "../../../images/zonder-bg.png"
import Device1 from "../../../images/zonder-d1.png"
import Device2 from "../../../images/zonder-d2.png"
import ZigZag from "../../../images/zig-zag.png"
import Cycle from "../../../images/zonder-cycle.png"
import Board from "../../../images/board.png"
import Mobiles from "../../../images/mobiles-zonder.png"
import AddIcon from "@mui/icons-material/Add"
import PersonIcon from "@mui/icons-material/Person"
import "./styles.css"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import ScreenShareIcon from "@mui/icons-material/ScreenShare"

export default function Zonder() {
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
      }}
      className="zonder-bg"
    >
      <Layout bar="transparent" font={"#fff"} mobileGradient={"#5beccc"}>
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
              style={{ width: "600px", maxWidth: "100%" }}
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
              <img src={ZigZag} alt={"zigzag"} style={{ width: "65%" }} />
            </Box>
            <Box mt={small ? 5 : 20} className="board-container">
              <Divider
                style={{
                  backgroundColor: "#fff",
                  height: "40px",
                  width: "100%",
                }}
              />
              <img
                src={Board}
                alt={"board"}
                style={{ width: small && "80%", height: small && "200px" }}
              />
            </Box>
            <Box mt={10} className="icons">
              <Box
                style={{ margin: "auto", width: "40%" }}
                display="flex"
                alignItems={"center"}
                justifyContent="space-around"
              >
                <AddIcon style={{ fontSize: 60 }} />
                <Box
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <PersonIcon />
                  <Typography className="white-color font-bold" align="center">
                    Build your travel <br />
                    profile
                  </Typography>
                </Box>
                <AddIcon style={{ fontSize: 60 }} />
              </Box>
              <Box
                display={"flex"}
                justifyContent="space-between"
                style={{ width: "80%", margin: "auto" }}
              >
                <Box
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <BookmarkIcon />
                  <Typography className="white-color font-bold" align="center">
                    Never forget places <br />
                    again
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent={"center"}
                  alignItems="center"
                  flexDirection={"column"}
                >
                  <ScreenShareIcon />
                  <Typography className="white-color font-bold" align="center">
                    Share your <br />
                    journey
                  </Typography>
                </Box>
              </Box>
              <Box mt={5} />
              <img src={Mobiles} alt="mobiles" />
            </Box>
            <Box mt={10} mb={20}>
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
                  xs={6}
                  md={6}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Typography variant="h4">Segoe UI</Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={9}
                  md={9}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Typography variant="h4" className="font-bold">
                    Segoe UI
                  </Typography>
                </Grid>
                <Box style={{ textAlign: "center" }} mb={3} mt={10}>
                  <Button
                    disableRipple
                    target="_blank"
                    className="zonder-btn"
                    href="https://zonderapp.com/"
                  >
                    Visit Webiste
                  </Button>
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
