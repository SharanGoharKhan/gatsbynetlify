import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"
export function useAnimation() {
  React.useEffect(() => {
    Aos.init({ duration: 800, once: true, easing: "ease-in-sine" })
  }, [])
  return
}
