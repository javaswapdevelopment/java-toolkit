import React from "react";
import { useTheme } from "styled-components";
import getThemeValue from "../../../util/getThemeValue";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const color = props.color||'text';
  return (
    <Svg viewBox="0 0 23.965 21.641" {...props}>
      <path
        data-name="Trazado 8976"
        d="M18.169 4.033h0a.1.1 0 01-.1-.1V2.156a.515.515 0 00-.228-.415 5.65 5.65 0 00-2.448-.736A47.752 47.752 0 003.309.971c-2.4.362-2.681.821-2.682 1.136L.598 12.165a7.56 7.56 0 001.979 5.5.219.219 0 00-.009.043c-.005 1.779 1.847 2.85 4.1 3.309a.107.107 0 00.127-.1v-7.508a.1.1 0 01.1-.1h4.794a.1.1 0 01.1.1v7.529a.107.107 0 00.126.1c2.257-.447 4.109-1.514 4.114-3.291a.208.208 0 00-.008-.044 6.56 6.56 0 001.317-1.94.1.1 0 01.09-.06h.7a5.211 5.211 0 005.226-5.2V9.255a5.21 5.21 0 00-5.185-5.222zm2.608 6.57a2.526 2.526 0 01-2.531 2.517h-.245q.039-.442.041-.91l.016-5.594h.206a2.526 2.526 0 012.517 2.532z"
        fill="none"
        stroke={getThemeValue(`colors.${color}`, color)(theme)}
        strokeMiterlimit={10}
        strokeWidth={1.2}
      />
    </Svg>
  );
};

export default Icon;
