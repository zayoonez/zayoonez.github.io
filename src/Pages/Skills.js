import styled from "styled-components";
import React from "react";

const Container = styled.section`
  height: 100vh;
  background-color: brown;
`;
const { forwardRef } = require("react");

const Skills = forwardRef((props, ref) => {
  return (
    <Container ref={(skillsRef) => (ref.current[2] = skillsRef)}>
      ㅎㅇ ㅋㅋ
    </Container>
  );
});
export default Skills;
