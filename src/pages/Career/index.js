import { Container, Grid } from "@mui/material"
import React from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import "./styles.css"
import { CareerCard } from "../../components"
import Bg from "../../images/career-bg.png"
import { careerData } from "../../utils/careerData"
import Seo from "../../components/seo"

export default function Career() {
  return (
    <>
      <Seo
        title="Join Our Team"
        description="Shape Your Future in a Dynamic and Innovative Environment"
      />
      <Layout>
        <Banner
          titleMain={"Join Our Team"}
          titleSecondary={
            "Shape Your Future in a Dynamic and Innovative Environment"
          }
          subTitle={
            "Discover exciting career opportunities at our software development agency, where talented individuals come together to create exceptional digital solutions for businesses worldwide. We are always looking for passionate, dedicated professionals to join our growing team, spanning roles in web and mobile app development, UI/UX design, desktop applications, and startup solutions. As a part of our team, you'll enjoy a collaborative, innovative work environment that encourages personal growth and professional development. We are committed to fostering a diverse and inclusive culture, where each team member's unique skills and perspectives are valued. If you're ready to make a meaningful impact in the world of software development, we'd love to hear from you."
          }
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
          <Typos second="JOIN OUR TEAM " top="0vmin" right="4vmin" />

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
    </>
  )
}
