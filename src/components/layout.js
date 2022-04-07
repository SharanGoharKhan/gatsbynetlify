/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { TopBar, Footer } from "./index"
import { colors } from "../utils/colors"
const Layout = ({ children, bar, font, mobileGradient, home }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <TopBar
        siteTitle={data.site.siteMetadata?.title || `Title`}
        barColor={bar ? bar : colors.primary}
        fontColor={font ? font : colors.white}
        mobileGradient={mobileGradient}
        home={home}
      />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
