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
import Building from "../../images/building.png"
import "./styles.css"
import "../../styles/styles.css"
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
            <Typography variant="h4" display="inline" className="typos-before">
              {" "}
              SER
            </Typography>

            <Typography variant="h4" display="inline" className="typos-main">
              {" "}
              SERVICES
            </Typography>
            <Typography variant="h4" display="inline" className="typos-after">
              {" "}
              CES
            </Typography>
            {"}"}
          </Typography>
        </div>
        <Container style={{ marginTop: 100, marginBottom: 100 }}>
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
      </div>
      <div
        className="lower-background"
        style={{ backgroundImage: `url(${Building})` }}
      >
        <div className="typos">
          <Typography variant="h2" display="inline" className="brackets">
            {"{"}
            <Typography
              variant="h4"
              display="inline"
              className="typos-before"
              style={{
                top: "10vmin",
                left: "5.5vmin",
              }}
            >
              {" "}
              INDUSTR
            </Typography>

            <Typography variant="h4" display="inline" className="typos-main">
              {" "}
              INDUSTRIES WE COVER
            </Typography>
            <Typography
              variant="h4"
              display="inline"
              className="typos-after"
              style={{
                top: "0vmin",
                right: "4vmin",
              }}
            >
              {" "}
              VER
            </Typography>
            {"}"}
          </Typography>
        </div>
        <Container style={{ marginTop: 100 }}>
          <Grid container spacing={6}>
            <Grid item xs={6} md={3} align="center">
              <SmallCard title={"Food"} icon={<LocalDiningIcon />} />
            </Grid>
            <Grid item xs={6} md={3} align="center">
              <SmallCard title={"Clothes"} icon={<CheckroomIcon />} />
            </Grid>
            <Grid item xs={6} md={3} align="center">
              <SmallCard title={"Health"} icon={<HealthAndSafetyIcon />} />
            </Grid>
            <Grid item xs={6} md={3} align="center">
              <SmallCard title={"E commerce"} icon={<CreditCardIcon />} />
            </Grid>
            <Grid item xs={6} md={3} align="center">
              <SmallCard title={"Social Media"} icon={<ShareIcon />} />
            </Grid>
            <Grid item xs={6} md={3} align="center">
              <SmallCard title={"NFTs"} icon={<CurrencyBitcoinIcon />} />
            </Grid>
            <Grid item xs={6} md={3} align="center">
              <SmallCard title={"POS"} icon={<PointOfSaleIcon />} />
            </Grid>
            <Grid item xs={6} md={3} align="center">
              <SmallCard title={"Real Estate"} icon={<ApartmentIcon />} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <ContactUs />
    </Layout>
  )
}

function SmallCard({ title, icon }) {
  return (
    <Paper className="paper-service">
      {icon}
      <Divider
        style={{
          width: "60%",
          backgroundColor: "#52FFFF",
          margin: 10,
          height: 2,
        }}
      />
      <Typography variant="body2">{title}</Typography>
    </Paper>
  )
}
