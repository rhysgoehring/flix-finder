import React, { Component } from "react";
import { Trail, animated, Transition } from "react-spring/renderprops";
import { connect } from "react-redux";
import {
  fetchPopularMovies,
  fetchPopularTV,
  fetchNewNetflixReleases
} from "../../actions";
import { MainContainer } from "../../utilities/styles/Layout";
import {
  RowContainer,
  Top5Container
} from "../../components/TopFiveRow/styles";
import Top5Row from "../../components/TopFiveRow";
import Thumbnail from "../../components/Thumbnail";

import SAMPLE_DATA from "./SAMPLE_DATA";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularMovies: [],
      popularTV: [],
      newNetflixShows: [],
      newNetflixMovies: []
    };
  }

  componentDidMount() {
    this.getPopularMovies();
    this.getPopularTv();
    this.getNewNetflixReleases();
  }

  getPopularMovies = async () => {
    const popularMovies = await this.props.fetchPopularMovies();

    this.setState({ popularMovies });
    // this.setState({ popularMovies: SAMPLE_DATA });
  };

  getPopularTv = async () => {
    const popularTV = await this.props.fetchPopularTV();

    this.setState({ popularTV });
    // this.setState({ popularTV: SAMPLE_DATA });
  };

  getNewNetflixReleases = async () => {
    const {
      newNetflixMovies,
      newNetflixShows
    } = await this.props.fetchNewNetflixReleases();

    this.setState({ newNetflixMovies, newNetflixShows });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <MainContainer>
          <Top5Row
            title="Most Popular Movies"
            onClick={() => console.log("View All Movies Pressed")}
          >
            <Trail
              native
              items={this.state.popularMovies}
              from={{ opacity: 0, x: -500, transform: "scale(0)" }}
              to={{ opacity: 1, x: 0, transform: "scale(1)" }}
              keys={this.state.popularMovies.map(item => item.id)}
            >
              {item => ({ x, opacity }) => (
                <animated.div
                  style={{
                    opacity,
                    transform: x.interpolate(x1 => `translate3d(${x1}%, 0, 0)`)
                  }}
                >
                  <Thumbnail media={item} />
                </animated.div>
              )}
            </Trail>
          </Top5Row>
          <Top5Row
            title="Most Popular on TV"
            onClick={() => console.log("View All TV Pressed")}
          >
            <Trail
              native
              items={this.state.popularTV}
              from={{ opacity: 0, x: -500 }}
              to={{ opacity: 1, x: 0 }}
              keys={this.state.popularTV.map(item => item.id)}
            >
              {item => ({ x, opacity }) => (
                <animated.div
                  style={{
                    opacity,
                    transform: x.interpolate(x1 => `translate3d(${x1}%, 0, 0)`)
                  }}
                >
                  <Thumbnail media={item} />
                </animated.div>
              )}
            </Trail>
          </Top5Row>
          <Top5Row
            title="New Netflix Movies"
            onClick={() => console.log("View All TV Pressed")}
          >
            <Trail
              native
              items={this.state.newNetflixMovies}
              from={{ opacity: 0, x: -500 }}
              to={{ opacity: 1, x: 0 }}
              keys={this.state.newNetflixMovies.map(item => item.imdbid)}
            >
              {item => ({ x, opacity }) => (
                <animated.div
                  style={{
                    opacity,
                    transform: x.interpolate(x1 => `translate3d(${x1}%, 0, 0)`)
                  }}
                >
                  <Thumbnail netflix media={item} />
                </animated.div>
              )}
            </Trail>
          </Top5Row>
          <Top5Row
            title="New Netflix Shows"
            onClick={() => console.log("View All TV Pressed")}
          >
            <Trail
              native
              items={this.state.newNetflixShows}
              from={{ opacity: 0, x: -500 }}
              to={{ opacity: 1, x: 0 }}
              keys={this.state.newNetflixShows.map(item => item.imdbid ? item.imdbid : item.netflixid)}
            >
              {item => ({ x, opacity }) => (
                <animated.div
                  style={{
                    opacity,
                    transform: x.interpolate(x1 => `translate3d(${x1}%, 0, 0)`)
                  }}
                >
                  <Thumbnail netflix media={item} />
                </animated.div>
              )}
            </Trail>
          </Top5Row>
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
  { fetchPopularMovies, fetchPopularTV, fetchNewNetflixReleases }
)(Home);
