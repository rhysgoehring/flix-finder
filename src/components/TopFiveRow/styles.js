import styled from "styled-components/macro";

const Top5Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  padding: 0 2rem;
  position: relative;

  border: 2px solid white;
`;

const Top5Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ViewMoreButton = styled.button`
  background: transparent;
  text-align: center;
  color: white;
  width: 10rem;
  height: 3.5rem;
  font-size: 1.8rem;
  align-self: center;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: none;
  position: relative;

  border: 1px solid red;
`;

export { RowContainer, Top5Container, Top5Header, ViewMoreButton };
