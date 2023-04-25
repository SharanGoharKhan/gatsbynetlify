import React from "react"
import {
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./Ecommero.css"
import { colors } from "../../utils/colors"

const Ecommero = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))

  const classes = {
    divider: {
      backgroundColor: colors.blue2,
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
      backgroundColor: "transparent",
      borderColor: colors.orange,
      borderRadius: 10,
      borderWidth: 1,
      padding: 8,
      marginBottom: 32,
    },
  }
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
