import React from "react"
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import "./styles.css"

export default function ServicesCard({ data }) {
  const mainTitle = data.title.substring(0, data.title.indexOf(" "))
  const secondaryTitle = data.title.substring(data.title.indexOf(" ") + 1)
  return (
    <Card
      style={{ maxWidth: "375px", minHeight: "420px" }}
      className="service-card"
    >
      <Box className="image-wrapper">{data.image}</Box>

      <CardContent>
        <Typography variant="body1" style={{ fontWeight: 800 }}>
          {mainTitle} <br />
          {secondaryTitle}
        </Typography>
        <Typography variant="body2">{data.description}</Typography>
      </CardContent>
      <CardActions
        disableSpacing
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <ArrowForwardIcon />
      </CardActions>
    </Card>
  )
}
