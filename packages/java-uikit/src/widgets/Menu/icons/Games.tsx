import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 19.349 19.35" {...props}>
      <g
        data-name="Grupo 11265"
        transform="translate(-2221.823 -8098.32)"
        fill="none"
        stroke={props.theme?.colors.text}
        strokeMiterlimit={10}
        strokeWidth={1.2}
      >
        <circle
          data-name="Elipse 597"
          cx={9.075}
          cy={9.075}
          r={9.075}
          transform="translate(2222.424 8098.92)"
        />
        <path
          data-name="Trazado 6534"
          d="M2232.029 8104.035l.6 1.845a.559.559 0 00.531.386h1.94a.558.558 0 01.329 1.01l-1.57 1.141a.558.558 0 00-.2.624l.6 1.846a.559.559 0 01-.86.624l-1.57-1.14a.555.555 0 00-.656 0l-1.57 1.14a.558.558 0 01-.859-.624l.6-1.846a.557.557 0 00-.2-.624l-1.569-1.141a.558.558 0 01.328-1.01h1.94a.558.558 0 00.531-.386l.6-1.845a.558.558 0 011.055 0z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
