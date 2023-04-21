import { Box } from "@material-ui/core"
import { Container, Paper, Grid, Typography } from "@mui/material"
import React from "react"
import Banner1 from "../../images/Banner1.png"
import Banner2 from "../../images/Banner2.png"
import Banner3 from "../../images/Banner3.png"
import Banner4 from "../../images/Banner4.png"

const gridItems = [
  {
    image: Banner1,
    title: "Ecommero",
    link: "https://github.com/Ninjas-Code-official/shopping-cart/",
  },
  {
    image: Banner2,
    title: "Enatega Single Vendor",
    link: "https://github.com/Ninjas-Code-official/Enatega-Restaurant-Solution",
  },
  {
    image: Banner3,
    title: "Enatega Multi Vendor",
    link:
      "https://github.com/Ninjas-Code-official/Marketplace-Food-Delivery-Solution",
  },
  {
    image: Banner4,
    title: "OLO Listing App",
    link: "https://github.com/Ninjas-Code-official/olxclone-backend",
  },
]

export default function OpenSource() {
  return (
    <Container style={{ justifyContent: "center", display: "flex" }}>
      <Grid container spacing={2} maxWidth="md">
        {gridItems.map((item, index) => (
          <Grid item xs={6}>
            <a
              href={item.link}
              key={index}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Paper style={{ border: "10px solid #179afb" }}>
                <img
                  src={item.image}
                  style={{ width: "100%" }}
                  alt={item.title}
                  data-aos="zoom-out"
                />
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Typography style={{ fontWeight: "bolder" }}>
                    {item.title}
                  </Typography>
                </Box>
              </Paper>
            </a>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
