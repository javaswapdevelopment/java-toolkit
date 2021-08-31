import React, { useState } from "react";
import JavaToggle from "./JavaToggle";

export default {
  title: "Components/JavaToggle",
  component: JavaToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <JavaToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <JavaToggle checked={isChecked} onChange={toggle} scale="md" />
      </div>
      <div>
        <JavaToggle checked={isChecked} onChange={toggle} scale="sm" />
      </div>
    </>
  );
};
