import { Box, Grid, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices } from "../../components"
import Layout from "../../components/layout"
import AndroidService from "../../images/android.svg"
import Device from "../../images/Device.svg"
import "./styles.css"
export default function Android() {
  return (
    <Layout>
      <Banner
        titleMain={"ANDROID"}
        titleSecondary={"DEVELOPEMENT"}
        subTitle={"We develop beautiful Android apps with UX as a primary focus"}
        image={AndroidService}
      />
      <div style={{ minHeight: "200vh", position: "relative" }}>
        <BottomServices />
        <div
          className="typos"
          style={{
            width: "100%",
            textAlign: "center",
            padding: 20,
            marginTop: 20,
          }}
        >
          <Typography
            variant="h2"
            display="inline"
            style={{
              color: "#179AFB",
              fontWeight: "900",
              position: "relative",
            }}
          >
            {"{"}
            <Typography
              variant="h4"
              display="inline"
              style={{
                color: "#000",
                fontWeight: "800",
                position: "absolute",
                top: 70,
                left: 40,
                WebkitTextStroke: "1px #179AFB",
                WebkitTextFillColor: "white",
              }}
            >
              {" "}
              AND
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800" }}
            >
              {" "}
              ANDROID DEVELOPEMENT
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              style={{
                fontWeight: "800",
                position: "absolute",
                top: 0,
                right: 50,
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              {" "}
              MEN
            </Typography>
            {"}"}
          </Typography>
        </div>
        <div>
          <img src={Device} className="device-image"/>
        </div>
      </div>
    </Layout>
  )
}
