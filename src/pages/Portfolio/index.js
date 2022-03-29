import { Box, Typography } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, ContactUs, Typos } from "../../components"
import Layout from "../../components/layout"
import "./styles.css"
import "../../styles/styles.css"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { portfolioData, lowerData } from "../../utils/portfolioData"

export default function Portfolio() {
  return (
    <Layout>
      <Banner
        titleMain={"Some Of Our Work"}
        titleSecondary={"Nice Work"}
        subTitle={"We are a team of engineers based in Islamabad, Pakistan"}
        image={false}
      />
      <div style={{ position: "relative" }}>
        <BottomServices />
        <Typos first="PORT" second="PORTFOLIO" />

        <Box mt={15} mb={15}>
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
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                  }}
                />
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
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
      <ContactUs />
    </Layout>
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
