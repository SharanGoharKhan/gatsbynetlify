import { Box } from "@mui/material"
import { ImageList, ImageListItem } from "@mui/material"
import { Link } from "gatsby"
import React from "react"
import { lowerData, portfolioData } from "../../utils/portfolioData"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import "./styles.css"

export default function PortfolioProjects() {
  const classes = {
    box: {
      overflow: "visible",
      "& > *": {
        overflow: "visible !important",
      },
    },
  }
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


  // Create a lookup table for images
  const imageLookup = data.allImageSharp.nodes.reduce((acc, node) => {
    const path = node.parent.relativePath;
    acc[path] = node.gatsbyImageData;
    return acc;
  }, {});
  const imageLookup1 = data.allImageSharp.nodes.reduce((acc, node) => {
    const path = node.parent.relativePath;
    acc[path] = node.gatsbyImageData;
    return acc;
  }, {});
  return (
    <Box className={classes.box}>
      <ImageList
        sx={{ width: "90%", minHeight: "fit-content", margin: "auto" }}
        variant="quilted"
        cols={4}
      >
        {portfolioData.map(item => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            className={"imageCard"}
          >
            <Link to={`/Portfolio${item.to}`}>
            {imageLookup[item.img] && (
            <GatsbyImage image={getImage(imageLookup[item.img])} alt={item.title} />
          )}
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        sx={{ width: "90%", minHeight: "fit-content", margin: "auto" }}
        variant="quilted"
        cols={6}
      >
        {lowerData.map(item => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            className={"imageCard"}
          >
            <Link to={`/Portfolio${item.to}`}>
            {imageLookup1[item.img] && (
            <GatsbyImage image={getImage(imageLookup1[item.img])} alt={item.title} />
          )}
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
