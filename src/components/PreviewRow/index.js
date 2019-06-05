import React from "react";
import {
  PreviewContainer,
  RowContainer,
  PreviewHeader,
  ViewMoreButton
} from "./styles";

const PreviewRow = ({ title, children, onClick }) => {
  return (
    <PreviewContainer>
      <PreviewHeader>
        <h1>{title}</h1>
        <ViewMoreButton onClick={onClick}>View All</ViewMoreButton>
      </PreviewHeader>
      <RowContainer>{children}</RowContainer>
    </PreviewContainer>
  );
};

export default PreviewRow;
