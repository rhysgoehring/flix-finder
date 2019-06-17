import styled from "styled-components/macro";
import { Black } from "../../utilities/styles/Colors";
import { elevation } from "../../utilities/styles";

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  padding: 0 2rem;
  margin: 2rem 0;
  position: relative;
`;

const PreviewHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  z-index: 20;
  flex: 0 0 70%;
`;

const ViewMoreButton = styled.button`
  ${elevation[3]};
  background: transparent;
  text-align: center;
  color: white;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  transition: all 0.9s ease;
  z-index: 25;

  &:hover {
    ${elevation[1]};
    background: white;
    color: ${Black};
  }
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: none;
  position: relative;
`;

export {
  RowContainer,
  PreviewContainer,
  PreviewHeader,
  ViewMoreButton,
  SearchBarWrapper
};
