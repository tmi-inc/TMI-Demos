import React, { useEffect } from "react";
import styled from "styled-components";

const StyledStaticMapWrapper = styled.div`
  width: 100%;
  height: 92vh;

  img {
    height: 100%;
    object-fit: cover;
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
