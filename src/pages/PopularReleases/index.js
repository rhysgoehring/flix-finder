import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Trail, animated } from "react-spring/renderprops";
import { fetchPopularTV, fetchPopularMovies } from "../../actions";
import { ReleaseGrid, MainContainer } from "../../utilities/styles/Layout";
import Thumbnail from "../../components/Thumbnail";
import { isMovie } from "../../utilities/functions";

class PopularReleases extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      releases: []
    };
  }

  componentDidMount() {
    this.checkAndFetch();
  }

  checkAndFetch = async () => {
    if (isMovie(this)) {
      const { mostPopularMovies } = await this.props.fetchPopularMovies();
      this.setState({ releases: mostPopularMovies });
    } else {
      const { mostPopularTV } = await this.props.fetchPopularTV();
      this.setState({ releases: mostPopularTV });
    }
  };

  render() {
    const { releases } = this.state;

    return (
      <MainContainer>
        <h1 style={{ color: "white" }}>
          {isMovie(this) ? "Popular Movies" : "Popular Shows"}
        </h1>
        <ReleaseGrid allReleases>
          <Trail
            native
            // force
            items={releases}
            from={{ opacity: 0, xy: [-50, 50] }}
            to={{ opacity: 1, xy: [0, 0] }}
            keys={releases.map(item => item.id)}
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
                <Thumbnail show={!isMovie(this)} media={item} />
              </animated.div>
            )}
          </Trail>
        </ReleaseGrid>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    tv: state.tv.tmdbPopular,
    movies: state.movies.tmdbPopular
  };
};
export default connect(
  mapStateToProps,
  { fetchPopularTV, fetchPopularMovies }
)(PopularReleases);
