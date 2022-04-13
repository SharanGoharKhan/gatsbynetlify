import React from "react"
import { Typography, Box, useTheme, useMediaQuery } from "@material-ui/core"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import "./styles.css"

export default function ServicesCard({ data }) {
  const mainTitle = data.title.substring(0, data.title.indexOf(" "))
  const secondaryTitle = data.title.substring(data.title.indexOf(" ") + 1)
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Box
      style={{ maxWidth: "375px", minHeight: small ? "320px" : "420px" }}
      className="service-card"
    >
      <Box className="image-wrapper">{data.image}</Box>
      <Box style={{ padding: 12 }}>
        <Typography
          variant="body1"
          className="text"
          style={{ fontWeight: 800 }}
        >
          {mainTitle} <br />
          {secondaryTitle}
        </Typography>
        <Typography variant="body2" className="text">
          {data.description}
        </Typography>
      </Box>
      <Box
        disableSpacing
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <ArrowForwardIcon className="arrow" />
      </Box>
    </Box>
  )
}
