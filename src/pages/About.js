import React from "react";
import styled from "styled-components";

import Navigation from "components/Navigation/Navigation";

const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background: ${({ theme }) => theme.homeBgColor};
`;

const Home = () => (
  <HomeWrapper>
    <Navigation />
  </HomeWrapper>
);

export default Home;
