import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <g data-name="Grupo 13828">
        <path
          data-name="Trazado 8982"
          d="M10.238.201a.693.693 0 000 .974l3.845 3.845H.684a.688.688 0 000 1.376h13.4l-3.845 3.842a.689.689 0 10.974.974l5.02-5.017c.014-.015.019-.034.032-.049a.679.679 0 00.116-.175.689.689 0 000-.529.669.669 0 00-.077-.116.644.644 0 00-.07-.1l-5.02-5.02a.69.69 0 00-.976-.005z"
        />
        <path
          data-name="Trazado 8983"
          d="M6.195 9.046a.693.693 0 010 .974L2.35 13.865h13.4a.688.688 0 010 1.376H2.35l3.845 3.842a.69.69 0 11-.975.974L.201 15.039a.466.466 0 01-.033-.049.665.665 0 01-.115-.174.688.688 0 010-.529.661.661 0 01.078-.116.7.7 0 01.07-.106L5.22 9.046a.692.692 0 01.975 0z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
