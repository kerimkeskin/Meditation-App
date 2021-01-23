import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={23}
      height={22}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.476 22C5.146 22 0 16.853 0 10.533 0 6.03 2.648 1.926 6.753.072a.8.8 0 01.76.053c.229.141.37.388.37.662.133 6.118 5.226 11.105 11.353 11.105.865 0 1.73-.097 2.577-.3a.8.8 0 01.733.194c.194.186.283.45.239.715A11.435 11.435 0 0111.476 22zM6.374 2.076a9.911 9.911 0 00-4.776 8.457c0 5.438 4.431 9.87 9.878 9.87 4.423 0 8.236-2.896 9.463-7.028-.564.08-1.138.115-1.703.115-6.568 0-12.094-5.014-12.862-11.414z"

      />
    </Svg>
  )
}

export default SvgComponent
