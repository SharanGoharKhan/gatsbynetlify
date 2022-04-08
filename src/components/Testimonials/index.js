import React, { useRef } from "react"
import StarIcon from "@material-ui/icons/Star"
import {
  Divider,
  Button,
  Typography,
  Card,
  Box,
  useMediaQuery,
  CardActionArea,
  Avatar,
  CardContent,
  makeStyles,
  Grid,
  GridList,
  GridListTile,
  IconButton,
} from "@material-ui/core"
import ArrowLeftIcon from "../../svg/arrowLeftIcon"
import ArrowRightIcon from "../../svg/arrowRightIcon"
import { colors } from "../../utils/colors"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: 40,
    height: "fit-content",
    marginBottom: 100,
    backgroundColor: theme.palette.background.paper,
    WebkitOverflowScrolling: "touch",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateX(0) translateZ(0)",
  },
  titleText: {
    color: colors.darkBlue,
    fontWeight: 600,
    padding: 20,
    fontSize: "6vmin",
    fontFamily: "Montserrat",
  },
  media: {
    height: "10vmin",
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  BoxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "3.8vmin",
  },
  cardTitle: {
    color: colors.darkBlue,
    fontFamily: "Montserrat",
    fontSize: "3.8vmin",
  },
  cardSubTitle: {
    color: colors.dullBlue,
    letterSpacing: 1,
    lineHeight: "4vmin",
    fontFamily: "Montserrat",
    fontSize: "2vmin",
  },
  divider: {
    margin: theme.spacing(3),
  },
  star: {
    color: colors.yellow,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

const tileData = [
  {
    name: "Crystal Rose",
    designation: "Founder at Sense.chat",
    quote:
      "Ninjas Code has the best software developers I have worked with. They jump right into codebase without too much hand holding. They are responsive and professional. Having experience with multiple agencies. I can confidently say Ninjas Code are simply the best.",
    img: "../../images/crystal.jpeg",
  },
  {
    name: "Raleigh Melancon",
    designation: "Founder at StylizeNow",
    quote: `Thanks to Ninjas Code, the app was published in both the App Store and Google Play. The team communicated via Slack during the engagement. They delivered the project on time, meeting the client's expectations.`,
    img: "../../images/crystal.jpeg",
  },
  {
    name: "Kevin Sun",
    designation: "CTO, Bundl Technologies",
    quote: `The team was excellent at meeting the needs of a growing startup. They efficiently delivered a functional MVP that has gained over 100 users after a month in the app store. Their investment in the project and driven attitude were highlights.`,
    img: "../../images/crystal.jpeg",
  },
]

const Testimonial = () => {
  const classes = useStyles()

  const ref = useRef([])

  const matches = useMediaQuery("(min-width:800px)")

  function scroll(scrollOffset) {
    ref.current.scrollTo({
      left: ref.current.scrollLeft + scrollOffset,
      behavior: "smoeaseInOutQuartoth",
    })
  }

  return (
    <Grid
      id="test"
      container
      justify="center"
      alignItems="center"
      style={{ textAlign: "center", width: "100%", padding: 10, marginTop: 30 }}
      spacing={3}
    >
      <Grid item xs={12} sm={12} md={4}>
        <Button
          variant="contained"
          size="large"
          style={{
            color: colors.blue2,
            fontSize: "3vmin",
            fontFamily: "Montserrat",
            backgroundColor: colors.paleWhite,
          }}
        >
          <Typography
            style={{
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "20px",
            }}
          >
            Testimonials
          </Typography>
        </Button>
        <Typography className={classes.titleText} variant="h3" gutterBottom>
          WHAT OUR CLIENTS TELL ABOUT US
        </Typography>
        <IconButton onClick={() => scroll(-400)}>
          <div
            style={{
              backgroundColor: colors.white,
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              width: "70px",
              height: "70px",
              borderRadius: "40px",
              boxShadow: "-10px 10px 20px #e6e5e3",
            }}
          >
            <ArrowLeftIcon />
          </div>
        </IconButton>
        <IconButton onClick={() => scroll(400)}>
          <div
            style={{
              backgroundColor: colors.white,
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              width: "70px",
              height: "70px",
              borderRadius: "40px",
              boxShadow: "-10px 10px 20px #e6e5e3",
            }}
          >
            <ArrowRightIcon />
          </div>
        </IconButton>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <div className={classes.root}>
          <GridList
            cellHeight={"auto"}
            className={classes.gridList}
            ref={ref}
            cols={matches ? 2.2 : 1.2}
          >
            {tileData.map((tile, index1) => (
              <GridListTile key={index1}>
                <Card elevation={5} style={{ width: "90%" }}>
                  <CardActionArea>
                    <CardContent>
                      <Box component="span" className={classes.BoxContainer}>
                        <Avatar
                          alt={tile.name}
                          src={tile.img}
                          className={classes.large}
                        />
                        <Box component="span" m={1}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            className={classes.cardTitle}
                            component="h2"
                          >
                            {tile.name}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            className={classes.cardSubTitle}
                            component="p"
                          >
                            {tile.designation}
                          </Typography>
                        </Box>
                      </Box>
                      <Divider className={classes.divider} variant="middle" />
                      <Typography
                        variant="body2"
                        className={classes.cardSubTitle}
                        color="textSecondary"
                        component="p"
                      >
                        {tile.quote}
                      </Typography>
                    </CardContent>
                    <Box
                      component="span"
                      className={classes.BoxContainer}
                      m={1}
                    >
                      <Box component="span">
                        <StarIcon className={classes.star} />
                        <StarIcon className={classes.star} />
                        <StarIcon className={classes.star} />
                        <StarIcon className={classes.star} />
                        <StarIcon className={classes.star} />
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Grid>
    </Grid>
  )
}

export default Testimonial
