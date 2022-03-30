import { Typography } from "@material-ui/core"
import React from "react"
import "../../styles/styles.css"

export default function Typos({
  first,
  second,
  third,
  top,
  right,
  upperRight,
  upperTop,
  upperLeft,
}) {
  return (
    <div className="typos">
      <Typography variant="h2" display="inline" className="brackets">
        {"{"}
        <Typography
          variant="h4"
          display="inline"
          className="typos-before"
          style={{
            top: upperTop && upperTop,
            right: upperRight && upperRight,
            left: upperLeft && upperLeft,
          }}
        >
          {" "}
          {first}
        </Typography>

        <Typography variant="h4" display="inline" className="typos-main">
          {" "}
          {second}
        </Typography>
        <Typography
          variant="h4"
          display="inline"
          className="typos-after"
          style={{
            top: top ? top : "0vmin",
            right: right ? right : "9vmin",
          }}
        >
          {" "}
          {third}
        </Typography>
        {"}"}
      </Typography>
    </div>
  )
}