import styled from "styled-components/macro";

const Top5Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 2rem;
  position: relative;

  border: 2px solid white;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: none;
  position: relative;

  border: 1px solid red;
`;

export { RowContainer, Top5Container };
