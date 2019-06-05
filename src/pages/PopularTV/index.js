import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Trail, animated } from "react-spring/renderprops";
import { fetchPopularTV } from "../../actions";
import { ReleaseGrid, MainContainer } from "../../utilities/styles/Layout";
import Thumbnail from "../../components/Thumbnail";

class PopularTV extends PureComponent {
  componentDidMount() {
    if (this.props.tv.length === 0) {
      this.props.fetchPopularTV();
    }
  }

  render() {
    return (
      <MainContainer>
        <h1 style={{ color: "white" }}>Popular Shows</h1>
        <ReleaseGrid allReleases>
          <Trail
            native
            items={this.props.tv}
            from={{ opacity: 0, xy: [-500, 500] }}
            to={{ opacity: 1, xy: [0, 0] }}
            keys={this.props.tv.map(item => item.id)}
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
        </ReleaseGrid>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    tv: state.tv.tmdbPopular
  };
};
export default connect(
  mapStateToProps,
  { fetchPopularTV }
)(PopularTV);
