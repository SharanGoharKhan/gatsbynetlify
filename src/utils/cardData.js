import React from "react"
import AppleIcon from "@mui/icons-material/Apple"
import AndroidIcon from "@mui/icons-material/Android"
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor"
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LanguageIcon from "@mui/icons-material/Language"
export const LeftCardData = [
  {
    title: "IOS Development",
    description:
      "We use React Native to build brilliant native experiences in the IOS world. That technology allows to have a single codebase for both platforms and reduce development efforts to make the release happen.",
    image: <AppleIcon style={{ color: "#179AFB" }} />,
    to: "/ios",
  },
  {
    title: "Android Development",
    description:
      "We use React Native to build brilliant native experiences in the android world. That technology allows to have a single codebase for both platforms and reduce development efforts to make the release happen.",
    image: <AndroidIcon style={{ color: "#179AFB" }} />,
    to: "/android",
  },
  {
    title: "Web App Development",
    description:
      "We develop Windows, MacOS and Linux based apps using the Electron technology. This cross-platform devil is used to make desktop users happy.",
    image: <ScreenshotMonitorIcon style={{ color: "#179AFB" }} />,
    to: "/web",
  },
]
export const RightCardData = [
  {
    title: "Website Development",
    description:
      "We execute both Frontend and Backend (API) development services. The team focuses on JavaScript technologies, therefore 9/10 projects are done using the same tech stack: React + Node.js.",
    image: <LanguageIcon style={{ color: "#179AFB" }} />,
    to: "/desktop",
  },
  {
    title: "UI/UX Design",
    description:
      "  We prototype, come up with branding, build custom UI/UX Design for web, mobile and desktop platforms. Conduct UX interviews to make sure the design is 100% user-friendly.",
    image: <DarkModeIcon style={{ color: "#179AFB" }} />,
    to: "/ux",
  },
  {
    title: "Solution for Startups",
    description:
      "We develop Windows, MacOS and Linux based apps using the Electron technology. This cross-platform devil is used to make desktop users happy.",
    image: <EmojiObjectsIcon style={{ color: "#179AFB" }} />,
    to: "/saas",
  },
]
