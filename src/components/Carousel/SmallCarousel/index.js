import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import {
  Paper,
  Typography,
  makeStyles,
  Box,
  Divider,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import { smallCarouselData } from "../../../utils/carouselData"

const useStyles = makeStyles(theme => ({
  sliderPaper: {
    padding: 25,
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "10px 10px 2px 0px #179afb",
    border: "2px solid #000",
    width: "300px",
    height: "200px",
    margin: "10px 0px 10px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    overflow: "visible !important",
    display: "flex",
    minHeight: "300px",

    alignItems: "center",
    "& *": {
      overflow: "visible",
    },
    "& li": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "35px",
    },
    "& .carousel-slider": {
      margin: "auto !important",
    },
  },
}))
export default function SmallCarousel() {
  const classes = useStyles()
  return (
    <Carousel
      centerMode={true}
      centerSlidePercentage="25"
      infiniteLoop={true}
      dynamicHeight={true}
      showIndicators={false}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      emulateTouch={true}
      className={classes.carousel}
    >
      {smallCarouselData.map((item, index) => {
        return (
          <Paper className={classes.sliderPaper} square={true} key={index}>
            <img src={item} alt="slider" style={{ width: "80 !important" }} />
          </Paper>
        )
      })}
    </Carousel>
  )
}
