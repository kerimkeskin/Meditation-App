import * as React from "react";
import Svg, {
  Mask,
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import { Dimensions } from "react-native";

/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={'100%'}
      height={'100%'}
      viewBox="0 0 177 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      {...props}
    >
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={177}
        height={210}
      >
        <Rect
          width={176.435}
          height={210}
          rx={10}
          fill="url(#prefix__paint0_linear)"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          d="M182.988-26.105H-2.522v262.371h185.51v-262.37z"
          fill="#4FA4C0"
        />
        <Path
          d="M182.988-26.105H-2.522v262.371h185.51v-262.37z"
          fill="url(#prefix__paint1_linear)"
        />
        <Path
          d="M182.988-26.105H-2.522v262.371h185.51v-262.37z"
          fill="#4FA4C0"
        />
        <Path
          d="M182.988-26.105H-2.522v262.371h185.51v-262.37z"
          fill="url(#prefix__paint2_linear)"
        />
        <Path
          opacity={0.61}
          d="M57.947 29.072c8.244 0 14.927-6.683 14.927-14.928 0-8.244-6.683-14.927-14.927-14.927-8.245 0-14.928 6.683-14.928 14.927 0 8.245 6.684 14.928 14.928 14.928z"
          fill="#fff"
        />
        <Path
          opacity={0.22}
          d="M171.733-18.692c-.17 0-.328.012-.487.012-.215 0-.442-.012-.658-.012-14.496.068-27.078 9.204-32.348 21.932a36.459 36.459 0 00-3.049 14.6c0 12.365 6.155 23.303 15.562 29.91-6.982 2.426-12.003 9.034-12.003 16.844 0 5.497 2.482 10.405 6.393 13.68-8.841.703-15.812 8.082-15.812 17.104 0 1.598.238 3.14.646 4.613a20.706 20.706 0 00-4.216-.43c-10.428 0-19.031 7.696-20.504 17.715a19.255 19.255 0 00-5.01-.68 19.135 19.135 0 00-12.411 4.557c-4.784-7.515-13.171-12.525-22.749-12.525-2.947 0-5.78.488-8.433 1.36a17.25 17.25 0 00.556-9.101c-1.19-5.77-5.384-10.507-10.847-12.706-3.378-1.36-6.608-1.474-9.578-.896a14.017 14.017 0 001.349-5.962c0-7.22-5.452-13.159-12.468-13.94a26.3 26.3 0 001.689-9.238c0-14.169-11.153-25.696-25.151-26.376 3.083-3.253 4.987-7.64 4.987-12.468 0-10.03-8.127-18.157-18.158-18.157-10.03 0-18.158 8.126-18.158 18.157v216.953h237.401V17.851c-.012-20.176-16.367-36.543-36.543-36.543z"
          fill="url(#prefix__paint3_linear)"
        />
        <Path
          opacity={0.74}
          d="M209.624 65.478c-1.564-13.817-12.717-24.71-26.636-25.888v-.113l-.589.068a26.84 26.84 0 00-1.916-.068c-16.197 0-29.333 13.136-29.333 29.333 0 6.382 2.04 12.287 5.508 17.104.261.555.533 1.1.828 1.62-9.249 3.14-15.903 11.868-15.903 22.171 0 .045.012.091.012.147a25.517 25.517 0 00-15.676-5.361c-3.922 0-7.628.884-10.949 2.448C109.938 96.138 99 88.646 86.305 88.646c-6.472 0-12.479 1.95-17.489 5.281-3.015-4.601-8.206-7.65-14.123-7.65-3.003 0-5.825.793-8.274 2.176C44.413 79 36.026 71.905 25.972 71.905c-1.406 0-2.777.147-4.103.408.59-2.03.93-4.16.93-6.382 0-2.561-.443-5.02-1.225-7.31-2.64-8.91-10.87-15.404-20.64-15.404-.147 0-.283.023-.43.023-.148 0-.284-.023-.431-.023-.884 0-1.746.057-2.607.159v.147c-10.247 1.655-18.079 10.518-18.079 21.23v171.796h230.418V65.297l-.181.18z"
          fill="url(#prefix__paint4_linear)"
        />
        <Path
          d="M150.186 115.089l-30.773 14.361-78.615-35.443A37.066 37.066 0 002.476 98.79l-4.999 3.978-147.076 133.498h480.593L187.159 118.761a29.937 29.937 0 00-9.248-5.146 37.107 37.107 0 00-27.725 1.474z"
          fill="#A5C0EA"
        />
        <Path
          d="M177.899 113.616a37.08 37.08 0 00-27.713 1.473l-30.773 14.361-78.616-35.443a37.002 37.002 0 00-19.665-3.004l25.242 34.446-8.059 8.365 68.381 63.813 65.286-43.253-15.449-11.323 24.268-28.438-2.902-.997z"
          fill="#92B3EA"
        />
        <Path
          d="M150.186 115.089l-30.773 14.361-78.615-35.443A37.066 37.066 0 002.476 98.79l-4.999 3.978-147.076 133.498h480.593L187.159 118.761a29.937 29.937 0 00-9.248-5.146 37.107 37.107 0 00-27.725 1.474z"
          fill="url(#prefix__paint5_linear)"
        />
        <Path
          d="M125.33 172.566l-66.284-24.788a74.693 74.693 0 00-71.418 10.529l-102.464 77.959h395.448l-67.916-40.102a137.093 137.093 0 00-64.198-18.928 74.803 74.803 0 01-23.168-4.67z"
          fill="#fff"
        />
        <Path
          d="M148.509 177.236a74.778 74.778 0 01-23.179-4.67l-66.284-24.788a74.83 74.83 0 00-19.767-4.443l-7.515 17.772a17.274 17.274 0 002.867 18.056l49.566 57.091h196.426l-67.916-40.101a137.204 137.204 0 00-64.198-18.917z"
          fill="#CEE0FF"
        />
        <Path
          d="M125.33 172.566l-66.284-24.788a74.693 74.693 0 00-71.418 10.529l-102.464 77.959h395.448l-67.916-40.102a137.093 137.093 0 00-64.198-18.928 74.803 74.803 0 01-23.168-4.67z"
          fill="url(#prefix__paint6_linear)"
        />
        <Path
          d="M-15.104 236.537l23.066-57.93 28.415 57.93h-51.48z"
          fill="#2F497C"
        />
        <Path
          d="M18.503 236.537l24.233-68.301 27.26 68.301H18.502z"
          fill="#2F497C"
        />
        <Path
          d="M25.927 171.693l-12.514 24.913h6.257L-.007 236.537h49.645l-13.42-32.416 8.501 2.584-18.792-35.012z"
          fill="#627BB3"
        />
        <Path
          d="M-5.198 171.693l-12.524 24.913h6.268l-19.677 39.931h49.634l-13.41-32.416 8.49 2.584-18.78-35.012z"
          fill="#496AAA"
        />
        <Path
          d="M79.856 182.925l-10.36 20.606h5.18l-16.265 33.006h41.042l-11.096-26.806 7.027 2.143-15.528-28.949z"
          fill="#2F79AA"
        />
        <Path
          d="M57.822 182.925l-10.349 20.606h5.169l-16.265 33.006H77.42l-11.096-26.806 7.027 2.143-15.528-28.949z"
          fill="#496AAA"
        />
        <Path
          d="M147.546 236.538l16.605-41.677 20.436 41.677h-37.041z"
          fill="#2F497C"
        />
        <Path
          d="M171.733 236.538l17.432-49.135 19.609 49.135h-37.041z"
          fill="#2F497C"
        />
        <Path
          d="M177.072 189.885l-9.011 17.931h4.511l-14.157 28.722h35.715l-9.657-23.327 6.109 1.87-13.51-25.196z"
          fill="#627BB3"
        />
        <Path
          d="M154.675 189.885l-9.011 17.931h4.511l-14.157 28.722h35.715l-9.657-23.327 6.121 1.87-13.522-25.196z"
          fill="#496AAA"
        />
        <Path
          transform="rotate(-180 176.435 210)"
          fill="url(#prefix__paint7_linear)"
          d="M176.435 210h177.148v51.813H176.435z"
        />
        <G filter="url(#prefix__filter0_b)">
          <Path
            fill="#8DA5EA"
            fillOpacity={0.11}
            d="M-.479 158.093h177.148v51.813H-.479z"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={88.217}
          y1={61.085}
          x2={88.217}
          y2={318.787}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#67548B" />
          <Stop offset={1} stopColor="#EDC59F" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={90.875}
          y1={-87.186}
          x2={90.203}
          y2={114.315}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.437} stopColor="#9477FF" stopOpacity={0.53} />
          <Stop offset={0.96} stopColor="#9477FF" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint2_linear"
          x1={90.233}
          y1={-1.386}
          x2={90.233}
          y2={110.619}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7F88ED" />
          <Stop offset={0.96} stopColor="#96B0ED" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint3_linear"
          x1={86.827}
          y1={-71.54}
          x2={90.462}
          y2={191.609}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint4_linear"
          x1={92.81}
          y1={44.538}
          x2={95.507}
          y2={203.68}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint5_linear"
          x1={90.698}
          y1={65.212}
          x2={91.684}
          y2={164.083}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5B5FB3" stopOpacity={0.53} />
          <Stop offset={0.96} stopColor="#7E5AFF" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint6_linear"
          x1={77.941}
          y1={236.266}
          x2={82.888}
          y2={137.864}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.437} stopColor="#4198F4" stopOpacity={0.53} />
          <Stop offset={0.96} stopColor="#4AA2FF" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint7_linear"
          x1={267.251}
          y1={210}
          x2={265.009}
          y2={261.814}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3B4982" />
          <Stop offset={1} stopColor="#2745C1" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
