import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    console.log("home mounted");
  }

  render() {
    return (
      <main>
        <h1>Home</h1>
      </main>
    );
  }
}

export default Home;
