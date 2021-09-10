import React from "react";
import styled from "styled-components";
import roadImage from "../../../../assets/images/background/road-yellow-stripes.jpg";

const StyledHeaderWrap = styled.div`
  height: 100vh;
  width: 20vw;
  /* background-color: #4a4a4a; */
  padding: 200px 3%;
  box-sizing: border-box;
  background-image: linear-gradient(
      rgba(30, 30, 30, 0.7),
      rgba(30, 30, 30, 0.7)
    ),
    url(${roadImage});
  background-position: 0px -400px;

  h1 {
    margin: 0;
    color: #fff;
  }
`;

export default function SideBar() {
  return (
    <StyledHeaderWrap>
      <h1>Covid-19 Vaccine Locations Near You!</h1>
    </StyledHeaderWrap>
  );
}
