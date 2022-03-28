import { Box, Container, Grid, Paper, Typography } from "@material-ui/core"
import React, { useEffect } from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import TeamBg from "../../images/team-bg.png"
import Sharan from "../../images/sharan.png"
import Adnan from "../../images/adnan.png"
import Shahzaib from "../../images/shahzaib.png"
import Usama from "../../images/usama.png"
import Umar from "../../images/umar.png"
import "./styles.css"
import "../../styles/styles.css"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"
import BlueCard from "../../images/strip-card-blue.png"
import PurpleCard from "../../images/strip-card.png"
import Aos from "aos"
import "aos/dist/aos.css"
export default function Team() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true })
  }, [])

  return (
    <Layout>
      <Banner
        titleMain={"LET'S MEET"}
        titleSecondary={"OUR TEAM"}
        subTitle={
          "We know our crew. We builf teams considering both tech skills and personal traits. And we mean it."
        }
        image={false}
      />
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${TeamBg})`,
        }}
        className="team-background"
      >
        <BottomServices />
        <div className="typos">
          <Typography variant="h2" display="inline" className="brackets">
            {"{"}
            <Typography variant="h4" display="inline" className="typos-before">
              {" "}
              OUR
            </Typography>

            <Typography variant="h4" display="inline" className="typos-main">
              {" "}
              OUR TEAM
            </Typography>
            <Typography variant="h4" display="inline" className="typos-after">
              {" "}
              TEAM
            </Typography>
            {"}"}
          </Typography>
        </div>
        <Container style={{ marginTop: 100, marginBottom: 100 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4} align="center">
              <Paper
                className="image-container"
                data-aos="slide-up"
                data-aos-easing="ease-in-sine"
              >
                <img src={Sharan} alt={"team"} />
                <Typography variant="h5" className="name">
                  SHARAN GOHAR
                </Typography>
                <Typography variant="h6" className="designation">
                  CEO
                </Typography>
                <Box>
                  <LinkedInIcon className="icon-margin" />
                  <InstagramIcon />
                </Box>
              </Paper>
            </Grid>

            <Box
              component={Grid}
              item
              md={4}
              display={{ xs: "none", md: "block" }}
              align="center"
            >
              <Paper className="strip-container">
                <img src={BlueCard} alt={"team"} />
              </Paper>
            </Box>
            <Grid item xs={6} md={4} align="center">
              <Paper
                className="image-container"
                data-aos="slide-down"
                data-aos-easing="ease-in-sine"
              >
                <img src={Adnan} alt={"team"} />
                <Typography variant="h5" className="name">
                  ADNAN
                </Typography>
                <Typography variant="h6" className="designation">
                  CTO
                </Typography>
                <Box>
                  <LinkedInIcon className="icon-margin" />
                  <InstagramIcon />
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Box mt={4} />
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component={Grid}
              item
              md={4}
              display={{ xs: "none", md: "block" }}
              align="center"
            >
              <Paper className="strip-container">
                <img src={PurpleCard} alt={"team"} />
              </Paper>
            </Box>
            <Grid item xs={12} md={4} align="center">
              <Paper
                className="image-container"
                data-aos="zoom-out"
                data-aos-easing="ease-in-sine"
              >
                <img src={Shahzaib} alt={"team"} />
                <Typography variant="h5" className="name">
                  SHAHZAIB
                </Typography>
                <Typography variant="h6" className="designation">
                  UI/UX
                </Typography>
                <Box>
                  <LinkedInIcon className="icon-margin" />
                  <InstagramIcon />
                </Box>
              </Paper>
            </Grid>
            <Box
              component={Grid}
              item
              md={4}
              display={{ xs: "none", md: "block" }}
              align="center"
            >
              <Paper className="strip-container">
                <img src={PurpleCard} alt={"team"} />
              </Paper>
            </Box>
          </Grid>
          <Box mt={4} />

          <Grid container spacing={2} align="center">
            <Grid item xs={6} md={4}>
              <Paper
                className="image-container"
                data-aos="slide-down"
                data-aos-easing="ease-in-sine"
              >
                <img src={Usama} alt={"team"} />
                <Typography variant="h5" className="name">
                  Usama Sattar
                </Typography>
                <Typography variant="h6" className="designation">
                  Full Stack Developer
                </Typography>
                <Box>
                  <LinkedInIcon className="icon-margin" />
                  <InstagramIcon />
                </Box>
              </Paper>
            </Grid>
            <Box
              component={Grid}
              item
              md={4}
              display={{ xs: "none", md: "block" }}
              align="center"
            >
              <Paper className="strip-container">
                <img src={BlueCard} alt={"team"} />
              </Paper>
            </Box>
            <Grid item xs={6} md={4} align="center">
              <Paper
                className="image-container"
                data-aos="slide-up"
                data-aos-easing="ease-in-sine"
              >
                <img src={Umar} alt={"team"} />
                <Typography variant="h5" className="name">
                  Umar Khalid
                </Typography>
                <Typography variant="h6" className="designation">
                  Full Stack Developer
                </Typography>
                <Box>
                  <LinkedInIcon className="icon-margin" />
                  <InstagramIcon />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <ContactUs />
    </Layout>
  )
}
