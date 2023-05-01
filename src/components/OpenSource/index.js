import { Box } from "@mui/material"
import { Container, Paper, Grid, Typography } from "@mui/material"
import React from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const gridItems = [
  {
    image: "Banner1.png",
    title: "Ecommero",
    link: "https://github.com/Ninjas-Code-official/shopping-cart/",
  },
  {
    image: "Banner2.png",
    title: "Enatega Single Vendor",
    link: "https://github.com/Ninjas-Code-official/Enatega-Restaurant-Solution",
  },
  {
    image: "Banner3.png",
    title: "Enatega Multi Vendor",
    link:
      "https://github.com/Ninjas-Code-official/Marketplace-Food-Delivery-Solution",
  },
  {
    image: "Banner4.png",
    title: "OLO Listing App",
    link: "https://github.com/Ninjas-Code-official/olxclone-backend",
  },
]

export default function OpenSource() {
  const data = useStaticQuery(graphql`
  query {
    allImageSharp {
      nodes {
        gatsbyImageData(layout: FULL_WIDTH,quality: 50)
        parent {
          ... on File {
            relativePath
          }
        }
      }
    }
  }
`);
const imageLookup = data.allImageSharp.nodes.reduce((acc, node) => {
  const path = node.parent.relativePath;
  acc[path] = node.gatsbyImageData;
  return acc;
}, {});
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
              {imageLookup[item.image] && (
                <GatsbyImage image={getImage(imageLookup[item.image])} alt={item.title} />
              )}
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
