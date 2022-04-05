import * as React from "react"
import "./index.css"
import "../components/layout.css"
import Seo from "../components/seo"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import OpenSource from "../images/open-source.png"
import Blog1 from "../images/blog-image.png"
import Blog2 from "../images/blog-image2.png"
import Bg from "../images/home-background.png"
import ReviewsBg from "../images/reviews-background.png"
import WatchLaterIcon from "@mui/icons-material/WatchLater"
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle"
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined"
import FeedbackIcon from "@mui/icons-material/Feedback"
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"
import { carouselData } from "../utils/carouselData"
import { Link as GatsbyLink } from "gatsby"
import { externalLinks } from "../utils/links"

import {
  ContactUs,
  Banner,
  BottomServices,
  Typos,
  PortfolioProjects,
  FAQ,
  Carousel,
} from "../components"
import {
  Grid,
  Paper,
  Typography,
  makeStyles,
  useMediaQuery,
  Container,
  Box,
  Button,
  Divider,
  useTheme,
} from "@material-ui/core"
import Layout from "../components/layout"
import { useAnimation } from "../utils/useAnimation"

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(6),
  },
  grid: {
    padding: theme.spacing(4),
  },
  root: {
    padding: 10,
  },
  bold: {
    fontWeight: 900,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "10px 10px 2px 0px #000",
    border: "2px solid #179afb",
  },
  sliderPaper: {
    padding: theme.spacing(1),
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
  insideCard: {
    padding: "15px",
    boxShadow: "2px 2px 0px 0px #000",
    backgroundColor: "#fff",
    border: "1px solid black",
  },
  blueBox: {
    backgroundColor: "#179Afb",
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  blogBox: {
    maxWidth: "400px",
    padding: "1rem",
    position: "absolute",
    border: "2px solid #179afb",
    backgroundColor: "white",
    zIndex: "10000",
    top: "100px",
  },
  blogBackBox: {
    border: "2px solid black",
    position: "absolute",
    top: 0,
    height: " 400px",
    maxWidth: "400px",
    left: "5rem",
  },
  sliderBtn: {
    backgroundColor: "white",
    width: 20,
    height: 20,
    borderRadius: 10,
    cursor: "pointer",
  },
  activeCard: {
    transform: "scale(1.0)",
  },
}))

