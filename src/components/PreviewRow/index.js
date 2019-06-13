import React from "react";
import {
  PreviewContainer,
  RowContainer,
  PreviewHeader,
  ViewMoreButton
} from "./styles";
import { ReleaseGrid } from "../../utilities/styles/Layout";
import SearchBar from "../SearchBar";

const PreviewRow = ({ title, children, onClick, movieSearch }) => {
  return (
    <PreviewContainer>
      <PreviewHeader>
        <h1>{title}</h1>
        <SearchBar movieSearch={movieSearch} />
        <ViewMoreButton onClick={onClick}>View All</ViewMoreButton>
      </PreviewHeader>
      <ReleaseGrid>{children}</ReleaseGrid>
    </PreviewContainer>
  );
};

export default PreviewRow;
