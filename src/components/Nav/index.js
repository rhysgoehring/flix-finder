import React from "react";
import { NavWrapper, NavContainer } from "./styles";
import { NavRoutes } from "../../Routes";

const Nav = ({ style, onNavLinkClick }) => {
  return (
    <NavContainer style={style}>
      <NavWrapper>
        <NavRoutes onClick={onNavLinkClick} />
      </NavWrapper>
    </NavContainer>
  );
};

export default Nav;
