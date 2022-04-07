import React from "react"
import clsx from "clsx"
import {
  Card,
  IconButton,
  CardContent,
  CardActions,
  Button,
  Collapse,
  Divider,
  Typography,
  makeStyles,
  useMediaQuery,
  Grid,
  useTheme,
  Link as MaterialUILink,
} from "@material-ui/core"
import { red } from "@material-ui/core/colors"
import Blog1 from "../../images/blog1.png"
import Blog2 from "../../images/blog2.png"
import Blog3 from "../../images/blog3.png"
import { colors } from "../../utils/colors"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: theme.typography,
  },
  divider: {
    backgroundColor: colors.blue,
    margin: "auto",
    marginTop: "40px",
    width: "74px",
    height: "2px",
    marginBottom: theme.spacing(2),
  },
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    marginTop: theme.spacing(6),
    backgroundColor: colors.blue2,
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

const Blog = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))
  const classes = useStyles()

  const [expanded] = React.useState(false)

  return (
    <div id="feature" className={classes.root}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          style={{ fontWeight: 700, fontSize: "6vmin", fontFamily: "Poppins" }}
          variant="h3"
          gutterBottom
        >
          Blogs and News
        </Typography>
        <Typography
          style={{
            fontWeight: 400,
            color: colors.lightGray,
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
                Javascript is always hosted in some environment, typically it’s
                hosted in a browser that is Google Chrome, Firefox, Safari etc.
                Javascript will run in this environment but not restricted to
                only this it can also run in other hosts such Nodejs web server
                or some application that accepts JS code input.
              </Typography>
            </div>
            <CardActions>
              <MaterialUILink
                href="https://blog.ninjascode.com/how-javascript-works-behind-the-scenes-fb65b81d6e1c"
                target="_blank"
              >
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  //   onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Typography
                    style={{ fontSize: "2vmin", color: colors.blue2 }}
                  >
                    Continue reading...
                  </Typography>
                </IconButton>
              </MaterialUILink>
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
                How to Calculate the Cost of App Development?
              </Typography>
              <Typography
                color="textSecondary"
                style={{
                  fontFamily: "Poppins",
                  lineHeight: "3.8vmin",
                  fontSize: "2vmin",
                }}
              >
                The complexity of the app, including some features and a number
                of features, can have a direct impact on the cost of the app.
                Every feature to make it functional takes time to develop which
                again increases the cost of the app to be developed. Most
                agencies charge on an hourly basis so the more time it takes to
                complete a feature more they will charge. Some features are also
                easier to develop than the rest of the features.
              </Typography>
            </div>
            <CardActions>
              <MaterialUILink
                href="https://blog.ninjascode.com/how-to-calculate-the-cost-of-app-development-217ead20083b"
                target="_blank"
              >
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  //   onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Typography
                    style={{ fontSize: "2vmin", color: colors.blue2 }}
                  >
                    Continue reading...
                  </Typography>
                </IconButton>
              </MaterialUILink>
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
                How to Make a Food Delivery App like UberEats, Foodpanda,
                GrubHub or Postmates
              </Typography>
              <Typography
                color="textSecondary"
                style={{
                  fontFamily: "Poppins",
                  lineHeight: "3.8vmin",
                  fontSize: "2vmin",
                }}
              >
                When building a food ordering app you need to think about many
                things how you are going to build it, who is going to use your
                food ordering app, and what are your competitors in this niche.
                Current companies that have dominated this market are Uber Eats,
                GrubHub, Just Eat, and Foodpanda.
              </Typography>
            </div>
            <CardActions>
              <MaterialUILink
                href="https://blog.ninjascode.com/how-to-make-a-food-delivery-app-like-ubereats-foodpanda-grubhub-or-postmates-55ae82b1253a"
                target="_blank"
              >
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  //   onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Typography
                    style={{ fontSize: "2vmin", color: colors.blue2 }}
                  >
                    Continue reading...
                  </Typography>
                </IconButton>
              </MaterialUILink>
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
      <div style={{ textAlign: "center", marginTop: "10vmin" }}>
        <MaterialUILink href="https://blog.ninjascode.com" target="_blank">
          <Button
            autoCapitalize={false}
            variant="contained"
            color="primary"
            style={{ backgroundColor: colors.blue2 }}
          >
            <Typography
              style={{ fontFamily: "Poppins", textTransform: "initial" }}
            >
              {" "}
              See all blogs{" "}
            </Typography>
          </Button>
        </MaterialUILink>
      </div>
    </div>
  )
}

export default Blog
