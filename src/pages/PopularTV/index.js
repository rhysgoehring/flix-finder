import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPopularTV } from "../../actions";
import { ReleaseGrid, MainContainer } from "../../utilities/styles/Layout";
import Thumbnail from "../../components/Thumbnail";

class PopularTV extends Component {
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
          {this.props.tv.map(tv => (
            <Thumbnail show media={tv} />
          ))}
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
