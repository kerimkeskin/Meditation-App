import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={110}
      height={'100%'}
      viewBox="0 0 110 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G opacity={0.3} fill="#E6E7F2">
        <Path d="M54.524 54.524v54.511C24.422 109.035 0 84.625 0 54.524 0 47.107 1.476 40.037 4.167 33.6v20.924h50.357z" />
        <Path d="M109.047 54.524c0 30.102-24.409 54.511-54.523 54.511V54.524h54.523zM109.047 54.524H54.524V0c30.114 0 54.523 24.41 54.523 54.524zM54.524 0v54.524H4.168V33.6C12.366 13.867 31.838 0 54.524 0z" />
      </G>
      <Path
        d="M54.524 54.523v43.95c-24.27 0-43.96-19.68-43.96-43.95 0-5.98 1.19-11.68 3.36-16.87v16.87h40.6z"
        fill="#E6E7F2"
      />
      <Path
        d="M98.484 54.523c0 24.27-19.68 43.95-43.96 43.95v-43.95h43.96zM98.484 54.523h-43.96v-43.96c24.28 0 43.96 19.68 43.96 43.96z"
        fill="#E6E7F2"
      />
      <Path
        d="M54.524 10.563v43.96h-40.6v-16.87c6.61-15.91 22.31-27.09 40.6-27.09z"
        fill="#E6E7F2"
      />
    </Svg>
  )
}

export default SvgComponent
