import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      style={{
        marginTop: "35%",
      }}
      width={50}
      height={50}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={55}
        y={55}
        width={55}
        height={55}
        rx={27.5}
        transform="rotate(-180 55 55)"
        fill="#E6E7F2"
      />
      <Path
        d="M20.566 34.357L34.24 20.685m-13.504-.043L34.433 34.34 20.735 20.642z"
        stroke="#3F414E"
        strokeWidth={2.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
