import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon, SpinnerIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .hover-mobile{
    position: absolute;
    left: 60px;
    width: 58px;
    display: none;
  }
  .hover-desktop{
    display:none;
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .hover-mobile{
      display:inline;
      ${({ theme }) => theme.mediaQueries.nav} {
        display: none;
      }
    }

    .mobile-icon {
      display:none;
    }

  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <SpinnerIcon className="hover-mobile" />
      <LogoIcon className="mobile-icon" />
      <LogoWithText className="desktop-icon" isDark={isDark} />
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Java home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Java home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
