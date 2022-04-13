import React from "react"
import Layout from "../../../components/layout"
import "./styles.css"
import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  Button,
} from "@material-ui/core"
import Headphone from "../../../images/headphone.svg"
import Circle from "../../../images/circle-groove.png"
import Bar from "../../../images/bar-groove.png"
import Desktop from "../../../images/desktop.png"
import QRCode from "../../../images/qr-code.png"
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow"
import EqualizerIcon from "@mui/icons-material/Equalizer"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import DataUsageIcon from "@mui/icons-material/DataUsage"
import Hand from "../../../images/hand.png"
import { useAnimation } from "../../../utils/useAnimation"

export default function Groovepack() {
  const matches = useMediaQuery("(min-width:600px)")
  useAnimation()
  return (
    <Layout bar={"#000"} font="#fff" mobileGradient={"#000"}>
      <div id="Home" className="background-groove">
        <Container>
          <Grid
            container
            direction="row"
            alignItems="center"
            className={"grid"}
            spacing={0}
          >
            <Grid
              item
              xs={12}
              md={6}
              className={"grid"}
              data-aos="zoom-out-left"
              data-aos-easing="ease-in-sine"
            >
              <Typography variant="h3" gutterBottom className={"title"}>
                {"GROOVE"}
                <br />
                {"PACKER"}
              </Typography>
              <Typography variant="h3" gutterBottom className={"subtitle"}>
                {`BARCODE INVENTORY CONTROL & SCAN PACK QC SYSTEM`}
              </Typography>
            </Grid>
            <Grid
              style={{
                textAlign: matches ? "end" : "center",
                position: "relative",
              }}
              item
              xs={12}
              md={6}
              data-aos="zoom-out-right"
              data-aos-easing="ease-in-cubic"
            >
              <div className="opacity-div"></div>
              <img
                src={Headphone}
                alt="services"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 500,
                  marginTop: matches ? 0 : 10,
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <div style={{ textAlign: "center", position: "relative" }}>
          {/* <div className="round-1"></div> */}
          <img
            src={Circle}
            alt="circle"
            style={{ width: "40%" }}
            data-aos="zoom-in"
            data-aos-delay="800"
          />
          <Box mt={5} />
          <Typography variant="body1" className="color-groove">
            HOW WE WORK
          </Typography>
          <Box mt={5} />

          <img src={Bar} alt="bar" style={{ width: "80%" }} />
          {/* <div className="round-1"></div> */}
        </div>
        <Divider style={{ backgroundColor: "#7e7d7d", marginTop: 5 }} />
        <Box mt={20} />
        <Container>
          <Grid container alignItems="center">
            <Grid item sm={6} md={4}>
              <img src={QRCode} alt="QR" style={{ width: "80%" }} />
            </Grid>
            <Grid item sm={6} md={8}>
              <Typography
                variant="h5"
                style={{ fontWeight: 100, marginBottom: 20 }}
                align="center"
              >
                GOOD FEATURES
              </Typography>
              <Grid container spacing={8}>
                <Grid
                  item
                  md={6}
                  align="center"
                  style={{ marginBottom: "4rem" }}
                  data-aos="fade-left"
                  data-aos-delay="1000"
                >
                  <div className="icon-container">
                    <DoubleArrowIcon />
                  </div>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 900 }}
                    className="color-groove"
                  >
                    ACCURACY
                  </Typography>
                  <Typography variant="caption" className="color-groove">
                    If it's in the order it's in the box. Scan, Pack. Rinse,
                    Repeat. This is the barcode packing QC system you've been
                    looking for.
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={6}
                  align="center"
                  data-aos="fade-left"
                  data-aos-delay="1000"
                >
                  <div className="icon-container">
                    <EqualizerIcon />
                  </div>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 900 }}
                    className="color-groove"
                  >
                    INVENTORY
                  </Typography>
                  <Typography variant="caption" className="color-groove">
                    Keeping inventory counts accurate and up to date is time
                    consuming and costly. Let GroovePacker do it for you
                    automatically.
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={6}
                  align="center"
                  style={{ marginBottom: "4rem" }}
                  data-aos="fade-left"
                  data-aos-delay="1000"
                >
                  <div className="icon-container">
                    <LightbulbIcon />
                  </div>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 900 }}
                    className="color-groove"
                  >
                    INTEGRATE
                  </Typography>
                  <Typography variant="caption" className="color-groove">
                    GroovePacker is not an ALL-IN-ONE suite that takes ages to
                    implement. Instead of requiring a completely new workflow we
                    integrate into your existing shipping system.
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={6}
                  align="center"
                  data-aos="fade-left"
                  data-aos-delay="1000"
                >
                  <div className="icon-container">
                    <DataUsageIcon />
                  </div>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 900 }}
                    className="color-groove"
                  >
                    INTUITIVE
                  </Typography>
                  <Typography variant="caption" className="color-groove">
                    GroovePacker was designed from the ground up by its users.
                    The result is a logical workflow with little to no learning
                    curve.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Box mt={20} />
        <Divider style={{ backgroundColor: "#7e7d7d" }} />
        <Box mt={5} mb={5}>
          <Typography
            variant="h5"
            style={{ fontWeight: 100, marginBottom: 20, color: "white" }}
            align="center"
          >
            TYPOGRAPHY AND COLORS
          </Typography>
          <Container>
            <Grid container alignItems="center">
              <Grid
                xs={12}
                md={6}
                lg={4}
                align="center"
                data-aos="flip-right"
                data-aos-delay="1000"
              >
                <div className="helvetica">
                  <Typography variant="h6" className="text-hel">
                    HELVETICA
                  </Typography>
                </div>
              </Grid>
              <Grid xs={12} md={6} lg={4} align="center" data-aos="fade">
                <div className="center">
                  <div>
                    <Typography style={{ color: "#537E09" }}>
                      {" "}
                      #C9C9C9
                    </Typography>
                  </div>
                  <div style={{ backgroundColor: "#537E09" }}>
                    <Typography style={{ color: "#fff" }}>#537E09</Typography>
                  </div>
                </div>
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={4}
                align="center"
                data-aos="slide-left"
                data-aos-delay="1000"
              >
                <Box className="helvetica-right">
                  <Typography variant="h6">HELVETICA</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Divider style={{ backgroundColor: "#7e7d7d" }} />

        <Box mt={10} mb={10}>
          <Container>
            <Grid container spacing={5} alignItems="center">
              <Grid item md={6}>
                <Typography
                  align="center"
                  variant="body1"
                  className="color-groove"
                  data-aos="fade-down-right"
                  data-aos-delay="1000"
                >
                  PUT THE SMACK DOWN ON PACKING ERRORS AND ENJOY THE BENEFITS OF
                  REAL TIME PHYSICAL INVENTORY VISIBILITY.
                </Typography>
              </Grid>
              <Grid item md={6}>
                <img
                  src={Desktop}
                  alt="desktop"
                  data-aos="fade-down-left"
                  data-aos-delay="1000"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Divider style={{ backgroundColor: "#7e7d7d" }} />
        <Container>
          <Box
            mt={10}
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <img
              src={Hand}
              alt="hand"
              data-aos="fade-down-left"
              data-aos-delay="1000"
            />
            <Box ml={5} data-aos="fade-down-right" data-aos-delay="1500">
              <Typography variant="h6" className="color-groove">
                Time is money. Get set up and scanning faster than any other
                packing software.
              </Typography>
            </Box>
          </Box>
          <Box style={{ textAlign: "center" }} mb={3} mt={3}>
            <Button
              disableRipple
              target="_blank"
              className="groove-btn"
              href="https://groovepacker.com/"
            >
              Visit Webiste
            </Button>
          </Box>
        </Container>
      </div>
    </Layout>
  )
}
