import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20.268 4.699" {...props}>
      <g
        data-name="Grupo 2392"
        transform="translate(-2221.823 -12751.176)"
        fill="none"
        stroke="#9b2244"
        strokeMiterlimit={10}
        strokeWidth={1.2}
      >
        <circle
          data-name="Elipse 137"
          cx={1.75}
          cy={1.75}
          r={1.75}
          transform="translate(2222.424 12751.775)"
        />
        <circle
          data-name="Elipse 138"
          cx={1.75}
          cy={1.75}
          r={1.75}
          transform="translate(2230.207 12751.775)"
        />
        <circle
          data-name="Elipse 139"
          cx={1.75}
          cy={1.75}
          r={1.75}
          transform="translate(2237.991 12751.775)"
        />
      </g>
    </Svg>
  );
};

export default Icon;
