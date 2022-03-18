import React, { useEffect } from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  Grid,
  Paper,
  useMediaQuery,
  Box,
} from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"
import { makeStyles } from "@material-ui/core/styles"
import "./TopBar.css"
import { Link } from "react-scroll"
import { Link as GatsbyLink } from "gatsby"
import Logo from "../../images/NinjasCode.svg"
import LogoBlack from "../../images/NinjasCodeBlack.svg"
import BarChartIcon from "@material-ui/icons/BarChart"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#070707",
    fontFamily: "Montserrat",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    alignItems: "center",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    backgroundColor: "inherit",
  },
  boxContainer: {
    background: "linear-gradient(to bottom, #179AFB 0%, #301E5B 100%)",
    height: "100%",
    width: "100%",
  },
  coolLink: {
    display: "inline-block",
    color: "#000",
    textDecoration: "none",
  },
  textHeading: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    margin: "auto",
  },
  icon: {
    color: "#fff",
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

const TopBar = props => {
  console.log("props", props)
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const mobileMenuId = "primary-search-account-menu-mobile"
  const matches = useMediaQuery("(min-width:960px)")

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  useEffect(() => {
    if (matches) {
      handleMobileMenuClose()
    }
  })

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const renderMobileMenu = (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      closeAfterTransition
      onBackdropClick={handleMobileMenuClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isMobileMenuOpen}>
        <Box component="span" m={1} className={classes.boxContainer}>
          <Box style={{ textAlign: "end", paddingTop: "2%" }}>
            <IconButton aria-label="close" onClick={handleMobileMenuClose}>
              <ClearIcon className={classes.icon} fontSize="large" />
            </IconButton>
          </Box>
          <Box style={{ width: "50%", margin: "auto", height: "100%" }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <Link
                    href={"#"}
                    className="cool-link"
                    onClick={handleMobileMenuClose}
                    activeClass="active"
                    to="feature"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1500}
                  >
                    Services
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <Link
                    href={"#"}
                    className="cool-link"
                    onClick={handleMobileMenuClose}
                    activeClass="active"
                    to="whyus"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1500}
                  >
                    Portfolio
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <Link
                    href={"#"}
                    className="cool-link"
                    onClick={handleMobileMenuClose}
                    activeClass="active"
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1500}
                  >
                    Career
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <Link
                    href={"#"}
                    className="cool-link"
                    onClick={handleMobileMenuClose}
                    activeClass="active"
                    to="test"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1500}
                  >
                    Team
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <Link
                    href={"#"}
                    style={{
                      borderWidth: 1,
                      borderRadius: 5,
                      borderStyle: "solid",
                      padding: 8,
                    }}
                    className="cool-link"
                    onClick={handleMobileMenuClose}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={1500}
                  >
                    Contact Us
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
  return (
    <div className={classes.root}>
      <AppBar
        style={{
          background: props.barColor,
          width: "100%",
        }}
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Link
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className={classes.root}
          >
            <IconButton className={classes.title}>
              <GatsbyLink to="/">
                {" "}
                <img
                  alt="ninjas code"
                  style={{ width: "30vmin", marginTop: 20 }}
                  src={props.fontColor === "#fff" ? Logo : LogoBlack}
                />
              </GatsbyLink>
            </IconButton>
          </Link>
          <div className={classes.sectionDesktop}>
            {props.barColor == "#179AFB" ? (
              <>
                <Link
                  style={{ color: props.fontColor }}
                  className={
                    props.fontColor === "#fff"
                      ? "button-link"
                      : "button-link-black"
                  }
                  href="/"
                  activeClass="active"
                  to="feature"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  Services
                </Link>
                <Link
                  style={{ color: props.fontColor }}
                  className={
                    props.fontColor === "#fff"
                      ? "button-link"
                      : "button-link-black"
                  }
                  href="#"
                  activeClass="active"
                  to="whyus"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  Portfolio
                </Link>
                <Link
                  style={{ color: props.fontColor }}
                  className={
                    props.fontColor === "#fff"
                      ? "button-link"
                      : "button-link-black"
                  }
                  href="#"
                  activeClass="active"
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  Career
                </Link>
                <Link
                  style={{ color: props.fontColor }}
                  className={
                    props.fontColor === "#fff"
                      ? "button-link"
                      : "button-link-black"
                  }
                  href="#"
                  activeClass="active"
                  to="test"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  Team
                </Link>
                <Link
                  style={{
                    color: props.fontColor,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderStyle: "solid",
                    padding: 8,
                  }}
                  className={
                    props.fontColor === "#fff"
                      ? "button-link"
                      : "button-link-black"
                  }
                  href="#"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-30}
                  duration={500}
                >
                  Contact Us
                </Link>
              </>
            ) : (
              <>
                <a
                  style={{ color: props.fontColor }}
                  className={
                    props.fontColor === "#fff"
                      ? "button-link"
                      : "button-link-black"
                  }
                  href="/#ourMainProducts"
                >
                  Our Main Producs
                </a>
                <a
                  style={{ color: props.fontColor }}
                  className={
                    props.fontColor === "#fff"
                      ? "button-link"
                      : "button-link-black"
                  }
                  href="/#whyUs"
                >
                  Why Us Section
                </a>
                <a
                  style={{ color: props.fontColor }}
                  className={
                    props.fontColor === "#fff"
                      ? "button-link"
                      : "button-link-black"
                  }
                  href="/#faqS"
                >
                  FAQ's
                </a>
                <a
                  style={{ color: props.fontColor }}
                  className={
                    props.fontColor === "#fff"
                      ? "button-link"
                      : "button-link-black"
                  }
                  href="/#testimonial"
                >
                  Testimonial
                </a>
                <a
                  style={{
                    color: props.fontColor,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderStyle: "solid",
                    padding: 8,
                  }}
                  className={
                    props.fontColor === "#fff"
                      ? "button-link"
                      : "button-link-black"
                  }
                  href="/#contactUs"
                >
                  Contact Us
                </a>
              </>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <BarChartIcon
                style={{
                  color: props.fontColor,
                  transform: "rotate(-90deg)",
                  fontSize: 30,
                }}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  )
}

export default TopBar
