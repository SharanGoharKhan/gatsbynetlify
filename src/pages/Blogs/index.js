import React from "react"
import clsx from "clsx"
import {
  Card,
  IconButton,
  CardContent,
  CardActions,
  Collapse,
  Divider,
  Typography,
  makeStyles,
  useMediaQuery,
  Grid,
  useTheme,
} from "@material-ui/core"
import { red } from "@material-ui/core/colors"
import Blog1 from "../../images/blog1.png"
import Blog2 from "../../images/blog2.png"
import Blog3 from "../../images/blog3.png"
import Blog4 from "../../images/blog4.png"
import Blog5 from "../../images/blog5.png"
import Blog6 from "../../images/blog6.png"
import { ContactUs, Footer, TopBar } from "../../components"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: theme.typography,
  },
  divider: {
    backgroundColor: "#175CFF",
    margin: "auto",
    marginTop: "40px",
    width: "74px",
    height: "2px",
    marginBottom: theme.spacing(2),
  },
  root: {
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    marginTop: theme.spacing(6),
    backgroundColor: "#3751FF",
    borderRadius: 10,
    height: 60,
  },
  cardRoot: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {},
  avatar: {
    backgroundColor: red[500],
  },
}))

const Blogs = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))
  const classes = useStyles()

  const [expanded] = React.useState(false)

  return (
    <>
      <TopBar barColor="#3751FF" fontColor="#fff" />
      <div id="feature" className={classes.root}>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            style={{
              fontWeight: 700,
              fontSize: "6vmin",
              fontFamily: "Poppins",
            }}
            variant="h3"
            gutterBottom
          >
            Blogs and News
          </Typography>
          <Typography
            style={{
              fontWeight: 400,
              color: "#333333",
              fontFamily: "Poppins",
              fontSize: "3vmin",
              width: matches ? "50%" : "90%",
              margin: "auto",
            }}
            gutterBottom
          >
            We're like to write about latest technologies!
          </Typography>
          <Divider className={classes.divider} />
        </div>
        <Grid container spacing={1} justify="space-evenly" alignItems="center">
          <Grid item sm={12} lg={3}>
            <Card>
              <img src={Blog1} alt="blog" />
              <div style={{ paddingLeft: 10 }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    marginBottom: 10,
                    fontWeight: "bold",
                    fontSize: "2.5vmin",
                  }}
                  color="black"
                >
                  How javascript works behind the scenes
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{
                    fontFamily: "Poppins",
                    lineHeight: "3.8vmin",
                    fontSize: "2vmin",
                  }}
                >
                  Javascript is always hosted in some environment, typically
                  it’s hosted in a browser that is Google Chrome, Firefox,
                  Safari etc. Javascript will run in this environment but not
                  restricted to only this it can also run in other hosts such
                  Nodejs web server or some application that accepts JS code
                  input.
                </Typography>
              </div>
              <CardActions>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  //   onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Typography style={{ fontSize: "2vmin", color: "#3751FF" }}>
                    Continue reading...
                  </Typography>
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    color="textSecondary"
                    style={{
                      fontFamily: "Poppins",
                      lineHeight: "3.8vmin",
                      fontSize: "2vmin",
                    }}
                  >
                    Javascript is always hosted in some environment, typically
                    it’s hosted in a browser that is Google Chrome, Firefox,
                    Safari etc. Javascript will run in this environment but not
                    restricted to only this it can also run in other hosts such
                    Nodejs web server or some application that accepts JS code
                    input.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={3} sm={12}>
            <Card>
              <img src={Blog2} alt="blog" />
              <div style={{ paddingLeft: 10 }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    marginBottom: 10,
                    fontWeight: "bold",
                    fontSize: "2.3vmin",
                  }}
                  color="black"
                >
                  TRENDS TRANSFORMING BLOCKCHAIN AND ARTIFICIAL INTELLIGENCE IN
                  2021
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{
                    fontFamily: "Poppins",
                    lineHeight: "3.8vmin",
                    fontSize: "2vmin",
                  }}
                >
                  Javascript is always hosted in some environment, typically
                  it’s hosted in a browser that is Google Chrome, Firefox,
                  Safari etc. Javascript will run in this environment but not
                  restricted to only this it can also run in other hosts such
                  Nodejs web server or some application that accepts JS code
                  input.
                </Typography>
              </div>
              <CardActions>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  //   onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Typography style={{ fontSize: "2vmin", color: "#3751FF" }}>
                    Continue reading...
                  </Typography>
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    color="textSecondary"
                    style={{
                      fontFamily: "Poppins",
                      lineHeight: "3.8vmin",
                      fontSize: "2vmin",
                    }}
                  >
                    Javascript is always hosted in some environment, typically
                    it’s hosted in a browser that is Google Chrome, Firefox,
                    Safari etc. Javascript will run in this environment but not
                    restricted to only this it can also run in other hosts such
                    Nodejs web server or some application that accepts JS code
                    input.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={3} sm={12}>
            <Card>
              <img src={Blog3} alt="blog" />
              <div style={{ paddingLeft: 10 }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    marginBottom: 10,
                    fontWeight: "bold",
                    fontSize: "2.5vmin",
                  }}
                  color="black"
                >
                  How javascript works behind the scenes
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{
                    fontFamily: "Poppins",
                    lineHeight: "3.8vmin",
                    fontSize: "2vmin",
                  }}
                >
                  Javascript is always hosted in some environment, typically
                  it’s hosted in a browser that is Google Chrome, Firefox,
                  Safari etc. Javascript will run in this environment but not
                  restricted to only this it can also run in other hosts such
                  Nodejs web server or some application that accepts JS code
                  input.
                </Typography>
              </div>
              <CardActions>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  //   onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Typography style={{ fontSize: "2vmin", color: "#3751FF" }}>
                    Continue reading...
                  </Typography>
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    color="textSecondary"
                    style={{
                      fontFamily: "Poppins",
                      lineHeight: "3.8vmin",
                      fontSize: "2vmin",
                    }}
                  >
                    Javascript is always hosted in some environment, typically
                    it’s hosted in a browser that is Google Chrome, Firefox,
                    Safari etc. Javascript will run in this environment but not
                    restricted to only this it can also run in other hosts such
                    Nodejs web server or some application that accepts JS code
                    input.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>

        <div style={{ textAlign: "center", marginTop: "10vmin" }}></div>
        <Grid container spacing={1} justify="space-evenly" alignItems="center">
          <Grid item sm={12} lg={3}>
            <Card>
              <img src={Blog4} alt="blog" />
              <div style={{ paddingLeft: 10 }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    marginBottom: 10,
                    fontWeight: "bold",
                    fontSize: "2.5vmin",
                  }}
                  color="black"
                >
                  How javascript works behind the scenes
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{
                    fontFamily: "Poppins",
                    lineHeight: "3.8vmin",
                    fontSize: "2vmin",
                  }}
                >
                  Javascript is always hosted in some environment, typically
                  it’s hosted in a browser that is Google Chrome, Firefox,
                  Safari etc. Javascript will run in this environment but not
                  restricted to only this it can also run in other hosts such
                  Nodejs web server or some application that accepts JS code
                  input.
                </Typography>
              </div>
              <CardActions>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  //   onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Typography style={{ fontSize: "2vmin", color: "#3751FF" }}>
                    Continue reading...
                  </Typography>
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    color="textSecondary"
                    style={{
                      fontFamily: "Poppins",
                      lineHeight: "3.8vmin",
                      fontSize: "2vmin",
                    }}
                  >
                    Javascript is always hosted in some environment, typically
                    it’s hosted in a browser that is Google Chrome, Firefox,
                    Safari etc. Javascript will run in this environment but not
                    restricted to only this it can also run in other hosts such
                    Nodejs web server or some application that accepts JS code
                    input.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={3} sm={12}>
            <Card>
              <img src={Blog5} alt="blog" />
              <div style={{ paddingLeft: 10 }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    marginBottom: 10,
                    fontWeight: "bold",
                    fontSize: "2.3vmin",
                  }}
                  color="black"
                >
                  TRENDS TRANSFORMING BLOCKCHAIN AND ARTIFICIAL INTELLIGENCE IN
                  2021
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{
                    fontFamily: "Poppins",
                    lineHeight: "3.8vmin",
                    fontSize: "2vmin",
                  }}
                >
                  Javascript is always hosted in some environment, typically
                  it’s hosted in a browser that is Google Chrome, Firefox,
                  Safari etc. Javascript will run in this environment but not
                  restricted to only this it can also run in other hosts such
                  Nodejs web server or some application that accepts JS code
                  input.
                </Typography>
              </div>
              <CardActions>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  //   onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Typography style={{ fontSize: "2vmin", color: "#3751FF" }}>
                    Continue reading...
                  </Typography>
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    color="textSecondary"
                    style={{
                      fontFamily: "Poppins",
                      lineHeight: "3.8vmin",
                      fontSize: "2vmin",
                    }}
                  >
                    Javascript is always hosted in some environment, typically
                    it’s hosted in a browser that is Google Chrome, Firefox,
                    Safari etc. Javascript will run in this environment but not
                    restricted to only this it can also run in other hosts such
                    Nodejs web server or some application that accepts JS code
                    input.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={3} sm={12}>
            <Card>
              <img src={Blog6} alt="blog" />
              <div style={{ paddingLeft: 10 }}>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    marginBottom: 10,
                    fontWeight: "bold",
                    fontSize: "2.5vmin",
                  }}
                  color="black"
                >
                  How javascript works behind the scenes
                </Typography>
                <Typography
                  color="textSecondary"
                  style={{
                    fontFamily: "Poppins",
                    lineHeight: "3.8vmin",
                    fontSize: "2vmin",
                  }}
                >
                  Javascript is always hosted in some environment, typically
                  it’s hosted in a browser that is Google Chrome, Firefox,
                  Safari etc. Javascript will run in this environment but not
                  restricted to only this it can also run in other hosts such
                  Nodejs web server or some application that accepts JS code
                  input.
                </Typography>
              </div>
              <CardActions>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  //   onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Typography style={{ fontSize: "2vmin", color: "#3751FF" }}>
                    Continue reading...
                  </Typography>
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography
                    color="textSecondary"
                    style={{
                      fontFamily: "Poppins",
                      lineHeight: "3.8vmin",
                      fontSize: "2vmin",
                    }}
                  >
                    Javascript is always hosted in some environment, typically
                    it’s hosted in a browser that is Google Chrome, Firefox,
                    Safari etc. Javascript will run in this environment but not
                    restricted to only this it can also run in other hosts such
                    Nodejs web server or some application that accepts JS code
                    input.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </div>
      <ContactUs />
      <Footer />
    </>
  )
}

export default Blogs
