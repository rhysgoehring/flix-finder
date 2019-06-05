/* eslint-disable no-await-in-loop */
import React, { Component } from "react";
import {
  Trail,
  animated,
  Transition,
  config,
  Keyframes
} from "react-spring/renderprops";
import { connect } from "react-redux";
import {
  fetchPopularMovies,
  fetchPopularTV,
  fetchNewNetflixReleases
} from "../../actions";
import { MainContainer } from "../../utilities/styles/Layout";
import PreviewRow from "../../components/PreviewRow";
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
    console.log(" home this.props", this.props);
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
    // const {
    //   newNetflixMovies,
    //   newNetflixShows
    // } = await this.props.fetchNewNetflixReleases();

    this.setState({
      newNetflixMovies: SAMPLE_DATA,
      newNetflixShows: SAMPLE_DATA
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <MainContainer>
          <PreviewRow
            title="Most Popular Movies"
            onClick={() => this.props.history.push("/popularMovies")}
          >
            <Trail
              native
              from={{ opacity: 0, xy: [-500, 50] }}
              to={{ opacity: 1, xy: [0, 0] }}
              items={this.state.popularMovies}
              keys={this.state.popularMovies.map(item => item.id)}
            >
              {item => ({ xy, opacity }) => (
                <animated.div
                  style={{
                    opacity,
                    transform: xy.interpolate(
                      (x, y) => `translate3d(${x}%, ${y}%, 0)`
                    )
                    // transform: y.interpolate(y2 => `translate3d(0, ${y2}%, 0)`)
                  }}
                >
                  <Thumbnail media={item} />
                </animated.div>
              )}
            </Trail>
          </PreviewRow>
          <PreviewRow
            title="Most Popular on TV"
            onClick={() => console.log("Popular TV Button pressed")}
          >
            <Trail
              native
              items={this.state.popularTV}
              from={{ opacity: 0, xy: [-500, 50] }}
              to={{ opacity: 1, xy: [0, 0] }}
              keys={this.state.popularTV.map(item => item.id)}
            >
              {item => ({ xy, opacity }) => (
                <animated.div
                  style={{
                    opacity,
                    transform: xy.interpolate(
                      (x, y) => `translate3d(${x}%, ${y}%, 0)`
                    )
                  }}
                >
                  <Thumbnail show media={item} />
                </animated.div>
              )}
            </Trail>
          </PreviewRow>
          <PreviewRow
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
          </PreviewRow>
          <PreviewRow
            title="New Netflix Shows"
            onClick={() => console.log("View All TV Pressed")}
          >
            <Trail
              native
              items={this.state.newNetflixShows}
              from={{ opacity: 0, x: -500 }}
              to={{ opacity: 1, x: 0 }}
              keys={this.state.newNetflixShows.map(item =>
                item.imdbid ? item.imdbid : item.netflixid
              )}
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
          </PreviewRow>
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
