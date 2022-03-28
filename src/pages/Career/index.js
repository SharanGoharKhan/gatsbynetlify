import { Container, Grid, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs } from "../../components"
import Layout from "../../components/layout"
import "./styles.css"
import "../../styles/styles.css"

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
        <div className="typos">
          <Typography variant="h2" display="inline" className="brackets">
            {"{"}
            <Typography variant="h4" display="inline" className="typos-before">
              {" "}
              JOIN
            </Typography>

            <Typography variant="h4" display="inline" className="typos-main">
              {" "}
              JOIN OUR TEAM
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              className="typos-after"
              style={{
                top: "0vmin",
                right: "6vmin",
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
