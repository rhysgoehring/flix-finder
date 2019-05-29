import styled from "styled-components/macro";
import MaterialIcon from "material-icons-react";
import { elevation } from "../../utilities/styles";
import { Black } from "../../utilities/styles/Colors";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 6rem;
  width: 100%;
  padding: 0 1.5rem;
  background-color: ${Black};
  ${elevation[2]};
`;

const Logo = styled.h1`
  font-family: "Exo";
  font-size: 4rem;
  align-self: center;
  text-align: center;
`;

const MenuIcon = styled(MaterialIcon)`
  align-self: flex-end;

  text-align: center;
`;

export { HeaderContainer, Logo, MenuIcon };
