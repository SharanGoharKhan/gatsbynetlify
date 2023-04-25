import React from "react"
import { Grid } from "@mui/material"
import EasyEats from "../../images/easyEats.png"
import StylizeNow from "../../svg/Stylize"
import Vinifynd from "../../svg/easyEats"
import { colors } from "../../utils/colors"

const Logos = () => {
  const classes = {
    container: {
      backgroundColor: colors.whiteGray,
      padding: 48,
      marginTop: 80,
      height: "fit-content",
    },
    logo: {
      width: "20vmin",
    },
  }

  return (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item style={{ textAlign: "center" }} xs={12} sm={6} md={3} lg={2}>
          <Vinifynd />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <StylizeNow />
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <img src={EasyEats} alt="easy-eats" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Logos
