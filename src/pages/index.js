import { hot } from "react-hot-loader"
import * as React from "react"
import "./index.css"
import "../components/layout.css"
import Seo from "../components/seo"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Bg from "../images/home-background.png"
import ReviewsBg from "../images/reviews-background.png"
import WatchLaterIcon from "@mui/icons-material/WatchLater"
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined"
import FeedbackIcon from "@mui/icons-material/Feedback"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import { Link as GatsbyLink } from "gatsby"

import {
  ContactUs,
  Banner,
  BottomServices,
  Typos,
  PortfolioProjects,
  Faq,
  Carousel,
  Blogs,
  SmallCarousel,
} from "../components"
import {
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  Container,
  Box,
  Button,
  useTheme,
} from "@mui/material"
import Layout from "../components/layout"
import { useAnimation } from "../utils/useAnimation"
import TawkMessengerReact from "@tawk.to/tawk-messenger-react"
import OpenSource from "../components/OpenSource"

const IndexPage = props => {
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("sm"))
  //const [loading, setLoading] = React.useState(true)
  useAnimation()

  const classes = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: 48,
    },
    grid: {
      padding: "32px",
    },
    root: {
      padding: "10px",
    },
    bold: {
      fontWeight: 900,
    },

    paper: {
      padding: "16px",
      textAlign: "center",
      color: theme.palette.text.secondary,
      boxShadow: "10px 10px 0px 0px #000",
      border: "2px solid #179afb",
    },
    sliderPaper: {
      padding: "8px",
      border: "2px solid #179afb",
      maxWidth: "400px",
      minHeight: "480px",
      transform: "scale(0.85)",
    },
    title: {
      color: "#fff",
      fontWeight: 700,
      fontSize: "8.5vmin",
      fontFamily: "Montserrat",
    },
    subtitle: {
      color: "#fff",
      fontWeight: 500,
      fontSize: "3vmin",
      lineHeight: "30px",
    },
    cardHeaderText: {
      fontWeight: 900,
      fontSize: "3vmin",
      color: "#000",
    },
    boldText: {
      color: "#fff",
      fontWeight: 700,
      fontSize: "4vmin",
      fontFamily: "Montserrat",
    },
    number: {
      color: "#fff",
      padding: 8,
      fontFamily: "Montserrat",
    },
    cardText: {
      textAlign: "initial",
      fontSize: "2vmin",
      fontFamily: "Montserrat",
    },
    logoContainer: {
      borderWidth: 1,
      borderStyle: "solid",
      width: "40px",
      height: "40px",
      borderColor: "#fff",
    },
    whyUsCard: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "200px",
      border: "1px solid #179afb",
    },
    projrctCard: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "200px",
      border: "8px solid #179afb",
    },
    blueBox: {
      backgroundColor: "#179Afb",
      width: "100px",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 250)
  // })

  // if (loading) {
  //   return <Splash />
  // }
  return (
    <>
      <Seo title="Ninjas Code" description="We Specialize in Rapid MVP" />
      <Layout home={true}>
        <Banner
          // titleMain={"We Specialize in Rapid MVP "}
          // titleSecondary={"Development and Design "}
          // subTitle={
          //   "Get tangible results within a matter of weeks. We utilize agile methodologies and iterative design processes to provide custom and ready-made solutions for a wide range of industries."
          // }
          image={false}
        />
        <div style={{ position: "relative", margin: "10px 0px 10px 0px" }}>
          <Box
            sx={classes.blueBox}
            style={{
              position: "absolute",
              left: "15%",
              top: "12%",
              border: "1px solid",
              display: small && "none",
            }}
            data-aos="flip-right"
          />
          <Box
            sx={classes.blueBox}
            style={{
              position: "absolute",
              right: "5%",
              top: "15%",
              border: "1px solid #179Afb",
              backgroundColor: "black",
              display: small && "none",
            }}
            data-aos="flip-left"
            data-aos-delay="200"
          />
          <Box
            sx={classes.blueBox}
            style={{
              position: "absolute",
              left: "30%",
              bottom: "0%",
              border: "1px solid",
              backgroundColor: "white",
              width: "150px",
              height: "60px",
              display: small && "none",
            }}
            data-aos="flip-up"
          />
          <BottomServices />
          <Typos second="Revolutionize Your Process " right="5.5vmin" />
          <Box mt={small ? 5 : 20} mb={20}>
            <Container maxWidth="sm">
              <Grid container alignItems="center" spacing={3} data-aos="fade">
                <Grid item xs={6} md={6} style={{ paddingBottom: "22px", paddingRight: "22px" }}>
                  <Paper sx={classes.paper} square={true}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box sx={classes.blueBox}>
                        <MonetizationOnIcon style={{ color: "black" }} />
                      </Box>
                      <Typography
                        sx={classes.cardHeaderText}
                        gutterBottom
                        align="left"
                      >
                        Raise Funds
                      </Typography>
                      <Typography sx={classes.cardText} gutterBottom>
                        Venture capitals now need a working product not just an
                        idea. You have to prove that you are able to execute
                        your idea.
                      </Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Grid container flexDirection="column" spacing={3}>
                    <Grid item xs={12} style={{ paddingBottom: "22px", paddingRight: "22px" }}>
                      <Paper sx={classes.paper} square={true}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Box sx={classes.blueBox}>
                            <FeedbackIcon style={{ color: "black" }} />
                          </Box>
                          <Typography
                            sx={classes.cardHeaderText}
                            gutterBottom
                          >
                            Test the Waters
                          </Typography>

                          <Typography sx={classes.cardText} gutterBottom>
                            Instead of pouring resources into extensive market
                            research, with our specialty in MVP development, you
                            can save time and money while also getting valuable
                            feedback from customers.
                          </Typography>
                        </div>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} style={{ paddingBottom: "22px", paddingRight: "22px" }}>
                      <Paper sx={classes.paper} square={true}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Box sx={classes.blueBox}>
                            <AddBoxOutlinedIcon style={{ color: "black" }} />
                          </Box>
                          <Typography
                            sx={classes.cardHeaderText}
                            gutterBottom
                          >
                            Evaluate Your Concept
                          </Typography>

                          <Typography sx={classes.cardText} gutterBottom>
                            Check whether your concept can be implemented at all
                            before you commit to creating your product. Check
                            the feasibility of your product’s features and
                            functionality first.
                          </Typography>
                        </div>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>

        <div
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginTop: small && "-5rem",
          }}
        >
          <Typos
            second="OUR PROJECTS "
            upperTop="0vmin"
            upperLeft="5.2vmin"
            top="10vmin"
            right={"20vmin"}
          />
          <Box
            mt={15}
            mb={5}
            data-aos="flip-down"
            style={{ overflow: "visible" }}
          >
            <PortfolioProjects />
          </Box>
          <Box textAlign={"center"}>
            <GatsbyLink to="/Portfolio/" style={{ textDecoration: "none" }}>
              <Button
                endIcon={<ArrowForwardIcon />}
                sx={classes.bold}
                disableRipple
              >
                SEE MORE
              </Button>
            </GatsbyLink>
          </Box>

          <Typos
            second="OUR OPEN SOURCE PROJECTS "
            upperTop="0vmin"
            upperLeft="5.2vmin"
            top="10vmin"
            right={"8vmin"}
          />
          <OpenSource />
          <Box textAlign={"center"} mb={2} style={{ marginTop: "50px" }}>
            <Button
              endIcon={<ArrowForwardIcon />}
              sx={classes.bold}
              style={{ color: "blue" }}
              disableRipple
              target="_blank"
              href="https://github.com/Ninjas-Code-official/"
            >
              SEE MORE
            </Button>
          </Box>
        </div>
        <div style={{ position: "relative" }}>
          <BottomServices />
          <Typos second="WHY US " right={"4vmin"} />
          <Box mt={5} />
          <Container maxWidth="sm">
            <Grid container spacing={3}>
              <Grid item xs={6} data-aos="slide-right">
                <Paper
                  elevation={0}
                  square={true}
                  sx={classes.whyUsCard}
                  style={{ backgroundColor: "#179afb" }}
                  data-aos="fade-up-right"
                  data-aos-delay="800"
                >
                  <div
                    style={{
                      height: "85px",
                      flex: "0.5",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={classes.insideCard}
                      display="flex"
                      alignItems="center"
                    >
                      <WatchLaterIcon />
                    </Box>
                  </div>
                  <Typography sx={classes.bold} align="center">
                    1 month time to market
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper
                  elevation={0}
                  square={true}
                  sx={classes.whyUsCard}
                  data-aos="fade-up-left"
                  data-aos-delay="800"
                >
                  <div
                    style={{
                      height: "85px",
                      flex: "0.5",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={classes.insideCard}
                      display="flex"
                      alignItems="center"
                    >
                      <LightbulbIcon />
                    </Box>
                  </div>
                  <Typography sx={classes.bold} align="center">
                    Complete process transparency
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper
                  elevation={0}
                  square={true}
                  sx={classes.whyUsCard}
                  data-aos="fade-down-right"
                  data-aos-delay="800"
                >
                  <div
                    style={{
                      height: "85px",
                      flex: "0.5",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={classes.insideCard}
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <ViewQuiltIcon />
                    </Box>
                  </div>
                  <Typography sx={classes.bold}>
                    UX driven approach
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper
                  elevation={0}
                  square={true}
                  sx={classes.whyUsCard}
                  data-aos="fade-down-left"
                  data-aos-delay="800"
                  style={{ backgroundColor: "#179afb" }}
                >
                  <div
                    style={{
                      height: "85px",
                      flex: "0.5",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={classes.insideCard}
                      display="flex"
                      alignItems="center"
                    >
                      <LocalOfferIcon />
                    </Box>
                  </div>
                  <Typography sx={classes.bold}>
                    $10,000 costs limit
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Box mt={10} />
        <div
          style={{
            backgroundImage: `url(${ReviewsBg})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box>
            <Typos
              second={"WHAT OUR CLIENTS SAY ABOUT US "}
              right={"4vmin"}
              color="white"
            />
          </Box>
          <Carousel />
          <Box mt={5} />
        </div>
        <Box mt={10} />

        <SmallCarousel />
        <Box mt={2}>
          <div style={{ postion: "relative" }}>
            <BottomServices />
            <Typos second="Frequently Asked Questions " right={"4vmin"} />
            <Container>
              <Grid container spacing={2}>
                <Faq />
              </Grid>
            </Container>
            <Blogs />
            <Box mt={5} />
          </div>
        </Box>
        <ContactUs />
        <TawkMessengerReact
          propertyId="5d0f4f6b36eab9721118c84e"
          widgetId="1g01mqhlk"
          customStyle={{
            color: "red",
          }}
        />
      </Layout>
    </>
  )
}

export default hot(module)(IndexPage)
