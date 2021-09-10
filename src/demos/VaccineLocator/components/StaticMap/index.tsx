import React, { useEffect } from "react";
import styled from "styled-components";

const StyledStaticMapWrapper = styled.div`
  width: 100%;
  height: 100vh;

  img {
    height: 100%;
    max-height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    /* max-width: 100%; */
  }
`;

export default function StaticMap({ locationInfo }: StaticMapPropTypes) {
  useEffect(() => {
    console.log(locationInfo);
  }, []);

  return (
    <StyledStaticMapWrapper>
      <img src={locationInfo?.static_map} alt="" />
    </StyledStaticMapWrapper>
  );
}
