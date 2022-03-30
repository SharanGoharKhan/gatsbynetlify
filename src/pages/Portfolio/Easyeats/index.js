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

import { Box, Container, Divider, Grid, Typography } from "@material-ui/core"

export default function EasyEats() {
  return (
    <Layout bar={"#fff"} font="#000" mobileGradient={"Gray"}>
      <Box>
        <img src={EasyEatsImage} alt="banner" />
      </Box>
      <div className="eats-lower-banner">
        <img src={Berries} alt="berries" className="berries" />
        <img
          src={Mcdonalds}
          alt="mcdonalds"
          style={{ width: "370px", height: "auto" }}
        />
        <div className="light-green-cube"></div>
        <div className="dark-green-cube"></div>
        <Typography align="center">
          Meet Easy Eats, college campus food delivery <br /> reimagined. Are
          you hungry?
        </Typography>
      </div>

      <Box>
        <Grid container alignItems="center">
          <Grid item md={8}>
            <Container>
              <Grid container spacing={8}>
                {easyEatsData.map((item, index) => {
                  return (
                    <Grid item md={6} key={index}>
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
          <Grid item md={4}>
            <img src={Device} alt={"device"} />
          </Grid>
        </Grid>
      </Box>

      <div className="tilted-container">
        <Box mt={5}>
          <Typography className="white-typo" variant="h5" align="center">
            Typography <br /> & <br /> Fonts
          </Typography>
          <Typography className="white-typo" variant="h6" align="center">
            POPPINS <br /> POPPINS
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
          <img src={Devices} width="75%" />
        </div>

        <Box>
          <img src={Burger} alt="burger" />
        </Box>
      </div>
    </Layout>
  )
}
