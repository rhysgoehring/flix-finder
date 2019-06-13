import React, { Component } from "react";
import Downshift from "downshift";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { SearchInput, SearchDropDown, DropDownItem } from "./styles";
import { Black, Grey800 } from "../../utilities/styles/Colors";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      releases: []
    };
  }

  inputOnChange = event => {
    if (!event.target.value) {
      return;
    }
    this.fetchMovies(event.target.value);
  };

  downshiftOnChange = release => {
    const BASE_URL = this.props.movieSearch ? "/movie" : "/show";
    this.props.history.push(`${BASE_URL}/${release.id}`);
  };

  fetchMovies = async query => {
    const endpointURL = this.props.movieSearch
      ? `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_TMDB_KEY
        }&language=en-US&query=${query}&include_adult=false&region=us`
      : `https://api.themoviedb.org/3/search/tv?api_key=${
          process.env.REACT_APP_TMDB_KEY
        }&language=en-US&query=${query}&region=us&with_original_language=en`;

    const { data } = await axios.get(endpointURL);

    this.setState({ releases: data.results });
  };

  render() {
    return (
      <Downshift
        onChange={this.downshiftOnChange}
        itemToString={item => (item ? item.title : "")}
      >
        {({
          selectedItem,
          getInputProps,
          getItemProps,
          highlightedIndex,
          isOpen,
          inputValue
        }) => (
          <div>
            <SearchInput
              {...getInputProps({
                placeholder: this.props.movieSearch
                  ? "Search movies"
                  : "Search TV",
                onChange: this.inputOnChange,
                value: inputValue
              })}
            />
            {isOpen ? (
              <SearchDropDown>
                {this.state.releases
                  .filter(item =>
                    !inputValue || this.props.movieSearch
                      ? item.title
                      : item.name
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                  )
                  .slice(0, 10)
                  .map((item, index) => (
                    <DropDownItem
                      backgroundColor={
                        highlightedIndex === index ? `${Grey800}` : `${Black}`
                      }
                      fontWeight={selectedItem === item ? "bold" : "normal"}
                      {...getItemProps({ key: index, index, item })}
                    >
                      {this.props.movieSearch ? item.title : item.name}
                    </DropDownItem>
                  ))}
              </SearchDropDown>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

export default withRouter(SearchBar);
