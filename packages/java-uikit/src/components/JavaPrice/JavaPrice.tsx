import React from "react";
import styled from "styled-components";
import { JavaRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  javaPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const JavaPrice: React.FC<Props> = ({ javaPriceUsd, color = "textSubtle" }) => {
  return javaPriceUsd ? (
    <PriceLink
      href="https://javaswap.io/swap?outputCurrency=0x4aFaE971Ac146d4028c3Ed581Eb307A1615E59Fe"
      target="_blank"
    >
      <JavaRoundIcon width="24px" mr="8px" />
      <Text color={color} bold>{`$${javaPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(JavaPrice);
