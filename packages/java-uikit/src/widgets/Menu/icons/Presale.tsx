import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 22.766 22.205" {...props}>
      <path
        data-name="Trazado 10160"
        d="M22.765 10.207L19.91 7.571l.156-3.883-3.86-.454L14.05 0l-3.39 1.9L7.014.551 5.391 4.082 1.648 5.134l.762 3.811L0 11.995l2.857 2.636-.157 3.884 3.861.453 2.155 3.235 3.391-1.9 3.644 1.348 1.625-3.531 3.742-1.051-.761-3.812zM9.401 16.24L4.29 11.797l1.417-1.632 3.6 3.136 7.006-6.879 1.513 1.541z"
        fill="#d86d25"
      />
    </Svg>
  );
};

export default Icon;
