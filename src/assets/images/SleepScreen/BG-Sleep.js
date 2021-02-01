import * as React from "react";
import Svg, { G, Path, Circle, Defs, ClipPath } from "react-native-svg";
import { Dimensions, View } from "react-native";
const originalWidth = 389;
const originalHeight = 260;
const aspectRatio = originalWidth / originalHeight;
const windowWidth = Dimensions.get("window").width;

function SvgComponent(props) {
  return (
    <View style={{ width: windowWidth, aspectRatio }}>
      <Svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <G clipPath="url(#prefix__clip0)">
          <Path fill="#03174C" d="M0 0h414v896H0z" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 98.17c-29.113 12.543-49.494 41.495-49.494 75.208 0 45.207 36.648 81.854 81.855 81.854 27.473 0 51.785-13.535 66.632-34.3a57.56 57.56 0 0015.74 2.18c19.977 0 37.575-10.186 47.883-25.649 7.567 8.13 18.362 13.216 30.345 13.216 16.199 0 30.228-9.294 37.044-22.84 11.336 6.616 24.522 10.406 38.593 10.406 25.67 0 48.394-12.615 62.31-31.983a53.966 53.966 0 0014.364 1.935c8.455 0 16.455-1.947 23.577-5.418 7.848 13.758 22.654 23.033 39.627 23.033 25.178 0 45.59-20.412 45.59-45.59 0-23.309-17.493-42.532-40.066-45.259V-20H0V98.17zm165.547 39.98h-.275l.089.164.186-.164z"
            fill="#1F265E"
          />
          <Circle cx={74.059} cy={39.63} r={25.37} fill="#D3D4DE" />
          <Circle cx={65.297} cy={27.926} r={4.657} fill="#C5C6D0" />
          <Circle cx={84.527} cy={39.416} r={6.752} fill="#F1F1F3" />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M92.888 56.633c-3 3.32-6.866 5.843-11.241 7.213a6.752 6.752 0 0111.242-7.213z"
            fill="#C5C6D0"
          />
          <Circle cx={68.316} cy={55.624} r={3.019} fill="#C5C6D0" />
          <Circle cx={91.279} cy={30.255} r={25.37} fill="#1F265E" />
          <Path
            d="M25.474 73.93s1.372 7.133 7.52 5.518c0 0-5.158 3.95-3.177 8.622 0 0-2.352-5.285-7.643-5.026 0 0 4.55-1.488 3.3-9.115z"
            fill="#FCFCFC"
          />
          <Path
            d="M363.741 21.198s1.372 7.134 7.52 5.518c0 0-5.158 3.951-3.177 8.622 0 0-2.352-5.285-7.643-5.026 0 0 4.55-1.488 3.3-9.114zM25.696 134.167s.94 4.886 5.151 3.78c0 0-3.533 2.706-2.176 5.905 0 0-1.611-3.62-5.235-3.442 0 0 3.116-1.02 2.26-6.243z"
            fill="#6D75B0"
          />
          <Path
            d="M386.084 72.184s-4.209 2.151-2.084 5.7c0 0-3.404-2.507-5.963-.421 0 0 2.875-2.429 1.753-5.687 0 0 1.756 2.572 6.294.408z"
            fill="#fff"
          />
          <Path
            d="M39.023 124.148s.94 4.886 5.151 3.78c0 0-3.533 2.706-2.176 5.905 0 0-1.61-3.62-5.235-3.442 0 0 3.116-1.019 2.26-6.243zM405.955 103.832s-4.208 2.151-2.083 5.699c0 0-3.404-2.506-5.963-.421 0 0 2.875-2.428 1.753-5.686 0 0 1.755 2.572 6.293.408z"
            fill="#6D75B0"
          />
        </G>
        <Defs>
          <ClipPath id="prefix__clip0">
            <Path fill="#fff" d="M0 0h414v896H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
}

export default SvgComponent;