const IndexPage = props => {
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:600px)")
  const [index, setIndex] = React.useState(1)
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("sm"))
  useAnimation()
  const contactRef = React.useRef(null)
  // console.log(props.location)

  // useEffect(() => {
  //   switch (props.location.hash) {
  //     case "#contactUs":
  //       scrollToRef(contactRef)
  //       break

  //     default:
  //       break
  //   }
  // }, [props.location])
  // const scrollToRef = ref => {
  //   window.scrollTo(0, ref.current.offsetTop)
  // }
  const increment = () => {
    if (index < carouselData.length - 1) {
      setTimeout(() => {
        setIndex(prev => prev + 1)
      }, 500)
    }
  }
  const decrement = () => {
    if (index > 0) {
      setTimeout(() => {
        setIndex(prev => prev - 1)
      }, 500)
    }
  }

  return (
    <>
      <Seo title="Ninjas Code" />
      <Layout>
        <Banner
          titleMain={"We Solve Business Problems with"}
          titleSecondary={"Modern Technologies"}
          subTitle={
            " Ready made solutions. Fully customizable with documentation and source code. Quickly and cheaply launch your MVP."
          }
          image={false}
        />
        <div style={{ position: "relative" }}>
          <Box
            className={classes.blueBox}
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
            className={classes.blueBox}
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
            className={classes.blueBox}
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
          <Typos
            first="THREE"
            second="THREE THINGS MAKE US UNIQUE"
            third="QUE"
            right="5.5vmin"
          />
          <Box mt={small ? 5 : 20} mb={20}>
            <Container maxWidth="sm">
              <Grid container alignItems="center" spacing={3} data-aos="fade">
                <Grid item md={6}>
                  <Paper className={classes.paper} square={true}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box className={classes.blueBox}>
                        <MonetizationOnIcon style={{ color: "black" }} />
                      </Box>
                      <Typography
                        className={classes.cardHeaderText}
                        gutterBottom
                        align="start"
                      >
                        Raise Funds
                      </Typography>
                      <Typography className={classes.cardText} gutterBottom>
                        Venture capitals now need a working product not just an
                        idea. You have to prove that you are able to execute
                        your idea.
                      </Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid item md={6}>
                  <Grid container flexDirection="column" spacing={3}>
                    <Grid item xs={12}>
                      <Paper className={classes.paper} square={true}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Box className={classes.blueBox}>
                            <FeedbackIcon style={{ color: "black" }} />
                          </Box>
                          <Typography
                            className={classes.cardHeaderText}
                            gutterBottom
                          >
                            Get feedback
                          </Typography>

                          <Typography className={classes.cardText} gutterBottom>
                            Project budget is always tight, development cost
                            needs to be minimized for marketing budget to test
                            your idea.
                          </Typography>
                        </div>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} style={{ paddingBottom: "22px" }}>
                      <Paper className={classes.paper} square={true}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }}
                        >
                          <Box className={classes.blueBox}>
                            <AddBoxOutlinedIcon style={{ color: "black" }} />
                          </Box>
                          <Typography
                            className={classes.cardHeaderText}
                            gutterBottom
                          >
                            Check Feasibility
                          </Typography>

                          <Typography className={classes.cardText} gutterBottom>
                            You don't need to worry if your project will be
                            executed on time. We already have a pre-made
                            solution that gives your assurance about how the
                            final product will be like.
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
          }}
        >
          <Typos
            first="OUR"
            second="OUR PROJECTS"
            third={"PRO"}
            upperTop="0vmin"
            upperLeft="5.2vmin"
            top="10vmin"
            right={"20vmin"}
          />
          <Box mt={15} mb={5} data-aos="flip-down">
            <PortfolioProjects />
          </Box>
          <Box textAlign={"center"}>
            <GatsbyLink to="/Portfolio/" style={{ textDecoration: "none" }}>
              <Button
                endIcon={<ArrowForwardIcon />}
                className={classes.bold}
                disableRipple
              >
                SEE MORE
              </Button>
            </GatsbyLink>
          </Box>
          <Typos
            first="OPEN"
            second="OPEN SOURCE PROJECTS"
            third={"JECT"}
            upperTop="0vmin"
            upperLeft="5.2vmin"
            top="10vmin"
            right={"8vmin"}
          />
          <Box mt={5} mb={5} textAlign="center">
            <img
              src={OpenSource}
              alt="open-source"
              width={"332px"}
              style={{ maxWidth: "100%" }}
              data-aos="zoom-out"
            />
          </Box>
          <Box textAlign={"center"} mb={2}>
            <Button
              endIcon={<ArrowForwardIcon />}
              className={classes.bold}
              disableRipple
              target="_blank"
              href="https://github.com/Ninjas-Code-official/shopping-cart.git/"
            >
              GITHUB
            </Button>
          </Box>
        </div>
        <div style={{ position: "relative" }}>
          <BottomServices />
          <Typos first="WHY" second="WHY US" third={"US"} right={"4vmin"} />
          <Box mt={5} />
          <Container maxWidth="sm">
            <Grid container spacing={3}>
              <Grid item xs={6} data-aos="slide-right">
                <Paper
                  elevation={0}
                  square={true}
                  className={classes.whyUsCard}
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
                      className={classes.insideCard}
                      display="flex"
                      alignItems="center"
                    >
                      <WatchLaterIcon />
                    </Box>
                  </div>
                  <Typography className={classes.bold} align="center">
                    1 month time to market
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper
                  elevation={0}
                  square={true}
                  className={classes.whyUsCard}
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
                      className={classes.insideCard}
                      display="flex"
                      alignItems="center"
                    >
                      <LightbulbCircleIcon />
                    </Box>
                  </div>
                  <Typography className={classes.bold} align="center">
                    Complete process transparency
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper
                  elevation={0}
                  square={true}
                  className={classes.whyUsCard}
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
                      className={classes.insideCard}
                      display="flex"
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <ViewQuiltIcon />
                    </Box>
                  </div>
                  <Typography className={classes.bold}>
                    UX driven approach
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper
                  elevation={0}
                  square={true}
                  className={classes.whyUsCard}
                  data-aos="fade-down-left"
                  data-aos-delay="800"
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
                      className={classes.insideCard}
                      display="flex"
                      alignItems="center"
                    >
                      <LocalOfferIcon />
                    </Box>
                  </div>
                  <Typography className={classes.bold}>
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
              first="OUR"
              second={"OUR CLIENTS ABOUT US"}
              third={"US"}
              right={"4vmin"}
              color="white"
            />
          </Box>
          {/* <Box
            mt={small ? 5 : 10}
            display="flex"
            justifyContent={"space-around"}
          >
            <Grid
              container
              spacing={3}
              style={{ margin: "2rem" }}
              alignItems="center"
            >
              <Grid item md={4} alignItems="center">
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {index > 0 && !small && (
                    <CarouselCard
                      name={carouselData[index - 1].name}
                      designation={carouselData[index - 1].name}
                      review={carouselData[index - 1].review}
                      active={false}
                    />
                  )}
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <CarouselCard
                    name={carouselData[index].name}
                    designation={carouselData[index].name}
                    review={carouselData[index].review}
                    active={true}
                  ></CarouselCard>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {index < carouselData.length - 1 && !small && (
                    <CarouselCard
                      name={carouselData[index + 1].name}
                      designation={carouselData[index + 1].name}
                      review={carouselData[index + 1].review}
                      active={false}
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box> */}
          <Carousel />
          <Grid container>
            <Grid xs={0} md={4}></Grid>
            <Grid xs={12} md={4}>
              <Box
                display={"flex"}
                justifyContent="center"
                mt={2}
                alignItems="center"
              >
                <Box className={classes.sliderBtn} m={2} onClick={decrement} />
                <Box
                  className={classes.sliderBtn}
                  m={2}
                  style={{ width: 30, height: 30, borderRadius: 15 }}
                />
                <Box className={classes.sliderBtn} m={2} onClick={increment} />
              </Box>
            </Grid>
          </Grid>
          <Box mb={5} />
        </div>
        <Box mt={10} style={{ backgroundColor: "#fff" }}>
          <div style={{ postion: "relative" }}>
            <BottomServices />
            <Typos first="FA" second="FAQ'S" third={"S"} right={"4vmin"} />
            <Container>
              <Grid container spacing={2}>
                <FAQ />
              </Grid>
            </Container>
            <Typos
              first="BLO"
              second="BLOG & NEWS"
              third={"WS"}
              upperTop="0vmin"
              upperLeft="5.2vmin"
              top="10vmin"
              right={"4vmin"}
            />
            <Box mt={5} />
            <Container mt={5}>
              <Grid container spacing={2}>
                <Grid
                  md={5}
                  style={{
                    height: "20rem",
                    border: "3px solid",
                    position: "relative",
                  }}
                  data-aos="slide-left"
                >
                  <Box>
                    <img src={Blog1} />
                  </Box>
                  <Box className={classes.blogBox} style={{ left: "-10px" }}>
                    <Typography className={classes.bold} align="center">
                      How javascript works behind the scenes
                    </Typography>
                    <Typography style={{ color: "#179afb" }} align="center">
                      Javascript is always hosted in some environment, typically
                      it’s hosted in a browser that is Google Chrome, Firefox,
                      Safari etc. Javascript will run in this environment but
                      not restricted to only this it can also run in other hosts
                      such Nodejs web server or some application that accepts JS
                      code input.
                    </Typography>
                    <Box textAlign={"center"}>
                      <Button
                        endIcon={<ArrowForwardIcon />}
                        className={classes.bold}
                        href={externalLinks.blog1}
                        target="_blank"
                      >
                        CONTINUE
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid md={2}></Grid>
                <Grid
                  md={5}
                  style={{
                    height: "20rem",
                    border: "3px solid",
                    position: "relative",
                    marginTop: "5rem",
                  }}
                  data-aos="slide-right"
                >
                  <Box>
                    <img src={Blog2} />
                  </Box>
                  <Box
                    style={{
                      marginTop: "6rem",
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Box className={classes.blogBox} style={{ right: "-10px" }}>
                      <Typography className={classes.bold} align="center">
                        How to Calculate the Cost of App Development?
                      </Typography>
                      <Typography style={{ color: "#179afb" }} align="center">
                        The complexity of the app, including some features and a
                        number of features, can have a direct impact on the cost
                        of the app. Every feature to make it functional takes
                        time to develop which again increases the cost of the
                        app to be developed. Most agencies charge on an hourly
                        basis so the more time it takes to complete a feature
                        more they will charge.
                      </Typography>
                      <Box textAlign={"center"}>
                        <Button
                          endIcon={<ArrowForwardIcon />}
                          className={classes.bold}
                          href={externalLinks.blog2}
                          target="_blank"
                        >
                          CONTINUE
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box mt={20} />
              <Box textAlign={"center"}>
                <Button
                  variant="outlined"
                  style={{ border: "2px solid black", borderRadius: "0" }}
                  href={externalLinks.allBlogs}
                  target="_blank"
                >
                  SEE ALL
                </Button>
              </Box>
            </Container>
            <Box mt={5} />
          </div>
        </Box>
        <a ref={contactRef}></a>
        <ContactUs />
      </Layout>
    </>
  )
}

