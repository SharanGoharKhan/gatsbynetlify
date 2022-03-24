import { Box, Container, Grid, Paper, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import "./styles.css"
import { CareerCard } from "../../components"
import Bg from "../../images/career-bg.png"

const positions = [
  {
    title: "Full Stack Developer",
    post: "Senior",
  },
  {
    title: "Full Stack Developer",
    post: "Senior",
  },
  {
    title: "Full Stack Developer",
    post: "Senior",
  },
  {
    title: "Full Stack Developer",
    post: "Junior",
  },
  {
    title: "Full Stack Developer",
    post: "Internee",
  },
  {
    title: "Full Stack Developer",
    post: "Internee",
  },
]

export default function Career() {
  return (
    <Layout>
      <Banner
        titleMain={"JOIN OUR"}
        titleSecondary={"TEAM"}
        subTitle={"We are a team of engineers based in Islamabad, Pakistan"}
        image={false}
      />
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${Bg})`,
        }}
        className="background-container"
      >
        <BottomServices />
        <div
          className="typos"
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: 60,
          }}
        >
          <Typography
            variant="h2"
            display="inline"
            style={{
              color: "#179AFB",
              fontWeight: "900",
              position: "relative",
              fontSize: "10vmin",
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
                top: "10vmin",
                left: "5.5vmin",
                WebkitTextStroke: "1px #179AFB",
                WebkitTextFillColor: "white",
                fontSize: "4vmin",
              }}
            >
              {" "}
              JOIN
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800", fontSize: "5vmin" }}
            >
              {" "}
              JOIN OUR TEAM
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              style={{
                fontWeight: "800",
                position: "absolute",
                top: "0vmin",
                right: "6vmin",
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
                fontSize: "4vmin",
              }}
            >
              {" "}
              TEAM
            </Typography>
            {"}"}
          </Typography>
        </div>
        <Container style={{ marginTop: 100, marginBottom: 100 }}>
          <Grid container spacing={4} style={{ justifyContent: "center" }}>
            {positions.map((position, index) => {
              return (
                <Grid item key={index}>
                  <CareerCard data={position} />
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </div>
      <ContactUs />
    </Layout>
  )
}
