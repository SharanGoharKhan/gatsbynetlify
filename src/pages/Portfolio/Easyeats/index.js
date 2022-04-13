import React from "react"
import Layout from "../../../components/layout"
import "./styles.css"
import EasyEatsImage from "../../../images/easy-eats-banner.png"
import Berries from "../../../images/berries.png"
import Mcdonalds from "../../../images/mcdonalds.png"
import Device from "../../../images/eats-device.svg"
import { easyEatsData } from "../../../utils/easyEats"
import Devices from "../../../images/tilted-devices.png"
import Burger from "../../../images/burger.svg"
import Lemon from "../../../images/lemon.png"
import Ladder from "../../../images/eats-ladder.png"
import Bar from "../../../images/green-bar.png"
import { useAnimation } from "../../../utils/useAnimation"
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

export default function EasyEats() {
  const theme = useTheme()
  const medium = useMediaQuery(theme.breakpoints.up("sm"))
  const small = useMediaQuery(theme.breakpoints.down("sm"))
  useAnimation()

  return (
    <Layout bar={"#fff"} font="#000" mobileGradient={"Gray"}>
      <div style={{ backgroundColor: "white" }}>
        <Box>
          <img src={EasyEatsImage} alt="banner" data-aos="zoom-out" />
        </Box>
        <div
          className="eats-lower-banner"
          style={{ minHeight: small && "80vh" }}
        >
          <img
            src={Berries}
            alt="berries"
            className="berries"
            style={{
              top: medium ? 0 : "-7rem",
              left: medium ? 0 : "-7rem",
            }}
          />
          <img
            src={Mcdonalds}
            alt="mcdonalds"
            style={{ width: "370px", height: "auto" }}
          />
          <div
            className="light-green-cube"
            style={{ display: small && "none" }}
            data-aos="slide-right"
            data-aos-once="false"
          ></div>
          <div
            className="dark-green-cube"
            style={{ display: small && "none" }}
            data-aos="slide-right"
            data-aos-once="false"
          ></div>
          <Box>
            <Typography align="center" data-aos="fade" data-aos-delay="2500">
              Meet Easy Eats, college campus food delivery <br /> reimagined.
              Are you hungry?
            </Typography>
          </Box>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <Box textAlign={"center"} mt={5}>
            <Typography
              align="center"
              variant="body2"
              style={{ fontWeight: "900" }}
            >
              PROCESS
            </Typography>
          </Box>
          <Box style={{ position: "relative" }} mb={5}>
            <img
              src={Ladder}
              alt="ladder"
              style={{ width: "70%" }}
              data-aos="zoom-in-right"
            />

            <img
              src={Lemon}
              alt="lemon"
              style={{
                width: "30%",
                position: "absolute",
                top: "30%",
                right: medium ? "-10rem " : "-15vmin",
              }}
              data-aos="zoom-in-left"
            />
          </Box>
        </div>
        <Box>
          <Grid container alignItems="center">
            <Grid item md={8}>
              <Container>
                <Grid container spacing={8}>
                  {easyEatsData.map((item, index) => {
                    return (
                      <Grid
                        item
                        md={6}
                        key={index}
                        data-aos="fade-right"
                        data-aos-delay={1200}
                      >
                        <div style={{ display: "flex" }}>
                          {item.icon}
                          <Box ml={2}>
                            <Typography
                              variant="body1"
                              style={{ fontWeight: 900 }}
                            >
                              {item.title}
                            </Typography>
                            <Divider
                              style={{
                                backgroundColor: "#90c33d",
                                width: "60px",
                              }}
                            />
                            <Typography variant="caption">
                              {item.description}
                            </Typography>
                          </Box>
                        </div>
                      </Grid>
                    )
                  })}
                </Grid>
              </Container>
            </Grid>
            <Grid
              item
              md={4}
              style={{ margin: small && "auto", position: "relative" }}
            >
              <img
                src={Device}
                alt={"device"}
                style={{ width: small && "200px" }}
              />
              <img
                src={Bar}
                alt={"bar"}
                style={{
                  position: "absolute",
                  left: "55%",
                  zIndex: "-1",
                  height: "95%",
                  display: small && "none",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        <div className="tilted-container">
          <Box mt={5}>
            <Typography className="white-typo bold" variant="h5" align="center">
              Typography <br /> & <br /> Fonts
            </Typography>
            <Typography
              className="white-typo stroke"
              variant="h6"
              align="center"
            >
              POPPINS
            </Typography>
            <Box display={"flex"} justifyContent="space-around">
              <div className="color-cube">
                <Typography
                  variant="caption"
                  style={{ color: "white", fontWeight: 900 }}
                >
                  #7CAE33
                </Typography>
              </div>
              <div className="color-cube" style={{ backgroundColor: "white" }}>
                <Typography variant="caption" style={{ fontWeight: 900 }}>
                  #FFFFFF
                </Typography>
              </div>
            </Box>
          </Box>
          <div style={{ textAlign: "center" }}>
            <img
              src={Devices}
              width="75%"
              alt="devices"
              data-aos="fade-down-right"
              data-aos-delay="1000"
            />
          </div>
          <div className="easy-eats-video-container">
            <iframe
              width="100%"
              height="100%"
              className="video-player"
              src="https://www.youtube.com/embed/neNMGBl9n84"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <Box>
            <img src={Burger} alt="burger" />
          </Box>
          <Box style={{ textAlign: "center" }} mb={3} mt={3}>
            <Button
              disableRipple
              target="_blank"
              className="easy-eats-btn"
              href="https://www.easyeatsdelivery.com/"
            >
              Visit Webiste
            </Button>
          </Box>
        </div>
      </div>
    </Layout>
  )
}
