import React from "react"
import { Banner, BottomServices, ContactUs, ServicesCard } from "../../components"
import Layout from "../../components/layout"
import { Box, Card, Container, Divider, Grid, Paper, Typography } from "@material-ui/core"

export default function Services() {
  return (
    <Layout>
      <Banner
        titleMain={"IOS"}
        titleSecondary={"DEVELOPEMENT"}
        subTitle={"We develop beautiful IOS apps with UX as a primary focus"}
        image={false}
      />
      <div style={{ minHeight: "200vh", position: "relative" }}>
        <BottomServices />
        <div className="typos">
          <Typography variant="h2" display="inline" className="brackets">
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
              SER
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800" }}
            >
              {" "}
              SERVICES
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              style={{
                fontWeight: "800",
                position: "absolute",
                top: 0,
                right: 25,
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              {" "}
              CES
            </Typography>
            {"}"}
          </Typography>
        </div>
        <Container style={{marginTop: 100}}>
          <Grid container spacing={3}>
            <Grid item md={3}>
              <ServicesCard />
            </Grid>
            <Grid item md={3}>
              <ServicesCard />
            </Grid>
            <Grid item md={3}>
              <ServicesCard />
            </Grid>
          </Grid>

          <Grid container spacing={3} mt={2}>
            <Grid item md={3}></Grid>
            <Grid item md={3}>
              <ServicesCard />
            </Grid>
            <Grid item md={3}>
              <ServicesCard />
            </Grid>
            <Grid item md={3}>
              <ServicesCard />
            </Grid>
          </Grid>
        </Container>

        <div className="typos">
          <Typography variant="h2" display="inline" className="brackets">
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
              INDUSTR
            </Typography>

            <Typography
              variant="h4"
              display="inline"
              style={{ color: "#000", fontWeight: "800" }}
            >
              {" "}
              INDUSTRIES WE COVER
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              style={{
                fontWeight: "800",
                position: "absolute",
                top: 0,
                right: 25,
                WebkitTextStroke: "1px black",
                WebkitTextFillColor: "white",
              }}
            >
              {" "}
              VER
            </Typography>
            {"}"}
          </Typography>
        </div>

        <Container>
          <Grid container spacing={6}>
              <Grid item xs={3}>
                <SmallCard />
              </Grid>
              <Grid item xs={3}>
                <SmallCard />
              </Grid>
              <Grid item xs={3}>
                <SmallCard />
              </Grid>
              <Grid item xs={3}>
                <SmallCard />
              </Grid>
              <Grid item xs={3}>
                <SmallCard />
              </Grid>
              <Grid item xs={3}>
                <SmallCard />
              </Grid> <Grid item xs={3}>
                <SmallCard />
              </Grid>
              <Grid item xs={3}>
                <SmallCard />
              </Grid>
          </Grid>
        </Container>
      </div>
      <ContactUs />
    </Layout>
  )
}

function SmallCard(){
  return(
    <Paper className="paper-service">
     {/* <SvgIcon><LocalDiningIcon /></SvgIcon> */}
      <Divider variant="middle" />
      <Typography variant="body2">Food</Typography>
    </Paper>
  )
}