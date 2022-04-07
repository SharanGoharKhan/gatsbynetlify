import React from "react"
import { Typography, makeStyles, Grid } from "@material-ui/core"
import Mockup4 from "../../../../images/Mockup4.svg"
import Mockup5 from "../../../../images/Mockup5.svg"
import Mockup6 from "../../../../images/Mockup6.svg"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"

const useStyles = makeStyles(theme => ({
  divider: {
    backgroundColor: "#175CFF",
    margin: "auto",
    marginTop: "20px",
    width: "74px",
    height: "3px",
  },
  root: {
    flexGrow: 1,
    height: "fit-content",
    marginTop: theme.spacing(0),
    padding: theme.spacing(5),
  },
  images1: {
    width: "80%",
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    elevation: 1,
    height: 150,
    width: 250,
    alignContent: "center",
    color: theme.palette.text.secondary,
  },
  topConatainer: {
    // textAlign: 'center',
    marginTop: theme.spacing(5),
  },
}))

const Solution = props => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <div
          style={{
            backgroundColor: "#7F7FFF",
            padding: 5,
            width: "fit-content",
            borderRadius: 3,
          }}
        >
          <Typography style={{ color: "#fff" }}>4. Solution</Typography>
        </div>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 20,
            fontFamily: "Poppins",
            fontSize: "5vmin",
            letterSpacing: 1,
            fontWeight: "700",
          }}
        >
          Combining all software solution services
        </Typography>
        <div>
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  marginTop: 10,
                  fontFamily: "Poppins",
                  fontSize: "90%",
                }}
              >
                Having considered all the functionalities and limitation of each
                platform, we looked into out of the box services that could cate
                some of our needs. The decision was based on reliability and
                security of these solutions. It should work seamlessly on both
                platforms.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  marginTop: 10,
                  fontFamily: "Poppins",
                  fontSize: "90%",
                }}
              >
                The chat feature was main feature of our application, it was
                split into the following steps:
              </Typography>
              <Grid container direction="row">
                <Grid item xs={2} md={1}>
                  <CheckCircleIcon style={{ color: "#7F7FFF" }} />
                </Grid>
                <Grid item xs={10} md={11}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "90%",
                      lineHeight: "26px",
                    }}
                  >
                    We looked into already made popular solutions which is
                    Rocket Chat. To speed up the development process we used
                    getstream.io which provides chat feature out of the box.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item xs={2} md={1}>
                  <CheckCircleIcon style={{ color: "#7F7FFF" }} />
                </Grid>
                <Grid item xs={10} md={11}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "90%",
                      lineHeight: "26px",
                    }}
                  >
                    Sharing links in the chat is one of the main feature in chat
                    we made a solution that shows that display previews image
                    when a link is shared which did not come up with
                    getstream.io.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container direction="row">
                <Grid item xs={2} md={1}>
                  <CheckCircleIcon style={{ color: "#7F7FFF" }} />
                </Grid>
                <Grid item xs={10} md={11}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "90%",
                      lineHeight: "26px",
                    }}
                  >
                    {" "}
                    Handling user authentication with Twilo.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid itemxs={12} md={4}>
              <img alt="sense.chat" style={{ width: "35vmin" }} src={Mockup4} />
            </Grid>
          </Grid>
        </div>
        <div className={classes.topConatainer}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} direction="row" justify="flex-end" md={4}>
              <img alt="sense.chat" style={{ width: "35vmin" }} src={Mockup5} />
            </Grid>
            <Grid item xs={12} direction="row" md={8}>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  marginTop: 10,
                  lineHeight: "30px",
                  fontFamily: "Poppins",
                  fontSize: "90%",
                }}
              >
                The first order of business was making the code architecture
                compliant with Clean Architecture.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  marginTop: 10,
                  lineHeight: "30px",
                  fontFamily: "Poppins",
                  fontSize: "90%",
                }}
              >
                The principles for clean architecture are that it is independent
                of Framework, UI, Database and external agency. We made our UI
                in such a way that it was a complete dumb component with only
                props passed to it and its only function was to render view.
                Using this approach made it easier for us to test UI using
                Detox. Writing tests is only possible if the code is testable.
                Using clean architecture gave us an advantage that in future if
                we had to change to another service it wouldn’t be too hard to
                change. Custom hooks were made for handling the logic in
                controllers part. Mocks were created for data for unit testing
                as well.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.topConatainer}>
          <Grid container spacing={10} justify="center" alignItems="center">
            <Grid item xs={12} direction="row" md={8}>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  marginTop: 10,
                  lineHeight: "30px",
                  fontFamily: "Poppins",
                  fontSize: "90%",
                }}
              >
                We had a large team working on one codebase. So we didn’t want
                programmers creating problems for the rest of the programmer.
                The purpose of our architecture was to facilitate development,
                deployment, operation and maintenance so that if another team
                starts works with the codebase they don’t have problem getting
                hang of the codebase. Our main philosophy was to leave as many
                options as possible, for as long as possible. Our solution was
                architecture in different layers with user facing layer being
                presentation layer. The presentation layer was connected with
                controllers mainly custom hooks. Any network calls had a
                separate layer so that we have a clear separation of concerns
                and the code is testable.
              </Typography>
            </Grid>
            <Grid item xs={12} direction="row" justify="flex-end" md={4}>
              <img alt="sense.chat" style={{ width: "35vmin" }} src={Mockup6} />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default Solution
