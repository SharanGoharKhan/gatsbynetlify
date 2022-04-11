import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import React from "react"
import "./styles.css"
import Group from "../../../images/group-pink.png"
import Logo from "../../../images/logo-textmyguest.png"
import Wolf from "../../../images/wolf.png"
import Cycle from "../../../images/guest-cycle.png"
import Chat from "../../../images/chat-device.png"
import Sharan from "../../../images/sharan-s.png"
import Adnan from "../../../images/adnan-s.png"
import { Footer, TopBar } from "../../../components"
import { useAnimation } from "../../../utils/useAnimation"
export default function TextMyGuest() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  useAnimation()
  return (
    <>
      <Grid container style={{ postion: "relative" }}>
        <TopBar
          barColor={"transparent"}
          position="absolute"
          mobileGradient={
            "linear-gradient(to bottom, #ee3776 0%, #ff075d 100%)"
          }
          subMenuText={"#000"}
        />
        <Grid item xs={12} md={7} className="pink-guest-background">
          <Box
            className="inside-pink"
            justifyContent={matches ? "center" : "flex-end"}
          >
            <Box
              display={"flex"}
              flexDirection="column"
              alignItems={matches ? "center" : "flex-end"}
              style={{
                textAlign: matches ? "center" : "end",
                marginRight: !matches && "-8rem",
              }}
              data-aos="fade-down-right"
            >
              {matches && <img src={Logo} alt="logo" width={220} />}
              <Typography className="white-color" variant="h4">
                Keep Your Event <br /> Running Smoothly
              </Typography>
              <Typography variant="caption">
                Keep your guests informed with pre-scheduled text reminders and
                <br />
                on-the-fly broadcasts. Collect replies in one place, including
                <br />
                pictures. Unlimited messages, groups, and usage.
              </Typography>
            </Box>
            {!matches && (
              <Box className="group-screen">
                <img
                  src={Group}
                  alt="group"
                  width={"80%"}
                  data-aos="slide-up"
                />
              </Box>
            )}
          </Box>
        </Grid>
        <Box
          component={Grid}
          item
          md={5}
          display={{ xs: "none", md: "block" }}
          style={{ backgroundColor: "white" }}
        >
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            className="height100"
          >
            <img src={Logo} alt="logo" width={220} />
          </Box>
        </Box>
        <Grid
          item
          xs={12}
          md={7}
          className="lower-pink-guest-background"
          data-aos="slide-right"
        >
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            className="height100"
          >
            <Box>
              <Typography className="white-color font-bold" variant="h2">
                Two Way, <br /> Rich Media <br /> Text Messaging
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} data-aos="slide-left">
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            className="height100"
            style={{ minHeight: matches && "400px", backgroundColor: "white" }}
          >
            <img src={Wolf} alt="logo" width={220} />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          className="lower-white-guest-background"
          data-aos="slide-left"
        >
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"flex-start"}
            className="height100"
            style={{ backgroundColor: "white" }}
          >
            <Box display={"flex"} justifyContent="space-around">
              <Typography
                className="font-bold process-outline process"
                variant="h1"
              >
                PROCESSING
              </Typography>
              <Typography className="font-bold process" variant="h1">
                PROCESSING
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box
          item
          md={5}
          component={Grid}
          display={{ xs: "none", md: "block" }}
          data-aos="slide-right"
        >
          <Box
            display={"flex"}
            justifyContent="flex-end"
            className="lower-process"
          >
            <Typography
              className="font-bold process white-color"
              variant="h1"
              style={{
                marginRight: "-68px",
              }}
            >
              PROCESSING
            </Typography>
          </Box>
        </Box>

        <Grid item md={7} data-aos="fade-down">
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            className="height100 black-color"
            style={{ padding: "4rem" }}
          >
            <img src={Cycle} alt="cycle" width={"60%"} />
          </Box>
        </Grid>
        <Grid item xs={12} md={5} data-aos="fade-down">
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            className="height100"
            style={{ position: "relative", backgroundColor: "white" }}
          >
            <Typography
              className="font-bold process pink-color"
              variant="h1"
              style={{
                letterSpacing: "10px",
              }}
            >
              FEATURES
            </Typography>
            <Typography
              className="process-outline F"
              variant="h1"
              style={{
                fontSize: "18rem",
                position: "absolute",
                top: "0",
                right: "-90px",
              }}
            >
              F
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          md={7}
          xs={12}
          style={{
            minHeight: "100vh",
            position: "relative",
            overflow: "visible",
          }}
          data-aos="flip-up"
        >
          {!matches && (
            <img src={Chat} alt="device" className="chat-device-image" />
          )}
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            className="height100"
            style={{ backgroundColor: "white" }}
          >
            <Box
              style={{
                textAlign: "center",
                width: "420px",
              }}
            >
              <Typography
                className="font-bold pink-color"
                variant="h1"
                style={{ fontSize: "15rem", marginBottom: "-5rem" }}
              >
                Y
              </Typography>
              <Typography
                className="font-bold"
                variant="caption"
                align="center"
              >
                Your guests are taking pictures at your event, but not everyone
                will post their pictures on #socialmedia. Encourage your guests
                to reply via text - TextMyGuests organizes all your guests'
                replies into a single, private stream. You can review and share
                them later or in real-time.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box item component={Grid} display={{ xs: "none", md: "block" }} md={5}>
          <Box
            display={"flex"}
            justifyContent="center"
            className="black-color height100"
          ></Box>
        </Box>

        <Grid item xs={12} md={7} data-aos="slide-right">
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            className="height100 pink-bg-color"
          >
            <Box style={{ textAlign: "center" }} mt={10} mb={10}>
              <Avatar image={Sharan} name="Sharan" designation={"Team Lead"} />
              <Avatar image={Adnan} name="Adnan" designation={"CTO"} />
            </Box>
          </Box>
        </Grid>
        <Box
          component={Grid}
          item
          display={{ xs: "none", md: "block" }}
          md={5}
          style={{ backgroundColor: "white" }}
        >
          <Box
            display={"flex"}
            justifyContent="center"
            className="height100"
            alignItems={"center"}
          >
            <Typography
              className="font-bold process"
              variant="h1"
              data-aos="slide-down"
            >
              TEAM
            </Typography>
            <Typography
              className="font-bold process scaled pink-color"
              variant="h1"
              data-aos="slide-up"
            >
              TEAM
            </Typography>
          </Box>
        </Box>

        <Grid item xs={12} md={7} data-aos="slide-left">
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            className="height100"
            style={{ minHeight: "200px", backgroundColor: "white" }}
          >
            <Typography variant="h4">ROBOTO</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} data-aos="slide-right">
          <Box display={"flex"} flexDirection={"column"}>
            <Box className="black-color box">
              <Typography variant="h4" className="pink-color">
                #000000
              </Typography>
            </Box>
            <Box style={{ backgroundColor: "  #FF075D" }} className="box">
              <Typography variant="h4">#FF075D</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box style={{ textAlign: "center" }} mb={3} mt={3}>
        <Button
          disableRipple
          target="_blank"
          className="guest-btn"
          href="https://textmyguests.com/"
        >
          Visit Webiste
        </Button>
      </Box>
      <Footer />
    </>
  )
}

function Avatar({ image, name, designation }) {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column"
    >
      <img
        src={image}
        alt="profile"
        style={{ width: "80px", borderRadius: "50%" }}
      />
      <Typography
        className="font-bold white-color"
        variant="body2"
        align="center"
      >
        {name}
      </Typography>
      <Typography className="font-bold" variant="caption" align="center">
        {designation}
      </Typography>
    </Box>
  )
}
