import React from "react";
import { Logo, HeaderContainer } from "./styles";
import LogoSVG from "../../assets/logo.svg";

const Header = () => (
  <HeaderContainer>
    <a href="/">
      <Logo src={LogoSVG} title="Book Club Logo" />
    </a>
  </HeaderContainer>
);

export default Header;
