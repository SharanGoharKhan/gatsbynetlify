import React from "react"
import BlackWeb from "../../images/black-web.svg"
import BlackRightWeb from "../../images/black-right-web.svg"
import BlueWeb from "../../images/blue-web.svg"
import BlueLeftweb from "../../images/blue-left-web.svg"
import PurpleWeb from "../../images/purple-web.svg"
import { useMediaQuery } from "@material-ui/core"
import { useTheme } from "@mui/material/styles"

export default function BottomServices() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <>
      <img
        src={BlackRightWeb}
        alt="web"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 200,
          height: 200,
          zIndex: -99,
          display: matches ? "none" : "inline-block",
        }}
      />
      <img
        src={BlueWeb}
        alt="web"
        style={{
          position: "absolute",
          top: "20%",
          right: 0,
          width: 200,
          height: 200,
          zIndex: -99,
          display: matches ? "none" : "inline-block",
        }}
      />
      <img
        src={PurpleWeb}
        alt="web"
        style={{
          position: "absolute",
          top: "40%",
          left: -65,
          width: 230,
          height: 200,
          zIndex: -99,
          display: matches ? "none" : "inline-block",
        }}
      />
      <img
        src={BlackWeb}
        alt="web"
        style={{
          position: "absolute",
          top: "60%",
          right: 0,
          width: 200,
          height: 200,
          zIndex: -99,
          display: matches ? "none" : "inline-block",
        }}
      />

      <img
        src={BlueLeftweb}
        alt="web"
        style={{
          position: "absolute",
          bottom: -50,
          left: 0,
          width: 200,
          height: 200,
          zIndex: -99,
          display: matches ? "none" : "inline-block",
        }}
      />
    </>
  )
}
