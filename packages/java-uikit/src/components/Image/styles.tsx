import styled, { css } from "styled-components";
import { variant as StyledSystemVariant } from "styled-system";
import { ImageProps, Variant, variants } from "./types";
import TokenImage from "./TokenImage";

interface StyledImageProps extends ImageProps {
  variant: Variant;
  farm?: boolean;
}

export const StyledPrimaryImage = styled(TokenImage)<StyledImageProps>`
  position: absolute;
  width: ${({ variant }) =>
    variant === variants.DEFAULT?"92%":"82%"}; // 92, 82 are arbitrary numbers to fit the variant

  ${StyledSystemVariant({
    variants: {
      [variants.DEFAULT]: {
        bottom: "auto",
        left: 0,
        right: "auto",
        top: 0,
        zIndex: 5,
      },
      [variants.INVERTED]: {
        bottom: 0,
        left: "auto",
        right: 0,
        top: "auto",
        zIndex: 6,
      },
    },
  })}

  ${({ farm }) => farm && css`
    bottom: 0 !important; 
    left: 0 !important;
    right: 0 !important;
    top: auto !important;
    margin: auto !important;
    width: 50% !important;
    `}
`;

export const StyledSecondaryImage = styled(TokenImage)<StyledImageProps>`
  position: absolute;
  width: 50%;

  ${StyledSystemVariant({
    variants: {
      [variants.DEFAULT]: {
        bottom: 0,
        left: "auto",
        right: 0,
        top: "auto",
        zIndex: 6,
      },
      [variants.INVERTED]: {
        bottom: "auto",
        left: 0,
        right: "auto",
        top: 0,
        zIndex: 5,
      },
    },
  })}

  ${({ farm }) => farm && css`
      bottom: 0 !important;
      left: auto !important;
      right: 0 !important;
      top: 0 !important;
      margin: auto !important;
      width: "40%" !important;
      `
  }
`;
