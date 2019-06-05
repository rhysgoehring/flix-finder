import React, { PureComponent } from "react";
import { Poster } from "../../components/Thumbnail";
import {
  ReleaseWrapper,
  ReleaseInfo,
  ReleaseTitle,
  ReleaseDate,
  ReleaseOverview
} from "./styles";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

class ReleaseDetails extends PureComponent {
  state = {
    release: []
  };

  componentDidMount() {
    this.getReleaseDetails();
  }

  isMovie = () => {
    if (this.props.history.location.pathname.includes("movie")) {
      return true;
    } else {
      return false;
    }
  };

  getReleaseDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${this.isMovie() ? "movie" : "tv"}/${
          this.props.match.params.id
        }?api_key=${process.env.REACT_APP_TMDB_KEY}`
      );
      const release = await response.json();
      this.setState({ release });
    } catch (error) {
      console.error("getReleaseDetails error", error);
    }
  };

  render() {
    const { release } = this.state;
    return (
      <ReleaseWrapper backdrop={`${BACKDROP_PATH}/${release.backdrop_path}`}>
        <ReleaseInfo>
          <Poster
            src={`${POSTER_PATH}/${release.poster_path}`}
            alt={release.title}
          />
          <div>
            <ReleaseTitle>
              {this.isMovie() ? release.title : release.name}
            </ReleaseTitle>
            <ReleaseDate>
              {this.isMovie()
                ? release.release_date
                : `First Aired: ${release.first_air_date}`}
            </ReleaseDate>
            <ReleaseOverview>{release.overview}</ReleaseOverview>
          </div>
        </ReleaseInfo>
      </ReleaseWrapper>
    );
  }
}

export default ReleaseDetails;
