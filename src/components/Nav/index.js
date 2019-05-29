import React from "react";
import NavWrapper from "./styles";
import { NavRoutes } from "../../Routes";

const Nav = ({ style, onNavLinkClick }) => {
  return (
    <NavWrapper style={style}>
      <nav>
        <NavRoutes onClick={onNavLinkClick} />
      </nav>
    </NavWrapper>
  );
};

export default Nav;
