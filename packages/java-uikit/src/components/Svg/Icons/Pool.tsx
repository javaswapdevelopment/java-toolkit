import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";
import getThemeValue from "../../../util/getThemeValue";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color||'text';
  return (
    <Svg viewBox="0 0 19.625 18.515" {...props}>
      <g
        data-name="Grupo 11264"
        fill="none"
        stroke={getThemeValue(`colors.${color}`, color)(theme)}
        strokeMiterlimit={10}
        strokeWidth={1.2}
      >
        <path
          data-name="Trazado 6531"
          d="M2.735 11.058V3.6a3 3 0 013-3h8.357a3 3 0 013 3v7.833"
        />
        <path
          data-name="Trazado 6532"
          d="M0 12.64c3.269 0 3.269 2 6.538 2s3.272-2 6.543-2 3.272 2 6.544 2"
        />
        <path
          data-name="Trazado 6533"
          d="M0 15.915c3.269 0 3.269 2 6.538 2s3.272-2 6.543-2 3.272 2 6.544 2"
        />
      </g>
    </Svg>
  );
};

export default Icon;
