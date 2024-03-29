import React, { useTheme } from 'styled-components';
import getThemeValue from "../../../util/getThemeValue";
import Svg from "../Svg";
import { SvgProps } from "../types";

const getRandomNumberBetween = (min:any,max:any) => {
  return Math.floor(Math.random()*(max-min+1)+min);
}

const Icon: React.FC<SvgProps> = (props) => {

  const theme = useTheme();
  const color = props.color||'text';
  const lastNumber = getRandomNumberBetween(1,100000);
  return (
    <Svg viewBox="0 0 27.106 24.457" {...props}>
      <g data-name={"Analytic"+lastNumber} >
        <path
          data-name={"Analytic 6537"+lastNumber}
          d="M13.49 23.856c2.569-.509 4.676-1.723 4.682-3.745a.24.24 0 00-.01-.049 7.49 7.49 0 001.5-2.209.113.113 0 01.1-.068h.791a5.931 5.931 0 005.947-5.914v-1.42a5.93 5.93 0 00-5.913-5.948.118.118 0 01-.117-.117V2.364a.579.579 0 00-.258-.472 6.416 6.416 0 00-2.786-.838 54.252 54.252 0 00-13.752-.039C.941 1.427.623 1.95.622 2.308L.589 13.752a8.6 8.6 0 002.252 6.264.2.2 0 00-.01.049c-.006 1.946 1.941 3.146 4.374 3.7zm10.071-11.874a2.876 2.876 0 01-2.881 2.865h-.278c.029-.336.046-.68.047-1.034l.018-6.366h.235a2.876 2.876 0 012.864 2.881z"
          fill="none"
          stroke={getThemeValue(`colors.${color}`, color)(theme)}
          strokeMiterlimit={10}
          strokeWidth={1.2}
        />
        <path
          data-name={"Analytic 3792"+lastNumber}
          fill="none"
          stroke={getThemeValue(`colors.${color}`, color)(theme)}
          strokeMiterlimit={10}
          strokeWidth={1.2}
          d="M5.594 13.399h3.058v6.064H5.594z"
        />
        <path
          data-name={"Analytic 3793"+lastNumber}
          fill="none"
          stroke={getThemeValue(`colors.${color}`, color)(theme)}
          strokeMiterlimit={10}
          strokeWidth={1.2}
          d="M12.024 9.293h3.058v10.171h-3.058z"
        />
        <path
          data-name={"Analytic 6538"+lastNumber}
          d="M3.602 9.862s4.659 0 9.318-4.41"
          fill="none"
          stroke={getThemeValue(`colors.${color}`, color)(theme)}
          strokeMiterlimit={10}
          strokeWidth={1.2}
        />
        <path
          data-name={"Analytic 6539"+lastNumber}
          d="M11.637 4.172l2.489 2.963.569-3.674z"
        />
      </g>
    </Svg>
  );
};

export default Icon;
