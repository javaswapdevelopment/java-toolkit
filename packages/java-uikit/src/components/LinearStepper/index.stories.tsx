import React, { useState } from "react";
import LinearStepper from "./LinearStepper";

export default {
  title: "Components/LinearStepper",
  component: LinearStepper,
};

export const Default: React.FC = () => {
  return <LinearStepper text1="Go" text2="To" text3="The" text4="Moon" />;
};
