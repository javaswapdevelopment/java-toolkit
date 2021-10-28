import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 19.562 30.791" {...props}>
      <g data-name="Grupo 1857" transform="translate(-2221.719 -13847.523)">
        <g data-name="Grupo 1856">
          <path
            data-name="Trazado 1095"
            d="M2233.671 13859.323v-1.082a3.114 3.114 0 01-1.639-.473l.257-.718a2.86 2.86 0 001.543.461c.761 0 1.275-.438 1.275-1.05 0-.59-.418-.954-1.211-1.276-1.093-.428-1.768-.921-1.768-1.854a1.757 1.757 0 011.618-1.725v-1.082h.665v1.039a2.855 2.855 0 011.393.375l-.268.707a2.584 2.584 0 00-1.35-.364c-.826 0-1.136.493-1.136.922 0 .557.4.836 1.329 1.222 1.1.45 1.661 1.007 1.661 1.961a1.864 1.864 0 01-1.694 1.821v1.115z"
            stroke={props.theme?.colors.text}
            strokeMiterlimit={10}
            strokeWidth={0.5}
          />
        </g>
        <circle
          data-name="Elipse 83"
          cx={6.818}
          cy={6.818}
          r={6.818}
          transform="translate(2227.044 13848.123)"
          fill="none"
          stroke={props.theme?.colors.text}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
        />
        <path
          data-name="Trazado 1096"
          d="M2222.319 13870.057c.311.312 2.208 2.38 2.346 7.726a11.291 11.291 0 001.965-.862s1.035-5.173-1-7.828c.035.033-3.311.964-3.311.964z"
          fill="none"
          stroke={props.theme?.colors.text}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
        />
        <path
          data-name="Trazado 1097"
          d="M2226.354 13869.712a11.932 11.932 0 003.311-2.207c.793-1.034 2.532-2.966 4.2-2.689-.2.1.173 1.413.173 1.413s2.871-.827 2.768 1.828c.138.139 1.655 1.346.172 3.587-.172.1.809 2.9-2.94 3.139s-3.612.034-4.681-.276a4.214 4.214 0 00-2.489.381"
          fill="none"
          stroke={props.theme?.colors.text}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
        />
        <path
          data-name="L\xEDnea 110"
          fill="none"
          stroke={props.theme?.colors.text}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M2234.153 13861.752v4.477"
        />
      </g>
    </Svg>
  );
};

export default Icon;
