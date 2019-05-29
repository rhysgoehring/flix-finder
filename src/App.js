import React from "react";
import { Provider } from "react-redux";
import { GlobalStyles } from "./utilities/styles";
import store from "./store";
import Header from "./components/Header";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
    </Provider>
  );
};

export default App;
