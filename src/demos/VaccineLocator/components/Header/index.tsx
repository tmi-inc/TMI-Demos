import React from "react";
import styled from "styled-components";

const StyledHeaderWrap = styled.div`
  height: 8vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
  }
`;

export default function Header() {
  return (
    <StyledHeaderWrap>
      <h1>Vaccine Locations Near You!</h1>
    </StyledHeaderWrap>
  );
}
