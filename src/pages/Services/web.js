import React from "react"
import { Banner } from "../../components"
import Layout from "../../components/layout"
import WebService from "../../images/web.svg"

export default function Web() {
  return (
    <Layout>
      <Banner
        title={"WEB DEVELOPEMENT"}
        subTitle={
          "Create responsive and multi-purpose web solutions. With stunning design and amazing performance level."
        }
        image={WebService}
      />
    </Layout>
  )
}
