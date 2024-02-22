import styled from "styled-components";
import React from "react";
import GitBox from "./GitBox";

const Container = styled.section`
  height: 100vh;
  background-color: pink;
`;
const GitContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 80dvh;
  margin: auto;
  padding-top: 88px;
  width: 80%;
  height: 80%;
  background-color: transparent;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 50px;
`;

const { forwardRef } = require("react");

const Projects = forwardRef((props, ref) => {
  return (
    <Container ref={(projectsRef) => (ref.current[3] = projectsRef)}>
      <GitContainer>
        <GitBox>a</GitBox>
        <GitBox>b</GitBox>
        <GitBox>c</GitBox>
        <GitBox>d</GitBox>
        <GitBox>e</GitBox>
        <GitBox>f</GitBox>
      </GitContainer>
    </Container>
  );
});
export default Projects;
