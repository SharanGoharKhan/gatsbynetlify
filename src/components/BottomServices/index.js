import React from "react"
import BlackWeb from "../../images/black-web.svg"
import BlackRightWeb from "../../images/black-right-web.svg"
import BlueWeb from "../../images/blue-web.svg"
import BlueLeftweb from "../../images/blue-left-web.svg"
import PurpleWeb from "../../images/purple-web.svg"

export default function BottomServices() {
  return (
    <>
      <img
        src={BlackWeb}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 300,
          height: 300,
          zIndex: -99,
        }}
      />
      <img
        src={BlueWeb}
        style={{
          position: "absolute",
          top: "20%",
          right: 0,
          width: 300,
          height: 300,
          zIndex: -99,
        }}
      />
      <img
        src={PurpleWeb}
        style={{
          position: "absolute",
          top: "40%",
          left: 0,
          width: 300,
          height: 300,
          zIndex: -99,
        }}
      />
      <img
        src={BlackRightWeb}
        style={{
          position: "absolute",
          top: "60%",
          right: 0,
          width: 300,
          height: 300,
          zIndex: -99,
        }}
      />

      <img
        src={BlueLeftweb}
        style={{
          position: "absolute",
          top: "80%",
          left: 0,
          width: 300,
          height: 300,
          zIndex: -99,
        }}
      />
    </>
  )
}
