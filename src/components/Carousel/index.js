import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { carouselData } from "../../utils/carouselData"
import {
  Paper,
  Typography,
  makeStyles,
  Box,
  Divider,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
const useStyles = makeStyles(theme => ({
  sliderPaper: {
    padding: theme.spacing(1),
    // outline: "5px solid #179afb",
    maxWidth: "400px",
    minHeight: "480px",
    transform: "scale(0.85)",
  },
  carousel: {
    minHeight: "600px",
    overflow: "visible !important",
    display: "flex",
    alignItems: "center",
    "& *": {
      overflow: "visible",
    },
    "& li": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .selected": {
      transform: "scale(1.2)",
    },
    "& .carousel-slider": {
      margin: "auto !important",
    },
  },
}))
export default function CarouselComponent() {
  const classes = useStyles()
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Carousel
        centerMode={small ? false : true}
        centerSlidePercentage="33.33"
        infiniteLoop={true}
        dynamicHeight={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        className={classes.carousel}
        width="90%"
      >
        {carouselData.map((item, index) => {
          return (
            <Paper
              className={`${classes.sliderPaper} ${classes.activeCard}`}
              square={true}
              key={index}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  style={{
                    backgroundColor: "black",
                    width: "80px",
                    height: "140px",
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  <Typography
                    style={{
                      color: "#179afb",
                      position: "absolute",
                      top: "40px",
                      right: "-12px",
                      fontSize: "2.4rem",
                    }}
                  >
                    {item.name[0]}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                  ml={5}
                >
                  <Typography>{item.name}</Typography>
                  <Divider
                    orientation="horizontal"
                    style={{
                      height: "4px",
                      backgroundColor: "black",
                      width: "100px",
                    }}
                  />
                  <Typography
                    className={classes.bold}
                    variant="caption"
                    style={{ color: "#179afb" }}
                  >
                    {item.designation}
                  </Typography>
                </Box>
              </div>
              <Box mt={5} />
              <Typography gutterBottom style={{ padding: "5px" }} align="left">
                {item.review}
              </Typography>
            </Paper>
          )
        })}
      </Carousel>
    </div>
  )
}
