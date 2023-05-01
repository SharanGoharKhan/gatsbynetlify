import React from "react"
import "./FeaturedWork.css"
import {
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { Link } from "gatsby"
import { colors } from "../../utils/colors"

const FeaturedWorkComponent = props => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))

  const classes = {
    divider: {
      backgroundColor: colors.blue,
      margin: "auto",
      marginTop: 0,
      width: "74px",
      height: "2px",
    },
    paper: {
      padding: 16,
      color: theme.palette.text.secondary,
    },
    button: {
      marginTop: 24,
      backgroundColor: colors.blue2,
      borderRadius: 10,
      padding: 8,
      marginBottom: 32,
    },
  }

  return (
    <div className="featureLightDiv">
      <Grid container justify="center" alignItems="center">
        <Grid
          style={{ textAlign: matches ? "start" : "center" }}
          item
          xs={12}
          sm={4}
        >
          <Typography
            style={{
              fontWeight: 700,
              fontSize: "4.5vmin",
              fontFamily: "Montserrat",
            }}
            variant="h3"
            gutterBottom
          >
            {props.heading}
          </Typography>
          <Typography
            style={{
              color: colors.dullBlue,
              fontSize: "2.5vmin",
              fontFamily: "Poppins",
              marginTop: 30,
            }}
          >
            {props.details}
          </Typography>
          <Link style={{ textDecoration: "none" }} to={`/${props.route}`}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              endIcon={<ArrowForwardIosIcon />}
            >
              <Typography
                style={{
                  fontSize: "3vmin",
                  fontFamily: "Poppins",
                  textTransform: "initial",
                }}
              >
                Case Study{" "}
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ textAlign: matches ? "right" : "center" }}
          sm={7}
        >
          <img
            alt={props.heading}
            style={{ borderWidth: 1, width: "80vmin", height: "auto" }}
            src={props.src}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default FeaturedWorkComponent
