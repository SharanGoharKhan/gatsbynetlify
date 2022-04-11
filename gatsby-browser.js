/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import "@fontsource/montserrat"
import "@fontsource/poppins"
// export const onInitialClientRender = () => {
//   setTimeout(function () {
//     document.getElementById("___loader").style.display = "none"
//   }, 1000)
//  }
export const onClientEntry = () => {
  document.getElementById("___loader").style.display = "flex"
}
export const onPreRouteUpdate = () => {
  document.getElementById("___loader").style.display = "flex"
}
export const onRouteUpdateDelayed = () => {
  document.getElementById("___loader").style.display = "flex"
}
export const onRouteUpdate = () => {
  setTimeout(() => {
    document.getElementById("___loader").style.display = "none"
    document.getElementById("___loader").style.minHeight = "0vh"
  }, 1000)
}
