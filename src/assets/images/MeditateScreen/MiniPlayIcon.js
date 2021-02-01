import * as React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;
function SvgComponent(props) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Svg
        style={{
          position: "absolute",
          right: (Width * 0.9) / 12.46,
          top: (Height / 9.43 - 40) / 2,
        }}
        width={41}
        height={40}
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Circle cx={20.5} cy={20} r={20} fill="#3F414E" />
        <Path
          d="M25.664 18.573l-7.658-4.351c-1.114-.631-2.506.16-2.506 1.422v8.709c0 1.268 1.392 2.059 2.506 1.422l7.658-4.352a1.632 1.632 0 000-2.85z"
          fill="#F0F1F2"
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default SvgComponent;
