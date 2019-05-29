import styled from "styled-components/macro";
import { animated } from "react-spring";

const NavWrapper = styled(animated.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 100px;
  background: orange;
  z-index: 10;
`;

export default NavWrapper;
