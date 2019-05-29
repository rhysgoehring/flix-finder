import React from "react";
import MaterialIcon from "material-icons-react";
import { HeaderContainer, Logo } from "./styles";

const Header = ({ onClick }) => {
  return (
    <HeaderContainer>
      <Logo>flixfinder</Logo>
      <MaterialIcon icon="menu" color="#fff" size="50" onClick={onClick} />
    </HeaderContainer>
  );
};

export default Header;
