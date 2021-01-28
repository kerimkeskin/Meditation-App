import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#prefix__clip0)"
        stroke="#E6E7F2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          d="M13.25 23.882c6.276 0 11.364-5.087 11.364-11.363S19.526 1.155 13.25 1.155c-6.276 0-11.364 5.088-11.364 11.364 0 6.276 5.088 11.363 11.364 11.363z"
          strokeWidth={2}
        />
        <Path
          d="M17.796 17.064s-1.705-2.273-4.546-2.273c-2.84 0-4.545 2.273-4.545 2.273"
          strokeWidth={2}
        />
        <Path d="M9.84 9.11h.012M16.66 9.11h.01" strokeWidth={3} />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(.75 .019)" d="M0 0h25v25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
