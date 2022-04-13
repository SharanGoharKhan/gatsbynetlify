import React from "react"
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
import { StaticImage } from "gatsby-plugin-image"
import "./Ecommero.css"
import { colors } from "../../utils/colors"

const useStyles = makeStyles(theme => ({
  divider: {
    backgroundColor: colors.blue2,
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
    backgroundColor: "transparent",
    borderColor: colors.orange,
    borderRadius: 10,
    borderWidth: 1,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
}))

const Ecommero = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))
  const classes = useStyles()
  return (
    <div className="lightDiv">
      <Grid container justify="center" alignItems="center">
        <Grid
          style={{ textAlign: matches ? "start" : "center" }}
          item
          xs={12}
          sm={5}
        >
          <Typography
            style={{
              fontWeight: "bolder",
              fontSize: "4.5vmin",
              fontFamily: "Montserrat",
            }}
            variant="h3"
            gutterBottom
          >
            Open source Project -{" "}
            <Typography
              style={{
                fontStyle: "italic",
                display: "inline",
                fontWeight: "bold",
                fontSize: "4.5vmin",
                fontFamily: "Montserrat",
              }}
            >
              Ecommero
            </Typography>
          </Typography>
          <Typography
            style={{
              color: colors.lightGray,
              fontSize: "2.5vmin",
              fontFamily: "Poppins",
              marginTop: 30,
            }}
          >
            We try to give back to community that has given us so much. We build
            an open source shopping cart application project that is a full
            fledge project. Includes dashboard, works both on Android and iOS
            live on PlayStore and AppStore.
          </Typography>
          <Link
            href="https://github.com/Ninjas-Code-official/shopping-cart"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              color={colors.orange}
              size="large"
              className={classes.button}
              endIcon={<ArrowForwardIcon style={{ color: colors.orange }} />}
            >
              <Typography
                style={{
                  fontSize: "3vmin",
                  color: colors.orange,
                  fontFamily: "Poppins",
                  textTransform: "initial",
                }}
              >
                Check On Github{" "}
              </Typography>
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ textAlign: matches ? "right" : "center" }}
          sm={6}
        >
          <StaticImage
            style={{ width: "70vmin", height: "70vmin" }}
            src="../../images/ecommero.png"
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Ecommero