// function CarouselCard({ name, designation, review, active }) {
//   const classes = useStyles()

//   return (
//     <Paper
//       className={
//         active
//           ? `${classes.sliderPaper} ${classes.activeCard}`
//           : `${classes.sliderPaper}`
//       }
//       square={true}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "flex-start",
//         }}
//       >
//         <Box
//           style={{
//             backgroundColor: "black",
//             width: "80px",
//             height: "140px",
//             position: "relative",
//             overflow: "visible",
//           }}
//         >
//           <Typography
//             style={{
//               color: "#179afb",
//               position: "absolute",
//               top: "40px",
//               right: "-12px",
//               fontSize: "2.4rem",
//             }}
//           >
//             {name[0]}
//           </Typography>
//         </Box>
//         <Box
//           display={"flex"}
//           justifyContent="center"
//           flexDirection={"column"}
//           ml={5}
//         >
//           <Typography>{name}</Typography>
//           <Divider
//             variant="horizontal"
//             style={{ height: "4px", backgroundColor: "black" }}
//           />
//           <Typography
//             className={classes.bold}
//             variant="caption"
//             style={{ color: "#179afb" }}
//           >
//             {designation}
//           </Typography>
//         </Box>
//       </div>
//       <Box mt={5} />
//       <Typography gutterBottom style={{ padding: "5px" }}>
//         {review}
//       </Typography>
//     </Paper>
//   )
// }

export default IndexPage
