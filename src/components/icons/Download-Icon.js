import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      style={{
        marginTop: "35%",
      }}
      width={55}
      height={55}
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
        fill="#03174C"
        opacity={0.5}
      />
      <Path
        d="M32.5 24.75l-5 5-5-5m5 3.8v-10.3m-9 12.5v4c0 1.1.9 2 2 2h14a2 2 0 002-2v-4h-18z"
        stroke="#E6E7F2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
