import * as React from "react"

function Speedometer(props) {
  return (
    <svg
      width={70}
      height={70}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={8}
        width={71}
        height={54}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.744 16.783A34.702 34.702 0 0132.949 8v17.586a18.367 18.367 0 00-6.29-1.104c-2.158 0-4.231.373-6.158 1.058l-8.757-8.757zm45.731-.675L40.91 31.221a18.605 18.605 0 00-3.86-3.528V8a34.687 34.687 0 0120.425 8.108zM0 42.94v2.051h8.203v-2.05c0-6.478 3.354-12.186 8.417-15.481l-7.775-7.775C3.127 26.097 0 34.277 0 42.939zm70 2.05H59.126l9.784-10.772A35.23 35.23 0 0170 42.939v2.05zm-35 .07a8.15 8.15 0 00-5.802 2.402C26 50.66 26 55.864 29.198 59.062A8.15 8.15 0 0035 61.465a8.15 8.15 0 005.8-2.403c3.2-3.198 3.2-8.402 0-11.6a8.15 8.15 0 00-5.8-2.403zm1.256-4.038l25.02-22.828h8.725v8.722l-22.77 25.07a12.248 12.248 0 00-3.53-7.424 12.211 12.211 0 00-7.445-3.54z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#prefix__a)">
        <path fill="#fff" d="M0 0h70v70H0z" />
      </g>
    </svg>
  )
}

export default Speedometer
