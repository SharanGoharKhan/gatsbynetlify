import { Typography } from "@mui/material"
import React from "react"
import SplashImage from "../../images/splash.png"
import "./styles.css"
export default function Splash() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 10000000000,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography className="splash-brackets"> {"{"}</Typography>
        <div className="ninja-arrow">
          <img src={SplashImage} alt="splash" />
        </div>
        <Typography className="splash-brackets"> {"}"}</Typography>
      </div>

      {/* <div className="progress-bar"></div> */}
    </div>
  )
}
