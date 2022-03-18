import React from "react"
import { Banner } from "../../components"
import Layout from "../../components/layout"
import UXImage from "../../images/ux.svg"

export default function Ux() {
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
    </Layout>
  )
}
