import { Box } from "@mui/material"
import React from "react"
import {
  Banner,
  BottomServices,
  PortfolioProjects,
  Typos,
} from "../../components"
import Layout from "../../components/layout"
import "./styles.css"
import Seo from "../../components/seo"

export default function Portfolio() {
  return (
    <>
      <Seo
        title="Our Portfolio"
        description="Showcasing Our Expertise Through Successful Projects"
      />
      <Layout>
        <Banner
          titleMain={"Our Portfolio"}
          titleSecondary={
            "Showcasing Our Expertise Through Successful Projects"
          }
          subTitle={
            "Explore our diverse portfolio, showcasing a variety of successful projects across web and mobile app development, UI/UX design, desktop applications, and more. Our work demonstrates our commitment to delivering high-quality, innovative solutions that drive growth and customer satisfaction for businesses of all sizes and industries. Each project is a testament to our team's dedication, skill, and passion for transforming clients' visions into reality. We invite you to browse our portfolio and discover the depth of our expertise, as we continue to empower businesses with impactful digital experiences."
          }
          image={false}
        />
        <div style={{ position: "relative" }}>
          <BottomServices />
          <Typos second="PORTFOLIO " />
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
    </>
  )
}
