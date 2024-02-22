import styled from "styled-components";
import React from "react";

const Container = styled.section`
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SkillsTitle = styled.div`
  font-weight: bold;
`;
const Skills = styled.div`
  display: flex;
  flex-direction: column;
`;
const Skill = styled.div`
  width: auto;
  padding: 2px 10px;
  height: 20px;
  background-color: white;
  border-radius: 50px;
  border: 1px solid black;
`;
const { forwardRef } = require("react");

const About = forwardRef((props, ref) => {
  return (
    <Container ref={(aboutRef) => (ref.current[1] = aboutRef)}>
      <SkillsTitle>기술 스택</SkillsTitle>
      <Skills>
        <Skill>React</Skill>
      </Skills>
    </Container>
  );
});
export default About;
