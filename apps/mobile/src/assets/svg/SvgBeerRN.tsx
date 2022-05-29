import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { ReactElement } from "react";

export const SvgBeerRN = ({ color = "black" }: SvgProps): ReactElement => (
  <Svg width="30" height="30" viewBox="0 0 512 512" fill={color}>
    <Path d="M395.29 184.945h-13.957l-.771-19.459c2.3-1.758 4.241-4.089 5.631-6.746 6.303-12.044 9.633-25.65 9.633-39.272 0-46.726-38.014-84.758-84.74-84.758-12.425 0-24.543 2.696-35.596 7.814C257.796 16.39 227.981 0 195.383 0c-38.054 0-72.255 22.483-87.841 56.237-31.187 4.132-55.33 30.895-55.33 63.193 0 15.35 5.463 29.999 15.438 41.571l-12.016 300.97c-.533 13.351 4.272 25.731 13.53 35.366C78.423 506.974 90.882 512 104.244 512h239.552c13.363 0 25.823-5.026 35.08-14.662 9.258-9.635 14.063-22.236 13.53-35.587l-.199-4.933h3.083c35.564 0 64.497-28.773 64.497-64.337V249.134c.001-35.564-28.932-64.189-64.497-64.189zm-45.529 284.58c-.911.949-2.898 2.098-5.965 2.098H104.244c-3.066 0-5.054-1.311-5.965-2.26-.912-.949-2.423-2.533-2.3-5.596L107.72 170.14h47.274c3.892 5.384 8.581 11.294 14.016 16.112 4.241 3.762 8.775 6.79 13.521 9.76v46.807c0 11.149 9.039 20.189 20.189 20.189s20.189-9.039 20.189-20.189v-32.162c4.544.62 9.141.937 13.759.937 3.7 0 7.413.121 11.124-.288 29.15-3.219 54.733-19.63 71.237-41.164h21.292l11.74 293.765c.123 3.063-1.387 4.669-2.3 5.618zm4.634-339.762h-17.777c.201-1.346.402-2.394.571-3.44 1.779-11.008-5.701-21.534-16.708-23.314-11-1.774-21.373 5.62-23.151 16.627-4.393 27.175-26.587 48.227-53.972 51.252-17.238 1.899-34.571-3.634-47.559-15.15-8.136-7.215-12.987-17.821-13.311-29.081-.319-11.144-9.584-19.878-20.761-19.606-11.144.32-19.921 9.935-19.6 21.082.012.437.051.284.071 1.63H94.689c-1.374-4.038-2.101-6.626-2.101-10.01 0-12.886 10.483-23.533 23.37-23.533.976 0 1.976-.094 3.061.048 9.96 1.303 19.388-4.933 22.073-14.629 6.729-24.299 29.055-41.268 54.29-41.268 23.984 0 45.379 15.225 53.237 37.883a20.19 20.19 0 0 0 14.085 12.948 20.194 20.194 0 0 0 18.565-4.622 44.241 44.241 0 0 1 29.819-11.516c24.462 0 44.362 20.225 44.362 44.687 0 3.305-.354 5.974-1.055 10.012zm40.895 286.679h-4.696l-7.649-191.119h12.345c13.3 0 24.12 10.512 24.12 23.81v143.348c0 13.301-10.819 23.961-24.12 23.961z" />
    <Path d="M146.192 197.058c-11.149 0-20.189 9.039-20.189 20.189v57.874c0 11.149 9.039 20.189 20.189 20.189s20.189-9.039 20.189-20.189v-57.874c-.001-11.15-9.04-20.189-20.189-20.189z" />
  </Svg>
);
