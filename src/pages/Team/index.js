import { Box, Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices } from "../../components"
import Layout from "../../components/layout"
import TeamBg from "../../images/team-bg.png"
import Sharan from "../../images/sharan.png"

export default function Team() {
  return (
    <Layout>
      <Banner
        titleMain={"LET'S MEET"}
        titleSecondary={"OUR TEAM"}
        subTitle={
          "We know our crew. We builf teams considering both tech skills and personal traits. And we mean it."
        }
        image={false}
      />
      <div
        style={{
          position: "relative",
        }}
      >
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
              OUR
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800" }}
            >
              {" "}
              OUR TEAM
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
              TEAM
            </Typography>
            {"}"}
          </Typography>
        </div>
        <Container>
          <Grid container>
            <Grid item md={4}>
              <Box>
                <img src={Sharan} alt={"team"} />
                <Typography>SHARAN GOHAR</Typography>
                <Typography>CEO</Typography>
                <Typography>icons</Typography>
              </Box>
            </Grid>
            <Grid item md={4}></Grid>
            <Grid item md={4}>
              <img src={Sharan} alt={"team"} />
              <Typography>ADNAN</Typography>
              <Typography>CTO</Typography>
              <Typography>icons</Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}
