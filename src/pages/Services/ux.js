import { hot } from "react-hot-loader"
import { Box } from "@material-ui/core"
import React from "react"
import { Banner, BottomServices, Typos } from "../../components"
import Layout from "../../components/layout"
import UXImage from "../../images/ux-logo.png"
import UXGroup from "../../images/ux-group.png"
import "./styles.css"

function Ux() {
  return (
    <Layout>
      <Banner
        titleMain={"UI/UX"}
        titleSecondary={"RENDER"}
        subTitle={
          "We Create truly habit-forming products. With the beautiful look and UX in mind"
        }
        image={UXImage}
      />
      <div style={{ position: "relative" }}>
        <BottomServices />

        <Typos
          first="DESIGN"
          second="UI/UX DESIGN"
          upperLeft="20vmin"
          upperTop="10vmin"
        />

        <Box
          style={{
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <img src={UXGroup} className="ux-image" alt="ux" />
        </Box>
      </div>
    </Layout>
  )
}

export default hot(module)(Ux)
