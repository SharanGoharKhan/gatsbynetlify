import React from "react"
import { Typography, makeStyles, Grid } from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  divider: {
    backgroundColor: "#175CFF",
    margin: "auto",
    marginTop: "20px",
    width: "74px",
    height: "3px",
  },
  root: {
    flexGrow: 1,
    height: "fit-content",
    marginTop: theme.spacing(0),
    padding: theme.spacing(5),
  },
  images1: {
    width: "80%",
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    elevation: 1,
    height: 150,
    width: 250,
    alignContent: "center",
    color: theme.palette.text.secondary,
  },
  imagesContainer: {
    textAlign: "center",
    marginTop: theme.spacing(5),
  },
}))

const OutComeAndBenefits = props => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <div
          style={{
            backgroundColor: "#7F7FFF",
            padding: 5,
            width: "fit-content",
            borderRadius: 3,
          }}
        >
          <Typography style={{ color: "#fff" }}>
            4. OUTCOME AND BENEFITS
          </Typography>
        </div>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            lineHeight: "30px",
            marginTop: 20,
            fontFamily: "Montserrat",
            fontSize: "5vmin",
            fontWeight: "700",
          }}
        >
          A stable solution with an excellent user experience
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 10,
            lineHeight: "30px",
            fontFamily: "Montserrat",
            fontSize: "2vh",
          }}
        >
          The result of our work was achieving a stable solution with a low
          error rate that allowed to provide a flawless user experience.
          Moreover, it provided the ability to set up the WiFi network or the
          physical device without leaving the app and manually connect to the
          device’s hotspot. It resulted in making the whole user onboarding
          quick and effortless.{" "}
        </Typography>
        {/* <Typography variant="h5" gutterBottom style={{ marginTop: 10, fontFamily: 'Montserrat', fontSize: 16 }}>the user should never have to leave the app</Typography> */}
        {/* <Typography variant="h5" gutterBottom style={{ marginTop: 10, fontFamily: 'Montserrat', fontSize: 16 }}>The onboarding should behave similarly on both platforms - iOS and Androtechnologies we use for the solution must be available on all users’ mobile devices.</Typography> */}
        <div className={classes.imagesContainer}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={3}>
              <StaticImage
                style={{ width: "36vmin" }}
                src="../../../../images/Mockup7.svg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StaticImage
                style={{ width: "36vmin" }}
                src={"../../../../images/Mockup8.svg"}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StaticImage
                style={{ width: "36vmin" }}
                src="../../../../images/Mockup9.svg"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default OutComeAndBenefits
