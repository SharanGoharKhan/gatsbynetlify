import { Container, Grid } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import "./styles.css"
import "../../utils/styles/styles.css"
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

        <Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Grid container spacing={4} style={{ justifyContent: "center" }}>
            {careerData.map((position, index) => {
              return (
                <Grid item key={index}>
                  <CareerCard data={position} index={index} />
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}
