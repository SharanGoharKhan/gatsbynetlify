import * as React from "react"

function Facebook(props) {
  return (
    <svg
      width={10}
      height={18}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.97 9.9l.499-3.185H6.356V4.648c0-.872.435-1.721 1.829-1.721H9.6V.215S8.316 0 7.088 0C4.525 0 2.85 1.526 2.85 4.287v2.428H0V9.9h2.85v7.7h3.506V9.9h2.615z"
        fill={props.color ? props.color : "#fff"}
      />
    </svg>
  )
}

export default Facebook
