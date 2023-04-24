import { hot } from "react-hot-loader"
import React from "react"
import { Banner, BottomServices, ServicesCard, Typos } from "../../components"
import Layout from "../../components/layout"
import {
  Box,
  Container,
  Divider,
  Grid,
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
import { LeftCardData, RightCardData } from "../../utils/cardData"
import { Link as GatsbyLink } from "gatsby"

function Services() {
  return (
    <Layout>
      <Banner
        titleMain={"Our Comprehensive Services"}
        titleSecondary={"Expert Solutions for Your Software Development Needs"}
        subTitle={
          "At our software development agency, we offer a wide range of services tailored to meet the unique requirements of each client. From custom web and mobile app development to UI/UX design, API integration, and cloud computing solutions, our team is adept at providing end-to-end software development services. We also specialize in delivering quality assurance and testing services to ensure the seamless functionality of your applications. By leveraging the latest industry tools and technologies, we're committed to driving your business forward with scalable, secure, and efficient software solutions."
        }
        image={false}
      />
      <div style={{ position: "relative" }}>
        <BottomServices />
        <Typos first="SER" second="SERVICES" third="CES" right={"4vmin"} />

        <Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Grid container spacing={4}>
            {LeftCardData.map((item, index) => {
              return (
                <Grid item xs={9} md={3} key={index}>
                  <GatsbyLink
                    to={`/Services${item.to}/`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ServicesCard data={item} />
                  </GatsbyLink>
                </Grid>
              )
            })}
          </Grid>
          <Box mt={10} />
          <Grid container spacing={4} justify="flex-end">
            {RightCardData.map((item, index) => {
              return (
                <Grid item xs={9} md={3} key={index}>
                  <GatsbyLink
                    to={`/Services${item.to}/`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ServicesCard data={item} />
                  </GatsbyLink>
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
        <Typos
          first="INDUSTR"
          second="INDUSTRIES WE COVER"
          third="VER"
          upperLeft="5.5vmin"
          upperTop="10vmin"
          top={"0vmin"}
          right="4vmin"
        />

        <Container style={{ marginTop: 100, marginBottom: 100 }}>
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

export default hot(module)(Services)
