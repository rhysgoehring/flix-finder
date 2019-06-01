import styled from "styled-components/macro";
import { animated } from "react-spring";

const NavContainer = styled(animated.div)`
  position: fixed;
  /* left: 0; */
  right: 0;
  top: 0;
  bottom: 0;
  padding: 100px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavWrapper = styled.nav`
  height: 100%;
`;

export { NavWrapper, NavContainer };
