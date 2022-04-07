import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/bundle"
import "./styles.css"
import { Paper, makeStyles, useMediaQuery, useTheme } from "@material-ui/core"
import { smallCarouselData } from "../../../utils/carouselData"
import SwiperCore, { FreeMode, Pagination, Autoplay } from "swiper"
import { colors } from "../../../utils/colors"

SwiperCore.use([Autoplay])
const useStyles = makeStyles(theme => ({
  mySwiper: {
    "& > *": {
      overflow: "visible !important",
    },
    "& .swiper-pagination": {
      display: "none",
    },
  },
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
  },
}))
export default function SmallCarousel() {
  const classes = useStyles()
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("md"))
  const extraSmall = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      <Swiper
        slidesPerView={extraSmall ? 1 : small ? 3 : 4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={classes.mySwiper}
        autoplay={{ delay: 500 }}
        loop={true}
      >
        {smallCarouselData.map((item, index) => {
          return (
            <SwiperSlide>
              <Paper className={classes.sliderPaper} square={true} key={index}>
                <img src={item.logo} alt="slider" style={{ margin: 0 }} />
              </Paper>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
