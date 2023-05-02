import React from "react"
import { Typography, Grid, useTheme } from "@mui/material"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../../components/seo"

const Dashboard = props => {
  const theme = useTheme()

  const classes = {
    divider: {
      backgroundColor: "#175CFF",
      margin: "auto",
      marginTop: "40px",
      width: "74px",
      height: "2px",
    },
    root: {
      flexGrow: 1,
      backgroundColor: "#fff",
      height: "fit-content",
      marginTop: 80,
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
  }

  return (
    <>
     <Seo
        title="Dashboard Features"
        description="Dashboard features for enatega "
      />
      <div className={classes.root}>
        <Grid container direction="row">
          <Grid item xs={12} lg={7}>
            <Typography
              variant="h5"
              gutterBottom
              style={{
                textAlign: "center",
                fontSize: "200%",
                lineHeight: "60px",
                marginTop: 10,
                letterSpacing: -1,
                fontFamily: "Montserrat",
                fontWeight: "700",
              }}
            >
              Dashboard Features
            </Typography>
            <Grid container direction="row" justify="center">
              <Grid item xs={1}>
                <CheckCircleOutlineIcon
                  style={{ fontSize: 25, color: "#6FCF96" }}
                />
              </Grid>
              <Grid item xs={9} lg={5}>
                <Typography
                  style={{
                    lineHeight: "25px",
                    fontSize: 15,
                    color: "#333333",
                    fontFamily: "Montserrat",
                  }}
                >
                  Roles based access
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
              <Grid item xs={1}>
                <CheckCircleOutlineIcon
                  style={{ fontSize: 25, color: "#6FCF96" }}
                />
              </Grid>
              <Grid item xs={9} lg={5}>
                <Typography
                  style={{
                    lineHeight: "25px",
                    fontSize: 15,
                    color: "#333333",
                    fontFamily: "Montserrat",
                  }}
                >
                  Zone Management
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
              <Grid item xs={1}>
                <CheckCircleOutlineIcon
                  style={{ fontSize: 25, color: "#6FCF96" }}
                />
              </Grid>
              <Grid item xs={9} lg={5}>
                <Typography
                  style={{
                    lineHeight: "25px",
                    fontSize: 15,
                    color: "#333333",
                    fontFamily: "Montserrat",
                  }}
                >
                  Coupons Management
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
              <Grid item xs={1}>
                <CheckCircleOutlineIcon
                  style={{ fontSize: 25, color: "#6FCF96" }}
                />
              </Grid>
              <Grid item xs={9} lg={5}>
                <Typography
                  style={{
                    lineHeight: "25px",
                    fontSize: 15,
                    color: "#333333",
                    fontFamily: "Montserrat",
                  }}
                >
                  Riders Management
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
              <Grid item xs={1}>
                <CheckCircleOutlineIcon
                  style={{ fontSize: 25, color: "#6FCF96" }}
                />
              </Grid>
              <Grid item xs={9} lg={5}>
                <Typography
                  style={{
                    lineHeight: "25px",
                    fontSize: 15,
                    color: "#333333",
                    fontFamily: "Montserrat",
                  }}
                >
                  Restaurant Management
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
              <Grid item xs={1}>
                <CheckCircleOutlineIcon
                  style={{ fontSize: 25, color: "#6FCF96" }}
                />
              </Grid>
              <Grid item xs={9} lg={5}>
                <Typography
                  style={{
                    lineHeight: "25px",
                    fontSize: 15,
                    color: "#333333",
                    fontFamily: "Montserrat",
                  }}
                >
                  Multi Language Dashboard
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="flex-end">
              <Grid item xs={1}>
                <CheckCircleOutlineIcon
                  style={{ fontSize: 25, color: "#6FCF96" }}
                />
              </Grid>
              <Grid item xs={10} lg={8}>
                <Typography
                  style={{
                    lineHeight: "25px",
                    fontSize: 15,
                    color: "#333333",
                    fontFamily: "Montserrat",
                  }}
                >
                  Dispatcher module for managing orders, assign
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid style={{ textAlign: "center" }} item xs={12} lg={5}>
            <StaticImage
              alt="dashboard"
              style={{ width: "70vmin" }}
              src={"../../../images/dashboard.png"}
            />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Dashboard
