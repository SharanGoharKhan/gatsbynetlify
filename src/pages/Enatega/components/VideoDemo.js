import React from "react"
import { Divider, Typography, useTheme, useMediaQuery } from "@mui/material"

const VideoDemo = props => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))

  const classes = {
    divider: {
      backgroundColor: "#175CFF",
      margin: "auto",
      marginTop: "20px",
      width: "74px",
      height: "3px",
      marginBottom: "20px",
    },
    root: {
      flexGrow: 1,
      height: "fit-content",
      marginTop: 24,
      paddingTop: 40,
    },
  }
  return (
    <div className={classes.root}>
      <Typography
        variant="h5"
        gutterBottom
        style={{
          textAlign: "center",
          lineHeight: "60   px",
          marginTop: 10,
          fontFamily: "Montserrat",
          fontWeight: "700",
        }}
      >
        Video Demo
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        style={{
          textAlign: "center",
          lineHeight: "20px",
          width: "50%",
          fontSize: 12,
          margin: "auto",
          marginTop: 10,
          fontFamily: "Montserrat",
          color: "#333333",
        }}
      >
        Quick Look How The Product Works
      </Typography>
      <Divider className={classes.divider} />
      <div style={{ textAlign: "center", marginTop: 10 }}>
        <iframe
          width={matches ? "600" : "300"}
          style={{ borderRadius: 20 }}
          height={matches ? "315" : "200"}
          src="https://www.youtube.com/embed/VWiwGErYYp4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default VideoDemo
