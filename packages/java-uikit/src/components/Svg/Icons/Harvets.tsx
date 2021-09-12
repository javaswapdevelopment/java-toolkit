import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 19.947 20.523" {...props}>
      <g
        data-name="Grupo 13375"
        transform="translate(-1362.437 -7098.591)"
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={1.2}
      >
        <path
          data-name="Rect\xE1ngulo 4500"
          d="M1370.238 7108.526l2.604 2.502h0l-5.743 5.975a1.75 1.75 0 01-2.474.049l-.08-.077a1.75 1.75 0 01-.05-2.475l5.743-5.974h0z"
          strokeWidth={1.200048}
        />
        <rect
          data-name="Rect\xE1ngulo 4501"
          width={5.33}
          height={2.149}
          rx={1.042}
          transform="rotate(43.86 -8138.8 5255.17)"
        />
        <path data-name="L\xEDnea 1273" d="M1378.645 7102.381l-5.628 5.859" />
        <path
          data-name="Trazado 8496"
          d="M1380.415 7099.224c-3.2.764-6.369 1.5-9.893 2.626a.949.949 0 00-.352 1.7 40.869 40.869 0 017.676 7.373.949.949 0 001.689-.42c.982-3.567 1.591-6.764 2.226-9.99a1.146 1.146 0 00-1.346-1.289z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
