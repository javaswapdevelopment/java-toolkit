import React from "react";
import { TokenPairImageProps, variants } from "./types";
import { StyledPrimaryImage, StyledSecondaryImage } from "./styles";
import Wrapper from "./Wrapper";
import { TreeIcon } from "../Svg";

const TokenPairImage: React.FC<TokenPairImageProps> = ({
  primarySrc,
  secondarySrc,
  width,
  height,
  farm,
  variant = variants.DEFAULT,
  primaryImageProps = {},
  secondaryImageProps = {},
  ...props
}) => {
  const secondaryImageSize = Math.floor(width / 2);

  if(farm){
    return (
    <Wrapper position="relative" width={width} height={height} {...props}>
      
      <StyledPrimaryImage farm variant={variant} src={primarySrc} width={width} height={height} {...primaryImageProps} />
      <StyledSecondaryImage 
        farm
        variant={variant}
        src={secondarySrc}
        width={secondaryImageSize}
        height={secondaryImageSize}
        {...secondaryImageProps}
      />
      <TreeIcon style={{width:"70%", display:"block", margin:"0 auto"}}    />
    </Wrapper>)
  }else{
    return (
      <Wrapper position="relative" width={width} height={height} {...props}>
        <StyledPrimaryImage variant={variant} src={primarySrc} width={width} height={height} {...primaryImageProps} />
        <StyledSecondaryImage
          variant={variant}
          src={secondarySrc}
          width={secondaryImageSize}
          height={secondaryImageSize}
          {...secondaryImageProps}
        />
      </Wrapper>
    );
  }
};

export default TokenPairImage;
