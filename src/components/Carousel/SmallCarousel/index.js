import React from "react"
import { Paper, useTheme } from "@mui/material"
import { smallCarouselData } from "../../../utils/carouselData"
import { colors } from "../../../utils/colors"
import Marquee from "react-fast-marquee"

export default function SmallCarousel() {
  const theme = useTheme()

  const classes = {
    sliderPaper: {
       padding: "25px",
        textAlign: "center",
        color: theme.palette.text.secondary,
        boxShadow: `10px 10px 2px 0px ${colors.primary}`,
        border: "2px solid #000",
        width: "250px",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px 20px 10px 20px",
    },
  }

  return (
    <>
      <Marquee gradient={false} speed={50}>
        {smallCarouselData.map((item, index) => {
          return (
            <Paper sx={classes.sliderPaper} square={true} key={index}>
              <img src={item.logo} alt="slider" style={{ margin: 0 }} />
            </Paper>
          )
        })}
      </Marquee>
    </>
  )
}
