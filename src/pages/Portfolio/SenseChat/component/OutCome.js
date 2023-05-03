import React from "react"
import { Typography, Grid, useTheme } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

const OutComeAndBenefits = props => {
  const theme = useTheme()

  const classes = {
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
      marginTop: "0px",
      padding: "40px",
    },
    images1: {
      width: "80%",
      margin: "auto",
      marginTop: "40px",
    },
    paper: {
      padding: "16px",
      elevation: "1px",
      height: "150px",
      width: "250px",
      alignContent: "center",
      color: theme.palette.text.secondary,
    },
    imagesContainer: {
      textAlign: "center",
      marginTop: "40px",
    },
  }

  return (
    <>
      <div style={classes.root}>
        <div
          style={{
            backgroundColor: "#7F7FFF",
            padding: "5px",
            width: "fit-content",
            borderRadius: "3px",
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
            marginTop: "20px",
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
            marginTop: "10px",
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
        <div style={classes.imagesContainer}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={3}>
              <StaticImage
                style={{ width: "36vmin", paddingTop: "50px" }}
                src="../../../../images/Mockup7.svg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StaticImage
                style={{ width: "36vmin", paddingTop: "50px" }}
                src={"../../../../images/Mockup8.svg"}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StaticImage
                style={{ width: "36vmin", paddingTop: "50px" }}
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
