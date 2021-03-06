import * as React from "react"

function LinkedIn(props) {
  return (
    <svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.829 0H1.367C.613 0 0 .596 0 1.327v15.746c0 .732.613 1.327 1.367 1.327H17.83c.754 0 1.371-.595 1.371-1.327V1.327C19.2.596 18.583 0 17.829 0zM5.803 15.771H2.957v-8.78h2.85v8.78h-.004zM4.38 5.791c-.913 0-1.65-.71-1.65-1.581 0-.87.737-1.581 1.65-1.581.909 0 1.65.71 1.65 1.58 0 .876-.737 1.582-1.65 1.582zm12.09 9.98h-2.846V11.5c0-1.019-.021-2.329-1.478-2.329-1.483 0-1.71 1.11-1.71 2.255v4.345H7.59v-8.78h2.73V8.19h.039c.381-.69 1.311-1.417 2.695-1.417 2.88 0 3.416 1.82 3.416 4.185v4.813z"
        fill={props.color ? props.color : "#fff"}
      />
    </svg>
  )
}

export default LinkedIn
