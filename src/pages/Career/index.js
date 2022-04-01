import { Container, Grid, Typography } from "@material-ui/core"
import React, { useEffect } from "react"
import { Banner, BottomServices, ContactUs, Typos } from "../../components"
import Layout from "../../components/layout"
import "./styles.css"
import "../../styles/styles.css"
import { CareerCard } from "../../components"
import Bg from "../../images/career-bg.png"
import { careerData } from "../../utils/careerData"

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
        <Typos
          first="JOIN"
          second="JOIN OUR TEAM"
          third="TEAM"
          top="0vmin"
          right="4vmin"
        />

        <Container style={{ marginTop: 100, marginBottom: 100 }}>
          <Grid container spacing={4} style={{ justifyContent: "center" }}>
            {careerData.map((position, index) => {
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
