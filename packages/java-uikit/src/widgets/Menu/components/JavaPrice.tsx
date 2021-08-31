import React from "react";
import styled from "styled-components";
import { JavaRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
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

const JavaPrice: React.FC<Props> = ({ javaPriceUsd }) => {
  return javaPriceUsd ? (
    <PriceLink
      href="https://exchange.javaswap.io/#/swap?outputCurrency=0xafc9aa5ebd7197662d869f75890f18aafeefb1f5"
      target="_blank"
    >
      <JavaRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${javaPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(JavaPrice);
