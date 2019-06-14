import styled from "styled-components/macro";
import { Black } from "../../utilities/styles/Colors";

const ReleaseWrapper = styled.div`
  position: relative;
  padding-top: 30vh;
  background: url(${({ backdrop }) => backdrop}) no-repeat;
  background-size: cover;
  height: 100vh;
`;

const ReleaseInfo = styled.div`
  background: rgba(0, 0, 0, 0.7);
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 2rem;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

const ReleaseTitle = styled.h1`
  font-size: 3rem;
`;

const ReleaseDate = styled.h3`
  font-size: 2rem;
  padding-bottom: 1.5rem;
`;

const ReleaseOverview = styled.p`
  font-size: 1.8rem;
  line-height: 3rem;
`;

export {
  ReleaseWrapper,
  ReleaseInfo,
  ReleaseTitle,
  ReleaseDate,
  ReleaseOverview
};
