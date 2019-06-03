import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMostPopularTMDB } from "../../actions";
import { MainContainer } from "../../utilities/styles/Layout";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mostPopularMovies: []
    };
  }

  componentDidMount() {
    console.log("home mounted");
    // this.fetchPopularMovies();
  }

  fetchPopularMovies = async () => {
    const mostPopularMovies = await this.props.fetchMostPopularTMDB();
    console.log("fetchMostPopularMovies response", mostPopularMovies);

    this.setState({ mostPopularMovies });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <MainContainer>
          <h1>Home</h1>
          <h1>Home</h1>
        </MainContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    tv: state.tv
  };
};

export default connect(
  mapStateToProps,
  { fetchMostPopularTMDB }
)(Home);
