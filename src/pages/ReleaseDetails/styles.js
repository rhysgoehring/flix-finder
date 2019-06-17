import styled from "styled-components/macro";

const ReleaseWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 50vh;
  background: url(${({ backdrop }) => backdrop}) no-repeat;
  background-size: cover;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const ReleaseInfo = styled.div`
  background: rgba(0, 0, 0, 0.7);
  text-align: left;
  padding: 2rem 10%;
  height: 100vh;
  display: flex;
  > div {
    margin-left: 2rem;
  }
  img {
    position: relative;
    top: -5rem;
    height: 23.1rem;
  }
`;
const ReleaseHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems};
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
`;

const ReleaseText = styled.p`
  font-size: ${({ fontSize }) => fontSize || "1.8rem"};
  margin: 0;
  padding: 1rem 1rem;
  line-height: 3rem;
`;

const ReleaseTitle = styled.a`
  font-size: 3rem;
  text-decoration: none;
  color: white;
  padding: 0 0 1rem;

  &:hover {
    text-decoration: underline solid white;
  }
`;

const ReleaseOverview = styled(ReleaseText)`
  font-size: 1.8rem;
  line-height: 3rem;
`;

export {
  ReleaseWrapper,
  ReleaseInfo,
  DetailBox,
  ReleaseTitle,
  ReleaseOverview,
  ReleaseHeader,
  ReleaseText
};
