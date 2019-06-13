import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { elevation } from "../../utilities/styles";
import { Black } from "../../utilities/styles/Colors";

const HeaderContainer = styled.header`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: flex-end;
  height: 6rem;
  width: 100%;
  padding: 0 1.5rem;
  z-index: 15;
  background-color: ${Black};
  ${elevation[2]};
`;

const Logo = styled(Link)`
  font-family: "Exo";
  font-size: 4rem;
  align-self: center;
  text-align: center;
  text-decoration: none;
  color: white;
`;

const IconWrapper = styled.div`
  z-index: 15;

  &:hover {
    cursor: pointer;
  }
`;

export { HeaderContainer, Logo, IconWrapper };
