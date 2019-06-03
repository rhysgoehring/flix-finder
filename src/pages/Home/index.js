import React, { Component } from "react";
import { Trail, animated } from "react-spring/renderprops";
import { connect } from "react-redux";
import { fetchPopularMovies, fetchPopularTV } from "../../actions";
import { MainContainer } from "../../utilities/styles/Layout";
import {
  RowContainer,
  Top5Container
} from "../../components/TopFiveRow/styles";
import Thumbnail from "../../components/Thumbnail";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularMovies: [],
      popularTV: []
    };
  }

  componentDidMount() {
    this.getPopularMovies();
    this.getPopularTv();
  }

  getPopularMovies = async () => {
    const popularMovies = await this.props.fetchPopularMovies();
    this.setState({ popularMovies });
  };

  getPopularTv = async () => {
    const popularTV = await this.props.fetchPopularTV();
    this.setState({ popularTV });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <MainContainer>
          <Top5Container>
            <h1>Most Popular Movies</h1>
            <RowContainer>
              <Trail
                native
                items={this.state.popularMovies}
                from={{ opacity: 0, x: -500 }}
                to={{ opacity: 1, x: 0 }}
                keys={this.state.popularMovies.map(item => item.id)}
              >
                {item => ({ x, opacity }) => (
                  <animated.div
                    style={{
                      opacity,
                      transform: x.interpolate(
                        x1 => `translate3d(${x1}%, 0, 0)`
                      )
                    }}
                  >
                    <Thumbnail media={item} />
                  </animated.div>
                )}
              </Trail>
            </RowContainer>
          </Top5Container>
          <Top5Container>
            <h1>Most Popular on TV</h1>
            <RowContainer>
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
                      transform: x.interpolate(
                        x1 => `translate3d(${x1}%, 0, 0)`
                      )
                    }}
                  >
                    <Thumbnail media={item} />
                  </animated.div>
                )}
              </Trail>
            </RowContainer>
          </Top5Container>
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
  { fetchPopularMovies, fetchPopularTV }
)(Home);
