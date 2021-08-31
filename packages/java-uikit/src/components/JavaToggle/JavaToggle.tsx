import React from "react";
import { JavaStack, JavaInput, JavaLabel } from "./StyledJavaToggle";
import { JavaToggleProps, scales } from "./types";

const JavaToggle: React.FC<JavaToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <JavaStack scale={scale}>
    <JavaInput id={props.id || "java-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <JavaLabel scale={scale} checked={checked} htmlFor={props.id || "java-toggle"}>
      <div className="javas">
        <div className="java" />
        <div className="java" />
        <div className="java" />
        <div className="butter" />
      </div>
    </JavaLabel>
  </JavaStack>
);

export default JavaToggle;
