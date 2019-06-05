import React from "react";
import {
  PreviewContainer,
  RowContainer,
  PreviewHeader,
  ViewMoreButton
} from "./styles";
import { ReleaseGrid } from "../../utilities/styles/Layout";

const PreviewRow = ({ title, children, onClick }) => {
  return (
    <PreviewContainer>
      <PreviewHeader>
        <h1>{title}</h1>
        <ViewMoreButton onClick={onClick}>View All</ViewMoreButton>
      </PreviewHeader>
      <ReleaseGrid>{children}</ReleaseGrid>
    </PreviewContainer>
  );
};

export default PreviewRow;
