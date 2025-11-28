import React from "react";
import { Logo, HeaderContainer } from "./styles";
import LogoSVG from "../../assets/logo.svg";

const Header = ({ children }) => (
  <HeaderContainer>
    <a href="/">
      <Logo src={LogoSVG} title="Book Club Logo" />
    </a>
    {children}
  </HeaderContainer>
);

export default Header;
