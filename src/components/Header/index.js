import React from "react";
import MaterialIcon from "material-icons-react";
import { HeaderContainer, Logo, IconWrapper } from "./styles";

const Header = ({ onClick }) => {
  return (
    <HeaderContainer>
      <Logo to="/">flixfinder</Logo>
      <IconWrapper onClick={onClick}>
        <MaterialIcon icon="menu" color="#fff" size="50" />
      </IconWrapper>
    </HeaderContainer>
  );
};

export default Header;
