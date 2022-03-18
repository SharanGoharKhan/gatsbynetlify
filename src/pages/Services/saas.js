import React from "react"
import { Banner } from "../../components"
import Layout from "../../components/layout"
import StartUpImage from "../../images/starups.svg"

export default function Saas() {
  return (
    <Layout>
      <Banner
        titleMain={"SOFTWARE FOR"}
        titleSecondary={"STARTUPS"}
        subTitle={
          "We help startups test their ideas fast and on budget - applying our analytics and techinal expertises"
        }
        image={StartUpImage}
      />
    </Layout>
  )
}
