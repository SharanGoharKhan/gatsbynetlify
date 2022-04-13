import React from "react"
import "./FeaturedWork.css"
import {
  Typography,
  makeStyles,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { Link } from "gatsby"
import { colors } from "../../utils/colors"

const useStyles = makeStyles(theme => ({
  divider: {
    backgroundColor: colors.blue,
    margin: "auto",
    marginTop: theme.spacing(0),
    width: "74px",
    height: "2px",
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  button: {
    marginTop: theme.spacing(3),
    backgroundColor: colors.blue2,
    borderRadius: 10,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
}))

const FeaturedWorkComponent = props => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))
  const classes = useStyles()
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
              endIcon={<ArrowForwardIcon />}
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
