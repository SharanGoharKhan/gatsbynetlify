import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import TiltDevice from "../../../../images/Mockup11.png"

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
}))

const Introduction = props => {
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
          <Typography style={{ color: "#fff" }}>1. Introduction</Typography>
        </div>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            lineHeight: "30px",
            marginTop: 20,
            fontFamily: "Montserrat",
            fontSize: "5vmin",
            fontWeight: "bolder",
          }}
        >
          User onboarding with a safe and secure mobile experience.
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            marginTop: 10,
            lineHeight: "30px",
            fontFamily: "Montserrat",
            fontSize: "2vh",
          }}
        >
          Building a decentralised application has been gaining popularity for
          quite some time, while at the same time being difficult to set up and
          manage. Users on boarded need to be confident about security security
          of the application. Implementation of phone authentication with
          providing user with safe and secure private key storage for end to end
          to encrypted chat was one of the key feature of this application. It
          was crucial to provide great and smooth onboarding experience. The
          application was build exclusively on Ethereum blockchain with its on
          tokens Sense tokens listed on popular crypto exchanges. Therefore
          users experience with chat and confidence in security was of primary
          concern for our system.
        </Typography>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <img alt="sense chat" src={TiltDevice} />
        </div>
      </div>
    </>
  )
}

export default Introduction
