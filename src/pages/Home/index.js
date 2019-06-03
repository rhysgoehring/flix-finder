import React, { Component } from "react";
import { Trail, animated, Transition } from "react-spring/renderprops";
import { connect } from "react-redux";
import { fetchPopularMovies, fetchPopularTV } from "../../actions";
import { MainContainer } from "../../utilities/styles/Layout";
import {
  RowContainer,
  Top5Container
} from "../../components/TopFiveRow/styles";
import Top5Row from "../../components/TopFiveRow";
import Thumbnail from "../../components/Thumbnail";

const SAMPLE_DATA = [
  {
    adult: false,
    backdrop_path: "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
    genre_ids: (5)[(12, 14, 10749, 35, 10751)],
    id: 420817,
    original_language: "en",
    original_title: "Aladdin",
    overview:
      "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    popularity: 499.517,
    poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    release_date: "2019-05-22",
    title: "Aladdin",
    video: false,
    vote_average: 7.3,
    vote_count: 1009
  },
  {
    adult: false,
    backdrop_path: "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
    genre_ids: (5)[(12, 14, 10749, 35, 10751)],
    id: 420817,
    original_language: "en",
    original_title: "Aladdin",
    overview:
      "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    popularity: 499.517,
    poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    release_date: "2019-05-22",
    title: "Aladdin",
    video: false,
    vote_average: 7.3,
    vote_count: 1009
  },
  {
    adult: false,
    backdrop_path: "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
    genre_ids: (5)[(12, 14, 10749, 35, 10751)],
    id: 420817,
    original_language: "en",
    original_title: "Aladdin",
    overview:
      "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    popularity: 499.517,
    poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    release_date: "2019-05-22",
    title: "Aladdin",
    video: false,
    vote_average: 7.3,
    vote_count: 1009
  },
  {
    adult: false,
    backdrop_path: "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
    genre_ids: (5)[(12, 14, 10749, 35, 10751)],
    id: 420817,
    original_language: "en",
    original_title: "Aladdin",
    overview:
      "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    popularity: 499.517,
    poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    release_date: "2019-05-22",
    title: "Aladdin",
    video: false,
    vote_average: 7.3,
    vote_count: 1009
  },
  {
    adult: false,
    backdrop_path: "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
    genre_ids: (5)[(12, 14, 10749, 35, 10751)],
    id: 420817,
    original_language: "en",
    original_title: "Aladdin",
    overview:
      "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    popularity: 499.517,
    poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    release_date: "2019-05-22",
    title: "Aladdin",
    video: false,
    vote_average: 7.3,
    vote_count: 1009
  },
  {
    adult: false,
    backdrop_path: "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
    genre_ids: (5)[(12, 14, 10749, 35, 10751)],
    id: 420817,
    original_language: "en",
    original_title: "Aladdin",
    overview:
      "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    popularity: 499.517,
    poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    release_date: "2019-05-22",
    title: "Aladdin",
    video: false,
    vote_average: 7.3,
    vote_count: 1009
  },
  {
    adult: false,
    backdrop_path: "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
    genre_ids: (5)[(12, 14, 10749, 35, 10751)],
    id: 420817,
    original_language: "en",
    original_title: "Aladdin",
    overview:
      "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    popularity: 499.517,
    poster_path: "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    release_date: "2019-05-22",
    title: "Aladdin",
    video: false,
    vote_average: 7.3,
    vote_count: 1009
  }
];

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
    // this.setState({ popularMovies: SAMPLE_DATA });
  };

  getPopularTv = async () => {
    const popularTV = await this.props.fetchPopularTV();

    this.setState({ popularTV });
    // this.setState({ popularTV: SAMPLE_DATA });
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
