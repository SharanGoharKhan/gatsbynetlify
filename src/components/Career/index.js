import React from "react"
import { Typography, Box } from "@material-ui/core"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as GatsbyLink } from "gatsby"

export default function Career({ data }) {
  return (
    <GatsbyLink
      to="https://forms.gle/L3GUwkLvRQPBRSN76"
      style={{ textDecoration: "none" }}
      target="_blank"
    >
      <div
        style={{
          filter: "drop-shadow(10px 10px 1px #179afb)",
          border: "1px solid gray",
          borderRadius: 0,
          width: "370px",
          minHeight: "200px",
          backgroundColor: "#301e5b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ padding: 12 }}>
          <Typography
            variant="body1"
            style={{ fontWeight: 800, color: "#fff", fontSize: "1.2rem" }}
          >
            {data.title}
          </Typography>
        </Box>
        <Box
          disableSpacing
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#fff",
            padding: 12,
          }}
        >
          <Typography
            variant="body2"
            style={{ color: "#fff", fontSize: "0.8rem" }}
          >
            {data.post}
          </Typography>
          <ArrowForwardIcon />
        </Box>
      </div>
    </GatsbyLink>
  )
}
