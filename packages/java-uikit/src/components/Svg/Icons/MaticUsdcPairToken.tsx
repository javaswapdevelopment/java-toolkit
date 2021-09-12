import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 100 100" {...props}>
      <path d="M50 0A50 50 0 110 50 50 50 0 0150 0z" fill="#8f5ae8" />
      <path
        d="M67.108 38.47a4.492 4.492 0 00-4.233 0l-9.542 5.642-6.666 3.705-9.542 5.645a4.492 4.492 0 01-4.233 0l-7.584-4.412a4.233 4.233 0 01-2.116-3.53v-8.812a3.88 3.88 0 012.116-3.529l7.584-4.233a4.492 4.492 0 014.233 0l7.583 4.233a4.233 4.233 0 012.117 3.53v5.641l6.508-3.88v-5.466a3.88 3.88 0 00-2.083-3.529L37.3 21.362a4.492 4.492 0 00-4.233 0l-14.109 8.113a3.596 3.596 0 00-2.291 3.53v16.4a3.88 3.88 0 002.116 3.512l14.109 8.129a4.492 4.492 0 004.233 0l9.542-5.467 6.525-3.879 9.508-5.45a4.492 4.492 0 014.233 0l7.584 4.233a4.233 4.233 0 012.116 3.53v8.641a3.88 3.88 0 01-2.116 3.53l-7.584 4.408a4.492 4.492 0 01-4.233 0l-7.583-4.234A4.233 4.233 0 0153 62.83v-5.662l-6.333 3.7v5.641a3.88 3.88 0 002.116 3.53l14.109 8.112a4.492 4.492 0 004.233 0l14.108-8.113a4.233 4.233 0 002.1-3.524V50.108a3.88 3.88 0 00-2.116-3.529z"
        fill="#fff"
      />
    </Svg>
  );
};

export default Icon;
