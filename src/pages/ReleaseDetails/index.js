import React, { PureComponent } from "react";
import axios from "axios";
import { Poster } from "../../components/Thumbnail";
import {
  ReleaseWrapper,
  ReleaseInfo,
  ReleaseTitle,
  ReleaseDate,
  ReleaseOverview
} from "./styles";
import { isMovie } from "../../utilities/functions";
import { MainContainer } from "../../utilities/styles/Layout";
import { imdbConfig } from "../../actions/util/axios_configs";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class ReleaseDetails extends PureComponent {
  state = {
    release: []
  };

  componentDidMount() {
    this.getReleaseDetails();
  }

  getReleaseDetails = async () => {
    // TODO: Add more release details with data from OMDB
    // TODO: Refactor...
    try {
      const tmdbResponse = await axios.get(
        `https://api.themoviedb.org/3/${isMovie(this) ? "movie" : "tv"}/${
          this.props.match.params.id
        }?api_key=${process.env.REACT_APP_TMDB_KEY}`
      );

      const tmdbData = tmdbResponse.data;
      console.log("tmdb", tmdbData);

      if (isMovie(this)) {
        const omdbResponse = await axios.get(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${
            tmdbData.imdb_id
          }`
        );

        const {
          Actors,
          Awards,
          Director,
          Ratings,
          Writer,
          imdbRating,
          imdbVotes
        } = omdbResponse.data;

        const omdbRatings = await Ratings.filter(
          rating => rating.Source !== "Internet Movie Database"
        );

        console.log("omdbRatings", omdbRatings);

        const release = {
          ...tmdbData,
          Actors,
          Awards,
          Director,
          omdbRatings,
          Writer,
          imdbRating,
          imdbVotes
        };

        console.log("release", release);

        this.setState({ release });
      } else {
        const { data } = await axios.get(
          `https://imdb8.p.rapidapi.com/title/find?q=${tmdbData.name}`,
          imdbConfig
        );
        const imdbTVResults = data.results;
        console.log("find imdb", imdbTVResults);

        const imdbTVdata = imdbTVResults.find(
          tvShow => tvShow.titleType === "tvSeries"
        );

        const imdbTVid = imdbTVdata.id.replace(/\//g, "").replace("title", "");

        console.log("imdbTVid", imdbTVid);

        const omdbTVResponse = await axios.get(
          `http://www.omdbapi.com/?apikey=${
            process.env.REACT_APP_OMDB_KEY
          }&i=${imdbTVid}`
        );

        const {
          Actors,
          Awards,
          Director,
          Ratings,
          Writer,
          imdbRating,
          imdbVotes
        } = omdbTVResponse.data;

        const omdbRatings = Ratings.filter(
          rating => rating.Source !== "Internet Movie Database"
        );

        const release = {
          ...tmdbData,
          Actors,
          Awards,
          Director,
          omdbRatings,
          Writer,
          imdbRating,
          imdbVotes
        };

        this.setState({ release });
      }
    } catch (error) {
      console.error("getReleaseDetails error", error);
    }
  };

  render() {
    const { release } = this.state;
    return (
      <MainContainer>
        <ReleaseWrapper backdrop={`${BACKDROP_PATH}/${release.backdrop_path}`}>
          <ReleaseInfo>
            <Poster
              src={`${POSTER_PATH}/${release.poster_path}`}
              alt={release.title}
            />
            <div>
              <ReleaseTitle>
                {isMovie(this) ? release.title : release.name}
              </ReleaseTitle>
              <ReleaseDate>
                {isMovie(this)
                  ? `Released: ${release.release_date}`
                  : `First Aired: ${release.first_air_date}`}
              </ReleaseDate>
              <ReleaseOverview>{release.overview}</ReleaseOverview>
            </div>
          </ReleaseInfo>
        </ReleaseWrapper>
      </MainContainer>
    );
  }
}

export default ReleaseDetails;
