import React, { useState } from "react";
import { useSpring } from "react-spring";
import { Provider } from "react-redux";
import { GlobalStyles } from "./utilities/styles";
import store from "./store";

import Nav from "./components/Nav";
import { Routes } from "./Routes";

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? "translate3d(0,0,0)" : "translate3d(100%,0,0)"
  });
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes onClick={() => setNavOpen(!isNavOpen)}>
        <Nav style={navAnimation} onNavLinkClick={() => setNavOpen(false)} />
      </Routes>
    </Provider>
  );
};

export default App;
