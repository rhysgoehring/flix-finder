import styled from "styled-components/macro";

const SearchInput = styled.input`
  margin: 1rem;
  width: 40rem;
  padding: 1rem 0.5rem;
  background-color: transparent;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  font-size: 1.8rem;

  &:focus {
    border: none;
  }
`;

const SearchDropDown = styled.div`
  margin: 0 auto;
  width: 40rem;
  border: 1px solid greenyellow;
  border-bottom: none;
  background-color: black;
  position: fixed;
  z-index: 999;
`;

const DropDownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid white;
  font-size: 1.8rem;
  color: white;
  background-color: black;
  text-align: left;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export { SearchInput, SearchDropDown, DropDownItem };
