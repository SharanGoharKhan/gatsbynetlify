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
  Typography,
} from "@material-ui/core"
import ClearIcon from "@material-ui/icons/Clear"
import { makeStyles } from "@material-ui/core/styles"
import "./TopBar.css"
import { Link } from "react-scroll"
import { Link as GatsbyLink } from "gatsby"
import Logo from "../../images/NinjasCode.svg"
import LogoBlack from "../../images/NinjasCodeBlack.svg"
import BarChartIcon from "@material-ui/icons/BarChart"
import { colors } from "../../utils/colors"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "visible",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: colors.glassBlack,
    fontFamily: "Montserrat",
  },
  sectionDesktop: {
    display: "none",
    overflow: "visible",
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
    height: "100%",
    width: "100%",
  },
  coolLink: {
    display: "inline-block",
    color: colors.black,
    textDecoration: "none",
  },
  textHeading: {
    color: colors.white,
    fontWeight: "700",
    textAlign: "center",
    margin: "auto",
  },
  icon: {
    color: colors.white,
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

const services = [
  { name: "IOS Developement", path: "/Services/ios" },
  { name: "Android Development", path: "/Services/android" },
  { name: "Web Development", path: "/Services/web" },
  { name: "Desktop App Development", path: "/Services/desktop" },
  { name: "UI/UX Rendering", path: "/Services/ux" },
  { name: "Software for Startups", path: "/Services/saas" },
]
const timeoutLength = 200
const TopBar = props => {
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const mobileMenuId = "primary-search-account-menu-mobile"
  const matches = useMediaQuery("(min-width:960px)")
  const [anchorElServices, setAnchorElServices] = React.useState(null)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }
  const handleOpenServiceMenu = e => {
    setAnchorElServices(e.currentTarget)
  }
  const handleCloseServiceMenu = () => {
    setTimeout(() => {
      setAnchorElServices(null)
    }, timeoutLength)
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
        <Box
          component="span"
          m={1}
          className={classes.boxContainer}
          style={{
            background: props?.mobileGradient
              ? props.mobileGradient
              : `linear-gradient(to bottom, ${colors.primary} 0%, ${colors.purple} 100%)`,
          }}
        >
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
                  <GatsbyLink
                    style={{ color: props.fontColor }}
                    className={
                      props.fontColor === colors.white
                        ? "cool-link"
                        : "cool-link-black"
                    }
                    activeClassName="active"
                    to="/Services"
                  >
                    Services
                  </GatsbyLink>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <GatsbyLink
                    style={{ color: props.fontColor }}
                    className={
                      props.fontColor === colors.white
                        ? "cool-link"
                        : "cool-link-black"
                    }
                    activeClassName="active"
                    to="/Portfolio"
                  >
                    Portfolio
                  </GatsbyLink>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <GatsbyLink
                    style={{ color: props.fontColor }}
                    className={
                      props.fontColor === colors.white
                        ? "cool-link"
                        : "cool-link-black"
                    }
                    activeClassName="active"
                    to="/Career"
                  >
                    Career
                  </GatsbyLink>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <GatsbyLink
                    style={{ color: props.fontColor }}
                    className={
                      props.fontColor === colors.white
                        ? "cool-link"
                        : "cool-link-black"
                    }
                    activeClassName="active"
                    to="/Team"
                  >
                    Team
                  </GatsbyLink>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paper}>
                  <GatsbyLink
                    style={{
                      color: props.fontColor,
                      borderWidth: 1,
                      borderRadius: 5,
                      borderStyle: "solid",
                      padding: 8,
                    }}
                    className={
                      props.fontColor === colors.white
                        ? "cool-link"
                        : "cool-link-black"
                    }
                    activeClass="active"
                    to="/#contact"
                    onClick={handleMobileMenuClose}
                  >
                    Contact Us
                  </GatsbyLink>
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
          overflow: "visible",
        }}
        position={props?.position ? props.position : "static"}
        elevation={0}
      >
        <Toolbar style={{ overflow: "visible" }}>
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
                  src={props.fontColor === colors.white ? Logo : LogoBlack}
                />
              </GatsbyLink>
            </IconButton>
          </Link>
          <div className={classes.sectionDesktop}>
            <GatsbyLink
              style={{
                color: props.fontColor,
                position: "relative",
                overflow: "visible",
              }}
              className={
                props.fontColor === colors.white
                  ? "button-link"
                  : "button-link-black"
              }
              activeClassName="active"
              to="/Services"
              onMouseOver={handleOpenServiceMenu}
            >
              Services
              {anchorElServices && (
                <Box
                  className="menu-services"
                  onMouseLeave={handleCloseServiceMenu}
                >
                  {services.map(setting => (
                    <GatsbyLink
                      to={setting.path}
                      key={setting}
                      style={{
                        color: props.fontColor,
                        textDecoration: "none",
                      }}
                    >
                      <Box onClick={handleCloseServiceMenu} pl={3}>
                        <Typography
                          variant="body2"
                          textAlign="center"
                          style={{ color: props.subMenuText }}
                        >
                          {setting.name}
                        </Typography>
                      </Box>
                    </GatsbyLink>
                  ))}
                </Box>
              )}
            </GatsbyLink>

            <GatsbyLink
              style={{ color: props.fontColor }}
              className={
                props.fontColor === colors.white
                  ? "button-link"
                  : "button-link-black"
              }
              activeClassName="active"
              to="/Portfolio"
            >
              Portfolio
            </GatsbyLink>

            <GatsbyLink
              style={{ color: props.fontColor }}
              className={
                props.fontColor === colors.white
                  ? "button-link"
                  : "button-link-black"
              }
              activeClassName="active"
              to="/Career"
            >
              Career
            </GatsbyLink>
            <GatsbyLink
              style={{ color: props.fontColor }}
              className={
                props.fontColor === colors.white
                  ? "button-link"
                  : "button-link-black"
              }
              activeClassName="active"
              to="/Team"
            >
              Team
            </GatsbyLink>
            {props?.home ? (
              <Link
                style={{
                  color: props.fontColor,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderStyle: "solid",
                  padding: 8,
                }}
                className={
                  props.fontColor === colors.white
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
            ) : (
              <GatsbyLink
                style={{
                  color: props.fontColor,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderStyle: "solid",
                  padding: 8,
                }}
                className={
                  props.fontColor === colors.white
                    ? "button-link"
                    : "button-link-black"
                }
                activeClass="active"
                to="/#contact"
              >
                Contact Us
              </GatsbyLink>
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
