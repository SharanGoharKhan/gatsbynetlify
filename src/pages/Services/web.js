import { Box, useMediaQuery } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import WebService from "../../images/web-banner.svg"
import WebGroup from "../../images/group-web.png"
import { useTheme } from "@mui/material/styles"
import "./styles.css"
import "../../utils/styles/styles.css"

export default function Web() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Layout>
      <Banner
        titleMain={"WEB"}
        titleSecondary={"DEVELOPEMENT"}
        subTitle={
          "Create responsive and multi-purpose web solutions. With stunning design and amazing performance level."
        }
        image={WebService}
      />
      <div style={{ position: "relative" }}>
        <BottomServices />
        <Typos
          first="DEV"
          second="DEVELOPEMENT PROCESS"
          third="PRO"
          top="0vmin"
          right="17.5vmin"
        />

        <Box
          style={{
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img
            src={WebGroup}
            className={matches ? "web-image-small" : "web-image"}
            alt="web"
          />
        </Box>
      </div>
    </Layout>
  )
}
