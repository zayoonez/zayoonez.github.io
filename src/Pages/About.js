import styled from "styled-components";
import React from "react";

const Container = styled.section`
  height: 100vh;
  background-color: brown;
`;

const { forwardRef } = require("react");

const About = forwardRef((props, ref) => {
  return (
    <Container ref={(aboutRef) => (ref.current[1] = aboutRef)}></Container>
  );
});
export default About;
