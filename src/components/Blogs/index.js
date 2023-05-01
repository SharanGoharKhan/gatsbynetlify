import React from "react"
import Blog1 from "../../images/blog-image.png"
import Blog2 from "../../images/blog-image2.png"
import { externalLinks } from "../../utils/links"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Grid, Typography, Container, Box, Button } from "@mui/material"
import { Typos } from ".."
import { colors } from "../../utils/colors"

export default function Blogs() {
  const classes = {
    blogBox: {
      maxWidth: "400px",
      padding: "1rem",
      position: "absolute",
      border: `2px solid ${colors.primary}`,
      backgroundColor: "white",
      zIndex: "10000",
      top: "100px",
    },
    blogBackBox: {
      border: "2px solid black",
      position: "absolute",
      top: 0,
      height: " 400px",
      maxWidth: "400px",
      left: "5rem",
    },
    bold: {
      fontWeight: 900,
      color: 'Black'
    },
  }
  return (
    <>
      <Typos
        second="BLOG & NEWS "
        upperTop="0vmin"
        upperLeft="5.2vmin"
        top="10vmin"
        right={"4vmin"}
      />
      <Box mt={5} />
      <Container mt={5} style={{ overflow: "visible" }}>
        <Grid container spacing={2} style={{ overflow: "visible" }}>
          <Grid
            md={5}
            style={{
              height: "20rem",
              border: "3px solid",
              position: "relative",
              overflow: "visible",
            }}
            data-aos="slide-left"
          >
            <Box>
              <img src={Blog1} alt="blog" />
            </Box>
            <Box sx={classes.blogBox} style={{ left: "-10px" }}>
              <Typography sx={classes.bold} align="center">
                How javascript works behind the scenes
              </Typography>
              <Typography style={{ color: colors.primary }} align="center">
                Javascript is always hosted in some environment, typically it’s
                hosted in a browser that is Google Chrome, Firefox, Safari etc.
                Javascript will run in this environment but not restricted to
                only this it can also run in other hosts such Nodejs web server
                or some application that accepts JS code input.
              </Typography>
              <Box textAlign={"center"}>
                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={classes.bold}
                  href={externalLinks.blog1}
                  target="_blank"
                >
                  CONTINUE
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid md={2}></Grid>
          <Grid
            md={5}
            style={{
              height: "20rem",
              border: "3px solid",
              position: "relative",
              marginTop: "5rem",
              overflow: "visible",
            }}
            data-aos="slide-right"
          >
            <Box>
              <img src={Blog2} alt="blog" />
            </Box>
            <Box
              style={{
                marginTop: "6rem",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                overflow: "visible",
              }}
            >
              <Box sx={classes.blogBox} style={{ right: "-10px" }}>
                <Typography sx={classes.bold} align="center">
                  How to Calculate the Cost of App Development?
                </Typography>
                <Typography style={{ color: colors.primary }} align="center">
                  The complexity of the app, including some features and a
                  number of features, can have a direct impact on the cost of
                  the app. Every feature to make it functional takes time to
                  develop which again increases the cost of the app to be
                  developed. Most agencies charge on an hourly basis so the more
                  time it takes to complete a feature more they will charge.
                </Typography>
                <Box textAlign={"center"}>
                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={classes.bold}
                    href={externalLinks.blog2}
                    target="_blank"
                  >
                    CONTINUE
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box mt={20} />
        <Box textAlign={"center"}>
          <Button
            variant="outlined"
            sx={{ border: "2px solid black", borderRadius: "0" }}
            href={externalLinks.allBlogs}
            target="_blank"
          >
            SEE ALL
          </Button>
        </Box>
      </Container>
    </>
  )
}
