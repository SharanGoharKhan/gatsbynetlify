import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
export function useAnimation() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true, easing: "ease-in-sine" })
  }, [])
  return
}
