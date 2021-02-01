import * as React from "react";
import Svg, { Rect, Mask, G, Path } from "react-native-svg";
import { Dimensions, TouchableOpacity } from "react-native";
const Height = Dimensions.get("window").height;
function SvgComponent(props) {
  return (
    <Svg
      style={{ position: "absolute", right: 0 }}
      width={"100%"}
      height={Height / 9.43}
      viewBox="0 0 374 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <Rect width={374} height={95} rx={10} fill="#F1DDCF" />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={374}
        height={95}
      >
        <Rect width={374} height={95} rx={10} fill="#333242" />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          d="M57.952 40.446C57.952 23.07 82.452 6.584 98 0H0v95h89.048c3.77-15.52-4.712-27.277-13.663-32.92-8.952-5.644-17.433-7.58-17.433-21.634z"
          fill="#ECD3C2"
        />
        <Path
          d="M199.55 32.719C183.704 16.628 191.094 2.202 196.77-3H374v46.469c-40.659 43.694-67.765 11.79-70.197 3.814-2.433-7.976-4.865-35.025-43.091-11.79-38.227 23.234-41.354 17.339-61.162-2.774z"
          fill="#FAC978"
        />
        <Path
          d="M246 98c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32-3.636-33.934 8.721-27.722 22.304-20.656 5.96 3.1 12.879 2.054 18.89-.944C243.288 66.377 246 82.442 246 98z"
          fill="#FF7C6B"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
