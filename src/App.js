import React from "react";
import { GlobalStyles } from "./utilities/styles";
import Header from "./components/Header";

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
    </React.Fragment>
  );
};

export default App;
