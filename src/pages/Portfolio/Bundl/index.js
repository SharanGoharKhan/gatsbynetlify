import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"
import React, { useEffect } from "react"
import { ContactUs } from "../../../components"
import Layout from "../../../components/layout"
import "./styles.css"
import BundlMain from "../../../images/bundl-main.png"
import LightCircle from "../../../images/light-green-circle.png"
import DarkCircle from "../../../images/dark-green-circle.png"
import Green from "../../../images/green-circle.png"
import Sharan from "../../../images/sharan-s.png"
import Adnan from "../../../images/adnan-s.png"
import Colin from "../../../images/colin.png"
import Lance from "../../../images/lance.png"
import Chinese from "../../../images/chinese.png"
import BundlLogo from "../../../images/bundl-logo.png"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Bundl() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])
  return (
    <Layout bar="#62d7a5" font={"#fff"} mobileGradient={"#62d7a5"}>
      <div className="bundl-background">
        <img src={BundlLogo} alt="title" />
        <Typography
          variant="body1"
          align="center"
          style={{ color: "#fff", fontWeight: 800 }}
        >
          The number one destination for baby and <br />
          children's resale apparel
        </Typography>
      </div>
      <div className="bundl-lower-container">
        <img src={BundlMain} alt="bundl" style={{ width: "60%" }} />
        <img src={LightCircle} alt="circle1" className="circle1" />
        <img src={DarkCircle} alt="circle2" className="circle2" />
      </div>
      <Container>
        <div style={{ position: "relative" }}>
          <Grid container>
            <Grid item xs={12} sm={6} md={4}>
              <div className="oval">
                <Typography
                  variant="h5"
                  style={{ flex: 0.4, fontSize: "2vmin" }}
                  align="center"
                >
                  THE IDEA
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Typography
                  variant="caption"
                  style={{ fontSize: "0.6em", flex: 0.6 }}
                >
                  Ordering baby and kids apparels control is a pain in the neck
                  to parents
                  <br />
                  But what if we bring all the supplies in one application and
                  simplify the whole process
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={0} sm={6} md={8} />
            <Grid item xs={12} sm={6} md={4}>
              <div className="oval">
                <Typography
                  variant="caption"
                  style={{ fontSize: "0.6em", flex: 0.6 }}
                >
                  Ordering baby and kids apparels control is a pain in the neck
                  to parents
                  <br />
                  But what if we bring all the supplies in one application and
                  simplify the whole process
                </Typography>
                <Divider orientation="vertical" variant="middle" flexItem />

                <Typography
                  variant="h5"
                  align="center"
                  style={{ flex: 0.4, fontSize: "2vmin" }}
                >
                  THE CLIENT
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Box mt={5} />
          <img src={Green} alt="circle" className="circle3" />
        </div>

        <div className={matches ? "team-container-small" : "team-container"}>
          <Typography align="center">PROJECT TEAM</Typography>
          <Box display="flex" justifyContent={"space-around"}>
            <ImageCard name="Sharan" role="Team lead" image={Sharan} />
            <ImageCard name="Adnan" role="Project Manager" image={Adnan} />
            <ImageCard name="Collin" role="Co-Founder" image={Colin} />
            <ImageCard name="Lance" role="Co-Founder" image={Lance} />
            <ImageCard name="Name" role="CTO" image={Chinese} />
          </Box>
        </div>
        <Box mt={10} />
        <div style={{ overflow: "visible" }}>
          <Typography align="center">
            This Video will explain everything
          </Typography>
          <div style={{ overflow: "visible" }}>
            <div className="video-container">
              <img src={LightCircle} alt="circle" className="circle4" />
              <img src={DarkCircle} alt="circle" className="circle5" />
            </div>
          </div>
        </div>
      </Container>
      <Box mt={10} />
      <ContactUs />
    </Layout>
  )
}

function ImageCard({ image, name, role }) {
  return (
    <Box
      className="image-view"
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      data-aos="zoom-in"
      data-aos-easing="ease-in-sine"
      data-aos-duration="2000"
    >
      <img src={image} alt="team" style={{ marginBottom: "0.75rem" }} />
      <Typography align="center" style={{ fontWeight: 800 }}>
        {name}
      </Typography>
      <Typography align="center" style={{ fontSize: "1.5vmin" }}>
        {role}
      </Typography>
    </Box>
  )
}
