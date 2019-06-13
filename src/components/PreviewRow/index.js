import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import MaterialIcon from "material-icons-react";
import {
  PreviewContainer,
  PreviewHeader,
  ViewMoreButton,
  SearchBarWrapper
} from "./styles";
import { ReleaseGrid } from "../../utilities/styles/Layout";
import SearchBar from "../SearchBar";
import { IconWrapper } from "../Header/styles";

const PreviewRow = ({ title, children, onClick, movieSearch }) => {
  const [searchBarOpen, toggleSearchBar] = useState(false);

  const { x } = useSpring({
    x: searchBarOpen ? "1" : "0"
  });

  return (
    <PreviewContainer>
      <PreviewHeader>
        <h1>{title}</h1>
        <SearchBarWrapper>
          <IconWrapper onClick={() => toggleSearchBar(!searchBarOpen)}>
            <MaterialIcon icon="search" color="#fff" size="40" />
          </IconWrapper>
          <animated.div
            style={{
              transform: x.interpolate(x2 => `scaleX(${x2})`)
            }}
          >
            <SearchBar movieSearch={movieSearch} />
          </animated.div>
        </SearchBarWrapper>
        <ViewMoreButton onClick={onClick}>View All</ViewMoreButton>
      </PreviewHeader>
      <ReleaseGrid>{children}</ReleaseGrid>
    </PreviewContainer>
  );
};

export default PreviewRow;
