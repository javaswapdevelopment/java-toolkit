import React from "react";
import { useTheme } from "styled-components";
import getThemeValue from "../../../util/getThemeValue";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  const theme = useTheme();
  const color = props.color||'text';

  return (
    <Svg viewBox="0 0 28.128 30.312" {...props}>
      <g
        data-name="Grupo 1859"
        transform="translate(-2219.357 -13957.409)"
        fill="none"
        stroke={getThemeValue(`colors.${color}`, color)(theme)}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
      >
        <g data-name="Grupo 1858">
          <path
            data-name="Trazado 1098"
            d="M2235 13976.765h4.72a1.5 1.5 0 00.537-.9 2.07 2.07 0 00-.673-2.109c-1.2-.647-5.952-.083-5.952-.083s.485-5.956-.882-7.544-3.442-1.588-3.133 1.544-6.088 7.368-6.088 7.368h-3.574v10.191a12.005 12.005 0 014.809.4c1.809.75 8.03 2.073 10.324 1.191s1.779-1.354 1.809-2.162-1.9-1.191-1.9-1.191 2.661.06 3.1-1.015.941-2.794-2.956-2.411"
          />
          <path
            data-name="Trazado 1099"
            d="M2238.619 13976.765a2.06 2.06 0 011.559 1.972c0 1.6-3.427 1.279-3.427 1.279"
          />
        </g>
        <ellipse
          data-name="Elipse 84"
          cx={4.037}
          cy={2.581}
          rx={4.037}
          ry={2.581}
          transform="rotate(-52.146 15387.114 4698.645)"
        />
        <path
          data-name="Trazado 1100"
          d="M2243.649 13966.376s-1.611 4.654-7.324 3.595"
        />
        <path
          data-name="Trazado 1101"
          d="M2245.9 13964.236s3.726 5.991-3.309 7.632"
        />
      </g>
    </Svg>
  );
};

export default Icon;
