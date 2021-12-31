import React from "react";
import { useTheme } from "styled-components";
import getThemeValue from "../../../util/getThemeValue";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  const theme = useTheme();
  const color = props.color||'text';

  return (
    <Svg viewBox="0 0 25.542 27.033" {...props}>
      <g data-name="Grupo 1430">
        <g data-name="Grupo 1427">
          <path data-name="Trazado 814" d="M16.458 13.658h-.01z" />
          <path
            data-name="Trazado 815"
            d="M20.912 18.116l-2.191-2.191c0 .026.008.051.008.076v1.351a2.346 2.346 0 01-2.35 2.336h-.226c.023-.274.037-.555.038-.844l.014-5.131a7.732 7.732 0 01-9.657-5.624 34.317 34.317 0 00-4.028.321C.291 8.745.032 9.172.031 9.463l-.027 9.334a7.013 7.013 0 001.836 5.107.277.277 0 00-.008.041c0 1.586 1.584 2.566 3.567 3.018l5.116.071c2.1-.414 3.814-1.4 3.819-3.054a.242.242 0 00-.008-.04 6.112 6.112 0 001.222-1.8.09.09 0 01.084-.056h.645a4.837 4.837 0 004.752-3.876c-.04-.037-.082-.057-.117-.092zM6.987 20.77l-3.353-2.914.929-1.071 2.364 2.058 4.6-4.513.992 1.011z"
          />
        </g>
        <g data-name="Grupo 1429">
          <g
            data-name="Grupo 1428"
            fill="none"
            stroke={getThemeValue(`colors.${color}`, color)(theme)}
            strokeMiterlimit={10}
            strokeWidth={1.2}
            transform="translate(-4509.242 -14269.929)"
          >
            <circle
              data-name="Elipse 57"
              cx={5.285}
              cy={5.285}
              r={5.285}
              transform="translate(4517.801 14270.528)"
            />
            <rect
              data-name="Rect\xE1ngulo 481"
              width={2.202}
              height={8.956}
              rx={0.767}
              transform="rotate(135 -691.374 8082.193)"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
