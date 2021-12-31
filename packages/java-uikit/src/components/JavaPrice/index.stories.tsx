import React from "react";
import { JavaPrice, JavaPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/JavaPrice",
  component: JavaPrice,
};

const Template: React.FC<JavaPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <JavaPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  javaPriceUsd: 20.0,
};
