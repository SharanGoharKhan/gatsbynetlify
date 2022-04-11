/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import "@fontsource/montserrat"
import "@fontsource/poppins"
export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById("___loader").style.display = "none"
  }, 1000)
}
// export const onPreRouteUpdate = () => {
//   setTimeout(() => {
//     document.getElementById("___loader").style.display = "none"
//   }, 1000)
// }
