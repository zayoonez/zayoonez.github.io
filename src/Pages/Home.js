import styled from "styled-components";
import React from "react";

const Container = styled.section`
  height: 100vh;
  background-color: beige;
`;
const { forwardRef } = require("react");

const Home = forwardRef((props, ref) => {
  return <Container ref={(homeRef) => (ref.current[0] = homeRef)}></Container>;
});
export default Home;
