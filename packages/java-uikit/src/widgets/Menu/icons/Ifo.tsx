import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20.7 19.574" {...props}>
      <g
        data-name="Grupo 11272"
        fill="none"
        stroke={props.theme?.colors.text}
        strokeMiterlimit={10}
        strokeWidth={1.2}
      >
        <path
          data-name="Rect\xE1ngulo 3787"
          d="M2.169.599h3.307v8.188a2.437 2.437 0 01-2.437 2.437h0A2.437 2.437 0 01.601 8.787v-6.62A1.568 1.568 0 012.169.599z"
        />
        <path
          data-name="Rect\xE1ngulo 3788"
          d="M5.476.599h4.875v8.188a2.437 2.437 0 01-2.437 2.437h0a2.437 2.437 0 01-2.438-2.437V.599h0z"
        />
        <path
          data-name="Rect\xE1ngulo 3789"
          d="M10.351.599h4.875v8.188a2.437 2.437 0 01-2.437 2.437h0a2.437 2.437 0 01-2.438-2.437V.599h0z"
        />
        <path
          data-name="Rect\xE1ngulo 3790"
          d="M15.226.599h3.307a1.568 1.568 0 011.568 1.568v6.62a2.437 2.437 0 01-2.437 2.437h0a2.437 2.437 0 01-2.438-2.437V.599h0z"
        />
        <path
          data-name="Rect\xE1ngulo 3791"
          d="M2.919.599h14.864a2.318 2.318 0 012.318 2.318v13.755a2.3 2.3 0 01-2.3 2.3h-14.9a2.3 2.3 0 01-2.3-2.3V2.917A2.318 2.318 0 012.919.599z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
