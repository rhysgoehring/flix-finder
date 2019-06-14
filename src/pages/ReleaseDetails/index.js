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
    try {
      const tmdbResponse = await axios.get(
        `https://api.themoviedb.org/3/${isMovie(this) ? "movie" : "tv"}/${
          this.props.match.params.id
        }?api_key=${process.env.REACT_APP_TMDB_KEY}`
      );

      const tmdbData = tmdbResponse.data;
      console.log("tmdb", tmdbData);

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

      const omdbRatings = Ratings.filter(
        rating => rating.Source !== "Internet Movie Database"
      );

      console.log("omdbRatings", omdbRatings);

      const release = {
        ...tmdbData,
        Actors,
        Awards,
        Director,
        // Ratings,
        omdbRatings,
        Writer,
        imdbRating,
        imdbVotes
      };

      console.log("release", release);

      // TODO: Add more release details with data from OMDB

      this.setState({ release });
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
                  ? release.release_date
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
