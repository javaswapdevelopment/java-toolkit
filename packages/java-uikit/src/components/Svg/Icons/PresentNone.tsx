import React from "react";
import { useTheme } from "styled-components";
import getThemeValue from "../../../util/getThemeValue";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color||'text';
  return (
    <Svg viewBox="0 0 75.616 75.616" {...props}>
      <g data-name="Grupo 2280" transform="translate(-1045.011 -14589.226)">
        <g data-name="Grupo 2279">
          <g data-name="Grupo 2277">
            <path
              data-name="Trazado 1420"
              d="M1085.719 14651.541c4.041-.8 7.356-2.708 7.365-5.891a.391.391 0 00-.015-.077 11.747 11.747 0 002.357-3.475.179.179 0 01.162-.105h1.245a9.329 9.329 0 009.355-9.3l.006-2.234a9.33 9.33 0 00-9.3-9.356.184.184 0 01-.184-.185l.009-3.181a.915.915 0 00-.407-.743c-.535-.432-1.739-.9-4.382-1.317a85.357 85.357 0 00-21.631-.062c-4.3.647-4.8 1.471-4.8 2.034l-.051 18c-.012 4.113 1.181 7.416 3.541 9.851a.392.392 0 00-.016.077c-.009 3.061 3.054 4.95 6.88 5.822zm15.843-18.677a4.525 4.525 0 01-4.532 4.507h-.437c.046-.528.072-1.07.073-1.628l.028-10.014h.369a4.524 4.524 0 014.506 4.531z"
              fill="none"
              stroke={getThemeValue(`colors.${color}`, color)(theme)}
              strokeMiterlimit={10}
              strokeWidth={3}
            />
          </g>
          <g
            data-name="Grupo 2278"
            fill="none"
            stroke={getThemeValue(`colors.${color}`, color)(theme)}
            strokeMiterlimit={10}
            strokeWidth={3}
          >
            <path
              data-name="Trazado 1421"
              d="M1069.779 14609.39c2.472 2.473 7.943 3.039 7.943 3.039s-.566-5.471-3.038-7.942-4.559-2.363-5.914-1.01-1.462 3.441 1.009 5.913z"
            />
            <path
              data-name="Trazado 1422"
              d="M1093.458 14609.39c-2.472 2.473-7.942 3.039-7.942 3.039s.566-5.471 3.038-7.942 4.559-2.363 5.913-1.01 1.463 3.441-1.009 5.913z"
            />
            <circle
              data-name="Elipse 118"
              cx={2.417}
              cy={2.417}
              r={2.417}
              transform="translate(1079.202 14609.36)"
            />
          </g>
          <path
            data-name="L\xEDnea 128"
            fill="none"
            stroke={getThemeValue(`colors.${color}`, color)(theme)}
            strokeMiterlimit={10}
            strokeWidth={3}
            d="M1081.619 14614.958v36.583"
          />
          <path
            data-name="L\xEDnea 129"
            fill="none"
            stroke={getThemeValue(`colors.${color}`, color)(theme)}
            strokeMiterlimit={10}
            strokeWidth={3}
            d="M1096.708 14620.919h-31.264"
          />
        </g>
        <circle
          data-name="Elipse 119"
          cx={36.308}
          cy={36.308}
          r={36.308}
          transform="translate(1046.511 14590.726)"
          fill="none"
          stroke={getThemeValue(`colors.${color}`, color)(theme)}
          strokeMiterlimit={10}
          strokeWidth={3}
        />
      </g>
    </Svg>
  );
};

export default Icon;
