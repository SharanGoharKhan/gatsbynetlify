import { Box, Grid, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices } from "../../components"
import Layout from "../../components/layout"
import IOSService from "../../images/ios.svg"
import D1 from "../../images/D1.svg"
import D2 from "../../images/D2.svg"

export default function Ios() {
  return (
    <Layout>
      <Banner
        titleMain={"IOS"}
        titleSecondary={"DEVELOPEMENT"}
        subTitle={"We develop beautiful IOS apps with UX as a primary focus"}
        image={IOSService}
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
                top: 60,
                left: 36,
                WebkitTextStroke: "1px #179AFB",
                WebkitTextFillColor: "white",
              }}
            >
              {" "}
              IOS
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800" }}
            >
              {" "}
              IOS DEVELOPEMENT
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              style={{
                fontWeight: "800",
                position: "absolute",
                top: -10,
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
          <Grid container>
            <Grid item xs={6}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  style={{ color: "#000", marginTop: 0, marginRight: 10 }}
                >
                  lorem
                </Typography>
                <img src={D1} alt="d1" />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <img src={D2} alt="d1" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <img src={D1} alt="d1" />
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <img src={D2} alt="d1" />
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  )
}
