import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={29}
      height={26}
      viewBox="0 0 29 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M25.309 3.375C22.68.61 18.425.61 15.796 3.375l-.208.219c-.599.63-1.577.63-2.188 0C11.113 1.176 7.445.559 4.743 2.462 1.099 5.047.745 10.282 3.69 13.38l1.296 1.364L12.837 23a2.259 2.259 0 003.314 0L24 14.744l1.296-1.364c2.64-2.764 2.64-7.24.012-10.005z"
          stroke="#E6E7F2"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(.5 .019)" d="M0 0h28v25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
