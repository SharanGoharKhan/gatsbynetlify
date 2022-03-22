import React from "react"
import {
  Banner,
  BottomServices,
  ContactUs,
  ServicesCard,
} from "../../components"
import Layout from "../../components/layout"
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Icon,
  Paper,
  Typography,
} from "@material-ui/core"
import LocalDiningIcon from "@mui/icons-material/LocalDining"
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety"
import ApartmentIcon from "@mui/icons-material/Apartment"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin"
import ShareIcon from "@mui/icons-material/Share"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import CheckroomIcon from "@mui/icons-material/Checkroom"

import "./styles.css"
import { LeftCardData, RightCardData } from "../../utils/cardData"

export default function Services() {
  return (
    <Layout>
      <Banner
        titleMain={"Expertise In"}
        titleSecondary={"Every Technology"}
        subTitle={
          "Ninjascode provides full-stack Web, Desktop, and Mobile development services. We have huge experience in B2B and B2C solustion"
        }
        image={false}
      />
      <div style={{ position: "relative" }}>
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
        <Container style={{ marginTop: 100 }}>
          <Grid container spacing={4}>
            {LeftCardData.map((item, index) => {
              return (
                <Grid item md={3} key={index}>
                  <ServicesCard data={item} />
                </Grid>
              )
            })}
          </Grid>
          <Box mt={10} />
          <Grid container spacing={4}>
            <Grid item md={3}></Grid>
            {RightCardData.map((item, index) => {
              return (
                <Grid item md={3} key={index}>
                  <ServicesCard data={item} />
                </Grid>
              )
            })}
          </Grid>
        </Container>
        <Box mt={10} />
      </div>
      <Box mt={10} />
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
      <Box mt={10} />

      <Container>
        <Grid container spacing={6}>
          <Grid item xs={6} md={3}>
            <SmallCard title={"Food"} icon={<LocalDiningIcon />} />
          </Grid>
          <Grid item xs={6} md={3}>
            <SmallCard title={"Clothes"} icon={<CheckroomIcon />} />
          </Grid>
          <Grid item xs={6} md={3}>
            <SmallCard title={"Health"} icon={<HealthAndSafetyIcon />} />
          </Grid>
          <Grid item xs={6} md={3}>
            <SmallCard title={"E commerce"} icon={<CreditCardIcon />} />
          </Grid>
          <Grid item xs={6} md={3}>
            <SmallCard title={"Social Media"} icon={<ShareIcon />} />
          </Grid>
          <Grid item xs={6} md={3}>
            <SmallCard title={"NFTs"} icon={<CurrencyBitcoinIcon />} />
          </Grid>
          <Grid item xs={6} md={3}>
            <SmallCard title={"POS"} icon={<PointOfSaleIcon />} />
          </Grid>
          <Grid item xs={6} md={3}>
            <SmallCard title={"Real Estate"} icon={<ApartmentIcon />} />
          </Grid>
        </Grid>
      </Container>
      <ContactUs />
    </Layout>
  )
}

function SmallCard({ title, icon }) {
  return (
    <Paper className="paper-service">
      {icon}
      <Typography variant="body2">{title}</Typography>
    </Paper>
  )
}
