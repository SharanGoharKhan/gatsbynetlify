import { hot } from "react-hot-loader"
import { Box } from "@mui/material"
import React from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import UXImage from "../../images/ux-logo.webp"
import { StaticImage } from "gatsby-plugin-image"
import "./styles.css"
import Seo from "../../components/seo"

function Ux() {
  return (
    <>
      <Seo
        title="UI/UX Design Services"
        description="Crafting Intuitive and Engaging User Experiences"
      />
      <Layout>
        <Banner
          titleMain={"UI/UX Design Services"}
          titleSecondary={"Crafting Intuitive and Engaging User Experiences"}
          subTitle={
            "Our UI/UX design services are focused on creating visually stunning and user-centric experiences that resonate with your target audience. Our talented team of designers collaborates closely with you to understand your business goals, user needs, and brand identity. We utilize a research-driven approach to develop intuitive interfaces and seamless user flows, ensuring your digital products are both aesthetically pleasing and highly functional. By prioritizing usability, consistency, and accessibility, we create engaging experiences that drive user satisfaction and promote customer loyalty. From wireframes and prototypes to fully realized designs, we deliver UI/UX solutions that elevate your digital presence and drive business success."
          }
          image={UXImage}
        />
        <div style={{ position: "relative" }}>
          <BottomServices />

          <Typos second="UI/UX DESIGN " upperLeft="20vmin" upperTop="10vmin" />

          <Box
            style={{
              textAlign: "center",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <StaticImage src="../../images/ux-group.png" className="ux-image" alt="ux" />
          </Box>
        </div>
      </Layout>
    </>
  )
}

export default hot(module)(Ux)
