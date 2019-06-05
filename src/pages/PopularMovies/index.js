import React, { Component } from "react";
import { connect } from "react-redux";
import { Trail, animated, Transition } from "react-spring/renderprops";
import { fetchPopularMovies } from "../../actions";
import { ReleaseGrid, MainContainer } from "../../utilities/styles/Layout";
import Thumbnail from "../../components/Thumbnail";

class PopularMovies extends Component {
  componentDidMount() {
    if (this.props.movies.length === 0) {
      this.props.fetchPopularMovies();
    }
  }

  render() {
    return (
      <MainContainer>
        <h1 style={{ color: "white" }}>Popular Movies</h1>
        <ReleaseGrid allReleases>
          {this.props.movies.map(movie => (
            <Thumbnail media={movie} />
          ))}
        </ReleaseGrid>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.tmdbPopular,
    tv: state.tv
  };
};

export default connect(
  mapStateToProps,
  { fetchPopularMovies }
)(PopularMovies);
