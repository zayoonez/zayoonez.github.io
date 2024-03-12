import styled from "styled-components";
import React from "react";
import SkillBox from "Components/Common/SkillBox";
import data from "../skillsdata.json";
import { motion } from "framer-motion";

const Container = styled.section`
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SkillsContainer = styled.div``;
const Notice = styled.div`
  font-size: 20px;
`;
const SkillsTitle = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 50px;
`;
const SkillSet = styled.div`
  display: flex;
  flex-direction: row;
`;
const Skillss = styled.div`
  display: flex;
  flex-direction: row;
  margin: 60px 0px;
`;
const Skill = styled(motion.div)`
  white-space: nowrap;
  width: auto;
  padding: 2px 10px;
  height: 27px;
  background-color: white;
  border-radius: 50px;
  border: 1px solid black;
  margin: 0px 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  cursor: alias;
`;
const SkillCategory = styled.div`
  font-weight: bold;
  margin-right: 60px;
  width: 120px;
  font-size: 28px;
`;
const { forwardRef } = require("react");

const Skills = forwardRef((props, ref) => {
  return (
    <Container ref={(skillsRef) => (ref.current[2] = skillsRef)}>
      <SkillsTitle>Skills</SkillsTitle>
      <Notice>스킬 위에 마우스를 올리면 상세 설명이 나와요!</Notice>
      <SkillsContainer>
        <Skillss>
          <SkillCategory>FRONT</SkillCategory>
          {data.Front.map((skill) => (
            <SkillSet key={skill.id}>
              <Skill whileHover={{ scale: 1.2 }}>{skill.name}</Skill>
            </SkillSet>
          ))}
        </Skillss>
        <Skillss>
          <SkillCategory>HTML/CSS</SkillCategory>
          {data.CSS.map((skill) => (
            <SkillSet key={skill.id}>
              <Skill whileHover={{ scale: 1.2 }}>{skill.name}</Skill>
            </SkillSet>
          ))}
        </Skillss>
        <Skillss>
          <SkillCategory>BACK</SkillCategory>
          {data.Back.map((skill) => (
            <SkillSet key={skill.id}>
              <Skill whileHover={{ scale: 1.2 }}>{skill.name}</Skill>
            </SkillSet>
          ))}
        </Skillss>
        <Skillss>
          <SkillCategory>ETC</SkillCategory>
          {data.ETC.map((skill) => (
            <SkillSet key={skill.id}>
              <Skill whileHover={{ scale: 1.2 }}>{skill.name}</Skill>
            </SkillSet>
          ))}
        </Skillss>
      </SkillsContainer>
    </Container>
  );
});
export default Skills;
