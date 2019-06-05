import styled from "styled-components/macro";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const ReleaseGrid = styled.div`
  display: grid;
  padding: 1rem;
  /* grid-template-columns: repeat(7, 1fr); */
  grid-template-columns: ${({ allReleases }) =>
    allReleases ? "repeat(8, 1fr)" : "repeat(7, 1fr)"};
  grid-row-gap: 1rem;
  grid-column-gap: 2rem;
`;
export { MainContainer, ReleaseGrid };
