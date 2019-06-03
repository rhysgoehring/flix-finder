import React from "react";
import {
  Top5Container,
  RowContainer,
  Top5Header,
  ViewMoreButton
} from "./styles";

const TopFiveRow = ({ title, children, onClick }) => {
  return (
    <Top5Container>
      <Top5Header>
        <h1>{title}</h1>
        <ViewMoreButton onClick={onClick}>View All</ViewMoreButton>
      </Top5Header>
      <RowContainer>{children}</RowContainer>
    </Top5Container>
  );
};

export default TopFiveRow;
