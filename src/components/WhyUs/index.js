import React from "react"
import { Typography, Grid, Box, useTheme } from "@mui/material"
import Speedometer from "../../svg/speedometer"
import BadgeIcon from "../../svg/badgeIcon"
import TimeIcon from "../../svg/timeIcon"
import ThunderIcon from "../../svg/thunderIcon"
import { colors } from "../../utils/colors"

const WhyUs = () => {
  const theme = useTheme()

  const classes = {
    paper: {
      padding: 16,
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    background: {
      marginTop: 48,
      backgroundColor: colors.blue2,
      height: "fit-content",
      textAlign: "center",
      padding: 48,
    },
    grid: {
      marginTop: 40,
    },
    subTitle: {
      fontWeight: 400,
      padding: 24,
      width: "100%",
      lineHeight: "3vmin",
      fontSize: "3vmin",
      margin: "auto",
      color: colors.white,
      fontFamily: "Montserrat",
    },
    image: {
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: colors.white,
      borderRadius: 10,
      boxShadow: "2px -3vmin 1vmin #faf9f7",
      display: "flex",
      height: "100px",
      width: "127px",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }

  return (
    <Box id="whyus" sx={classes.background}>
      <Typography
        style={{
          color: colors.white,
          fontFamily: "Montserrat",
          fontSize: "5vmin",
          fontWeight: "700",
        }}
        variant="h4"
      >
        Why Us
      </Typography>
      <Grid container spacing={3} justify="center" sx={classes.grid}>
        <Grid item xs={6} sm={6} md={6} lg={3} sx={classes.container}>
          <Box sx={classes.image}>
            <Speedometer />
          </Box>
          <Box sx={classes.subTitle}>UX driven approach</Box>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3} sx={classes.container}>
          <Box sx={classes.image}>
            <BadgeIcon />
          </Box>
          <Box sx={classes.subTitle}>1 month time to market</Box>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3} sx={classes.container}>
          <Box sx={classes.image}>
            <TimeIcon />
          </Box>
          <Box sx={classes.subTitle}>$10,000 costs limit</Box>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3} sx={classes.container}>
          <Box sx={classes.image}>
            <ThunderIcon />
          </Box>
          <Box sx={classes.subTitle}>Complete process transparency</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default WhyUs
