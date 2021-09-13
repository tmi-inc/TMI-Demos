import React from "react";
import styled from "styled-components";

import medicalIcon from "../../../../assets/images/icons/medical-record.svg";

const StyledHeaderWrap = styled.div`
  height: 100vh;
  width: 20vw;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f5ba33;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    margin: 0;
    color: #fff;
    margin-bottom: 40px;
  }
`;

export default function SideBar() {
  return (
    <StyledHeaderWrap>
      <h1>Covid-19 Vaccine Locations Near You!</h1>
      <img src={medicalIcon} alt="" />
    </StyledHeaderWrap>
  );
}
