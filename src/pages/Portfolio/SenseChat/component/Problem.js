import React from "react"
import { Typography, Grid, useTheme } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

const Problem = props => {
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
      padding: 40,
    },
    images1: {
      width: "80%",
      margin: "auto",
      marginTop: 40,
    },
    paper: {
      padding: 16,
      elevation: 1,
      height: 150,
      width: 250,
      alignContent: "center",
      color: theme.palette.text.secondary,
    },
    imagesContainer: {
      textAlign: "center",
      marginTop: 40,
    },
  }

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
          <Typography style={{ color: "#fff" }}>2. Problem</Typography>
        </div>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            lineHeight: "5vmin",
            marginTop: 20,
            fontFamily: "Montserrat",
            fontSize: "5vmin",
            fontWeight: "bolder",
          }}
        >
          Making a software architecture that is robust and scalabe
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 10,
            lineHeight: "4vmin",
            fontFamily: "Montserrat",
            fontSize: "2.5vmin",
          }}
        >
          Making a software product is not just about just making a functional
          product. This was the second iteration of Sense and we wanted to make
          sure that the mistakes made in the first iteration are not repeated,
          we needed to meet the following criteria:
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 10,
            fontFamily: "Montserrat",
            lineHeight: "4vmin",
            fontSize: "2.5vmin",
          }}
        >
          <Typography
            style={{ fontWeight: "bold", fontSize: "3vmin", display: "inline" }}
          >
            {" "}
            *{" "}
          </Typography>
          The codebase should have 100% complete code coverage using test driven
          development
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 10,
            lineHeight: "4vmin",
            fontFamily: "Montserrat",
            fontSize: "2.5vmin",
          }}
        >
          <Typography
            style={{ fontWeight: "bold", fontSize: "3vmin", display: "inline" }}
          >
            {" "}
            ●{" "}
          </Typography>{" "}
          Using react native the UI should be performant compared to pure native
          performance with pixel perfect design on both devices Android and iOS
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 10,
            lineHeight: "4vmin",
            fontFamily: "Montserrat",
            fontSize: "2.5vmin",
          }}
        >
          <Typography
            style={{ fontWeight: "bold", fontSize: "3vmin", display: "inline" }}
          >
            {" "}
            ●{" "}
          </Typography>{" "}
          Codestructureshouldbeinawaythatmultipleteammembercould work on it
          without blocking another team member
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 10,
            lineHeight: "4vmin",
            fontFamily: "Montserrat",
            fontSize: "2.5vmin",
          }}
        >
          <Typography
            style={{ fontWeight: "bold", fontSize: "3vmin", display: "inline" }}
          >
            {" "}
            ●{" "}
          </Typography>{" "}
          Technologies should work on all platforms and should be generic
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 10,
            lineHeight: "4vmin",
            fontFamily: "Montserrat",
            fontSize: "2.5vmin",
          }}
        >
          <Typography
            style={{ fontWeight: "bold", fontSize: "3vmin", display: "inline" }}
          >
            {" "}
            ●{" "}
          </Typography>{" "}
          Leveraging typescript the architecture should be designed in Clean
          Architecture pattern
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 10,
            lineHeight: "4vmin",
            fontFamily: "Montserrat",
            fontSize: "2.5vmin",
          }}
        >
          <Typography
            style={{ fontWeight: "bold", fontSize: "3vmin", display: "inline" }}
          >
            {" "}
            ●{" "}
          </Typography>{" "}
          Knowing that this was the second iteration there was always a strive
          to make the product better than the previous iteration writing tests
          for every code so we have battle tested code.
        </Typography>
        <div className={classes.imagesContainer}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={3}>
              <StaticImage
                style={{ width: "36vmin" }}
                src={"../../../../images/Mockup1.svg"}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StaticImage
                style={{ width: "36vmin" }}
                src={"../../../../images/Mockup2.svg"}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StaticImage
                style={{ width: "36vmin" }}
                src={"../../../../images/Mockup1.svg"}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Problem
