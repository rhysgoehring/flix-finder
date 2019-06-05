/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

import { Grey800 } from "./utilities/styles/Colors";

import Home from "./pages/Home";
import ReleaseDetails from "./pages/ReleaseDetails";

const StyledLink = styled(Link)`
  display: block;
  text-align: left;
  font-size: 4rem;
  color: white;
  text-decoration: none;
  transition: 0.3s ease border;
  border-bottom: solid 4px transparent;

  &:hover {
    border-bottom: solid 4px ${Grey800};
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

const NavLink = props => {
  return (
    <div onClick={props.onClick}>
      <li>
        <StyledLink {...props} />
      </li>
    </div>
  );
};

const useRouter = () => {
  return useContext(__RouterContext);
};

const Two = () => {
  return (
    <div>
      <h1>Two</h1>
    </div>
  );
};
const Three = () => {
  return (
    <div>
      <h1>Three</h1>
    </div>
  );
};

const Main = () => {
  const { location } = useRouter();

  const transitions = useTransition(location, locations => locations.key, {
    from: {
      opacity: 0,
      position: "absolute",
      width: "100%",
      transform: "translate3d(100%, 0, 0)"
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" }
  });

  // Instead of using props as an arg since we have other props in react, rename it to transitionStyle:
  return transitions.map(({ item, props: transitonStyle, key }) => (
    <animated.div key={key} style={transitonStyle}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={ReleaseDetails} />
        <Route exact path="/show/:id" component={ReleaseDetails} />
        <Route exact path="/two" component={Two} />
        <Route exact path="/three" component={Three} />
      </Switch>
    </animated.div>
  ));
};

const Routes = ({ children }) => {
  return (
    <Router>
      <Main />
      {children}
    </Router>
  );
};

const NavRoutes = ({ onClick }) => {
  return (
    <NavList>
      <NavLink to="/" onClick={onClick}>
        Home
      </NavLink>
      <NavLink to="/two" onClick={onClick}>
        Two
      </NavLink>
      <NavLink to="/three" onClick={onClick}>
        Three
      </NavLink>
    </NavList>
  );
};

export { Routes, NavRoutes };
