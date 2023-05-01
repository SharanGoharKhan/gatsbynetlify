import { Box, Typography } from "@mui/material"
import React from "react"
import { useAnimation } from "../../utils/useAnimation"

export default function Typos({
  first,
  second,
  third,
  top,
  right,
  upperRight,
  upperTop,
  upperLeft,
  color,
}) {
  useAnimation()

  const classes = {
    typos: {
      width: "100%",
      textAlign: "center",
      marginTop: "60px",
      height: "120px",
    },
    brackets: {
      color: "#179afb",
      fontWeight: 900,
      position: "relative",
      fontSize: "10vmin",
    },
    typosBefore: {
      color: "#000",
      fontWeight: 800,
      position: "absolute",
      top: "10vmin",
      left: "5vmin",
      WebkitTextStroke: "1px #179afb",
      WebkitTextFillColor: " transparent",
      fontSize: "5vmin",
    },
    typosMain: {
      color: " #000",
      fontWeight: "800",
      fontSize: "5vmin",
    },
    typosAfter: {
      fontWeight: 800,
      position: "absolute",
      WebkitTextStroke: "1px #000",
      WebkitTextFillColor: "transparent",
      fontSize: "5vmin",
    },
  }
  return (
    <Box sx={classes.typos}>
      <Typography variant="h2" display="inline" sx={classes.brackets}>
        {"{"}
        <Typography
          variant="h4"
          display="inline"
          sx={classes.typosBefore}
          style={{
            top: upperTop && upperTop,
            right: upperRight && upperRight,
            left: upperLeft && upperLeft,
          }}
        >
          {" "}
          {first}
        </Typography>

        <Typography
          variant="h4"
          display="inline"
          sx={classes.typosMain}
          style={{ color: color && color }}
        >
          {" "}
          {second}
        </Typography>
        <Typography
          variant="h4"
          display="inline"
          sx={classes.typosAfter}
          style={{
            top: top ? top : "0vmin",
            right: right ? right : "7vmin",
          }}
        >
          {" "}
          {third}
        </Typography>
        {"}"}
      </Typography>
    </Box>
  )
}
