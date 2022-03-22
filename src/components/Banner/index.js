import React from "react"
import {
  Grid,
  Paper,
  Typography,
  Box,
  Link as MaterialUILink,
  useMediaQuery,
} from "@material-ui/core"
import useStyles from "./styles"
import BannerIcons from "../BannerIcons"
import backgroundWeb from "../../images/bg.svg"

export default function Banner({ titleMain, titleSecondary, subTitle, image }) {
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:600px)")
  return (
    <div id="Home" className={classes.background}>
      <img src={backgroundWeb} alt="service" className={classes.bg} />
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.grid}
        spacing={0}
      >
        <Grid
          style={{ textAlign: matches ? "start" : "center" }}
          item
          xs={12}
          md={6}
        >
          <Typography variant="h3" gutterBottom className={classes.title}>
            {titleMain}
            <br />
            {titleSecondary}
          </Typography>
          <Typography variant="h3" gutterBottom className={classes.subtitle}>
            {subTitle}
          </Typography>
          <BannerIcons />
        </Grid>
        {image && (
          <Grid
            style={{ textAlign: matches ? "end" : "center" }}
            item
            xs={12}
            md={6}
          >
            <img
              src={image}
              alt="services"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: 500,
                marginTop: matches ? 0 : 10,
              }}
            />
          </Grid>
        )}
      </Grid>
    </div>
  )
}
