import { Box, makeStyles } from "@material-ui/core"
import { ImageList, ImageListItem } from "@mui/material"
import { Link } from "gatsby"
import React from "react"
import { lowerData, portfolioData } from "../../utils/portfolioData"
import "./styles.css"
const useStyles = makeStyles({
  box: {
    overflow: "visible",
    "& > *": {
      overflow: "visible !important",
    },
  },
})
export default function PortfolioProjects() {
  const classes = useStyles()
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
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                }}
              />
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
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                }}
              />
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}
