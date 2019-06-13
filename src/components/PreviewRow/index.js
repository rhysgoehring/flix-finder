import React from "react";
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

const PreviewRow = ({ title, children, onClick, movieSearch, onIconClick }) => {
  return (
    <PreviewContainer>
      <PreviewHeader>
        <h1>{title}</h1>
        <SearchBarWrapper>
          <IconWrapper onClick={onIconClick}>
            <MaterialIcon icon="search" color="#fff" size="40" />
          </IconWrapper>
          <SearchBar movieSearch={movieSearch} />
        </SearchBarWrapper>
        <ViewMoreButton onClick={onClick}>View All</ViewMoreButton>
      </PreviewHeader>
      <ReleaseGrid>{children}</ReleaseGrid>
    </PreviewContainer>
  );
};

export default PreviewRow;
