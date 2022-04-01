import { Box, Typography } from "@material-ui/core"
import React from "react"
import {
  Banner,
  BottomServices,
  ContactUs,
  PortfolioProjects,
  Typos,
} from "../../components"
import Layout from "../../components/layout"
import "./styles.css"
import "../../styles/styles.css"

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
          <PortfolioProjects />
        </Box>
      </div>
      <ContactUs />
    </Layout>
  )
}
