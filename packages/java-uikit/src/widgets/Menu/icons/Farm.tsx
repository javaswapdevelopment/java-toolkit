import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 19.947 20.524" {...props}>
      <g
        data-name="Grupo 11263"
        transform="translate(-2220.851 -7982.885)"
        fill="none"
        stroke={props.theme?.colors.text}
        strokeMiterlimit={10}
        strokeWidth={1.2}
      >
        <path
          data-name="Rect\xE1ngulo 3784"
          d="M2228.652 7992.821l2.604 2.502h0l-5.743 5.975a1.75 1.75 0 01-2.474.049l-.08-.077a1.75 1.75 0 01-.05-2.475l5.743-5.974h0z"
          strokeWidth={1.200048}
        />
        <rect
          data-name="Rect\xE1ngulo 3785"
          width={5.33}
          height={2.149}
          rx={1.042}
          transform="rotate(43.86 -8807.723 6763.168)"
        />
        <path data-name="L\xEDnea 846" d="M2237.058 7986.676l-5.628 5.859" />
        <path
          data-name="Trazado 6530"
          d="M2238.829 7983.518c-3.2.764-6.369 1.5-9.893 2.626a.949.949 0 00-.352 1.7 40.866 40.866 0 017.676 7.374.949.949 0 001.688-.421c.983-3.566 1.592-6.763 2.227-9.99a1.147 1.147 0 00-1.346-1.289z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
