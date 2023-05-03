import React from "react"
import { Typography, Grid } from "@mui/material"
import { colors } from "../../../../utils/colors"

const Approach = props => {
  const classes = {
    divider: {
      backgroundColor: colors.blue,
      margin: "auto",
      marginTop: "20px",
      width: "74px",
      height: "3px",
    },
    root: {
      flexGrow: 1,
      height: "fit-content",
      marginTop: "0px",
      padding: "40px",
    },
    tableContainer: {
      borderWidth: "1px",
      borderTopWidth: "0px",
      borderLeftWidth: "0px",
      borderColor: "#C4C4C4",
      backgroundColor: "#F9F9FC",
      borderStyle: "solid",
      width: "80px",
      height: "80px",
      padding: "16px",
    },
    tableText: {
      color: "#2C272E",
      fontSize: "2vmin",
      fontWeight: "700",
      fontFamily: "Poppins",
      margin: "auto",
      textAlign: "center",
    },
    tableTextNormal: {
      color: "#2C272E",
      fontSize: "2vmin",
      fontFamily: "Poppins",
      margin: "auto",
      textAlign: "center",
    },
  }

  return (
    <>
      <div style={classes.root}>
        <div
          style={{
            backgroundColor: "#7F7FFF",
            padding: 5,
            width: "fit-content",
            borderRadius: 3,
          }}
        >
          <Typography style={{ color: colors.white }}>3. Approach</Typography>
        </div>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            lineHeight: "40px",
            marginTop: "20px",
            fontFamily: "Montserrat",
            fontSize: "5vmin",
            fontWeight: "700",
          }}
        >
          A deep dive into the Native side
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: "10px",
            lineHeight: "4vmin",
            fontFamily: "Montserrat",
            fontSize: "2.5vmin",
          }}
        >
          We knew from the beginning that what’s going to work since this was
          our second iteration. Mistakes that were made previously didn’t have
          to be made again.
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: "10px",
            lineHeight: "4vmin",
            fontFamily: "Montserrat",
            fontSize: "2.5vmin",
          }}
        >
          The previous code didn’t have proper separation of concerns which made
          it harder to debug once the code base became larger. In software
          development there’s always a rule of diminishing return once the code
          base becomes significantly large its always hard to manage it then and
          ultimately it becomes unmanageable. Already having a user base we
          wanted the migration to be smooth as possible.
        </Typography>
        <Grid container justify="center" alignItems="center">
          <Grid
            style={classes.tableContainer}
            item
            direction="row"
            justify="center"
            alignItems="flex-end"
            xs={4}
          >
            <Typography style={classes.tableText}>Functionality</Typography>
          </Grid>
          <Grid style={classes.tableContainer} item xs={4}>
            <Typography style={classes.tableText}>ios support</Typography>
          </Grid>
          <Grid
            sx={[classes.tableContainer]}
            style={{ borderRightWidth: 0 }}
            item
            xs={4}
          >
            <Typography style={classes.tableText}>
              Android support
            </Typography>
          </Grid>
          <Grid
            sx={classes.tableContainer}
            style={{ backgroundColor: colors.white }}
            item
            direction="row"
            justify="center"
            alignItems="flex-end"
            xs={4}
          >
            <Typography style={classes.tableText}>
              getstream.io for chat functionality
            </Typography>
          </Grid>
          <Grid
            sx={classes.tableContainer}
            style={{ backgroundColor: colors.white }}
            item
            xs={4}
          >
            <Typography style={classes.tableTextNormal}>Yes</Typography>
          </Grid>
          <Grid
            sx={[classes.tableContainer]}
            style={{ borderRightWidth: 0, backgroundColor: colors.white }}
            item
            xs={4}
          >
            <Typography style={classes.tableTextNormal}>Yes</Typography>
          </Grid>
          <Grid
            style={classes.tableContainer}
            item
            direction="row"
            justify="center"
            alignItems="flex-end"
            xs={4}
          >
            <Typography style={classes.tableText}>
              Functional test, unit tests and end to end testing
            </Typography>
          </Grid>
          <Grid style={classes.tableContainer} item xs={4}>
            <Typography style={classes.tableTextNormal}>Yes</Typography>
          </Grid>
          <Grid
            sx={[classes.tableContainer]}
            style={{ borderRightWidth: 0 }}
            item
            xs={4}
          >
            <Typography style={classes.tableTextNormal}>Yes</Typography>
          </Grid>
          <Grid
            sx={classes.tableContainer}
            style={{ backgroundColor: colors.white }}
            item
            direction="row"
            justify="center"
            alignItems="flex-end"
            xs={4}
          >
            <Typography style={classes.tableText}>
              Using cross platform share feature using Branch.io
            </Typography>
          </Grid>
          <Grid
            sx={classes.tableContainer}
            style={{ backgroundColor: colors.white }}
            item
            xs={4}
          >
            <Typography style={classes.tableTextNormal}>Yes</Typography>
          </Grid>
          <Grid
            sx={[classes.tableContainer]}
            style={{ borderRightWidth: 0, backgroundColor: colors.white }}
            item
            xs={4}
          >
            <Typography style={classes.tableTextNormal}>Yes</Typography>
          </Grid>
          <Grid
            style={classes.tableContainer}
            item
            direction="row"
            justify="center"
            alignItems="flex-end"
            xs={4}
          >
            <Typography style={classes.tableText}>
              Using fluid navigation using React Navigation
            </Typography>
          </Grid>
          <Grid style={classes.tableContainer} item xs={4}>
            <Typography style={classes.tableTextNormal}>Yes</Typography>
          </Grid>
          <Grid
            sx={[classes.tableContainer]}
            style={{ borderRightWidth: 0 }}
            item
            xs={4}
          >
            <Typography style={classes.tableTextNormal}>Yes</Typography>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Approach
