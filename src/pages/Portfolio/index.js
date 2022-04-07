import { Box } from "@material-ui/core"
import React from "react"
import {
  Banner,
  BottomServices,
  PortfolioProjects,
  Typos,
} from "../../components"
import Layout from "../../components/layout"
import "./styles.css"
import "../../utils/styles/styles.css"

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
        <Box
          style={{
            overflow: "visible",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <PortfolioProjects />
        </Box>
      </div>
    </Layout>
  )
}
