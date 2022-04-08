import React from "react"
import { Paper, makeStyles } from "@material-ui/core"
import { smallCarouselData } from "../../../utils/carouselData"
import { colors } from "../../../utils/colors"
import Marquee from "react-fast-marquee"

const useStyles = makeStyles(theme => ({
  sliderPaper: {
    padding: 25,
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: `10px 10px 2px 0px ${colors.primary}`,
    border: "2px solid #000",
    width: "250px",
    height: "120px",
    margin: "10px 0px 10px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
}))
export default function SmallCarousel() {
  const classes = useStyles()

  return (
    <>
      <Marquee gradient={false} speed={50}>
        {smallCarouselData.map((item, index) => {
          return (
            <Paper className={classes.sliderPaper} square={true} key={index}>
              <img src={item.logo} alt="slider" style={{ margin: 0 }} />
            </Paper>
          )
        })}
      </Marquee>
    </>
  )
}
