import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 21.253 12.042" {...props}>
      <g
        data-name="Grupo 13504"
        transform="translate(-4617.662 -5507.236)"
        fill="#9b2244"
      >
        <circle
          data-name="Elipse 761"
          cx={6.021}
          cy={6.021}
          r={6.021}
          transform="translate(4617.662 5507.236)"
        />
        <ellipse
          data-name="Elipse 762"
          cx={2.969}
          cy={6.021}
          rx={2.969}
          ry={6.021}
          transform="translate(4630.28 5507.236)"
        />
        <ellipse
          data-name="Elipse 763"
          cx={0.979}
          cy={6.021}
          rx={0.979}
          ry={6.021}
          transform="translate(4636.957 5507.236)"
        />
      </g>
    </Svg>
  );
};

export default Icon;
