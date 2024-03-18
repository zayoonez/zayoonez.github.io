import styled from "styled-components";
import React, { useState } from "react";
import SkillBox from "Components/Common/SkillBox";
import data from "../skillsdata.json";
import { motion } from "framer-motion";
import Body from "Components/Common/Body";

const Container = styled.section`
  /* height: 100vh; */
  background-color: transparent;
`;
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 50px;
  justify-content: center;
`;

const Notice = styled.div`
  font-size: 20px;
  text-align: center;
`;
const SkillsTitle = styled.div`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 50px;
  text-align: center;
`;
const SkillSet = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
`;
const Skillss = styled.div`
  display: flex;
  flex-direction: column;
  margin: 35px 0px;
  width: 25%;
`;
const Skill = styled(motion.div)`
  white-space: nowrap;
  width: auto;
  /* padding: 2px 10px; */
  height: 27px;
  background-color: white;
  /* border-radius: 50px; */
  /* border: 1px solid black; */
  margin: 15px 0px;
  font-size: 25px;
  display: flex;
  align-items: center;
  cursor: alias;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: filter 0.3s ease; /* 흐림 효과에 transition 적용 */

  ${(props) =>
    props.blur &&
    "filter: blur(18px);"}/* blur prop이 true이면 흐림 효과 적용 */
`;
const SkillCategory = styled.div`
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  /* border: 2px solid black; */
  border-radius: 20px;
  margin: 20px;
  padding: 2px 10px;
  background-color: rgb(241, 96, 0, 0.3);
  /* backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); */
  /* filter: blur(5px); */
`;
const AboutSkill = styled.div`
  font-size: 15px !important;
  font-weight: 700 !important;
  margin-top: 10px;
  padding: 5px;
  white-space: normal;
`;

const { forwardRef } = require("react");

const Skills = forwardRef((props, ref) => {
  const [isHovering, setIsHovering] = useState(null);

  return (
    <Container ref={(skillsRef) => (ref.current[2] = skillsRef)}>
      <Body>
        <SkillsTitle>Skills</SkillsTitle>
        <Notice>스킬 위에 마우스를 올리면 상세 설명이 나와요!</Notice>
        <SkillsContainer>
          <Skillss>
            <SkillCategory>FRONT</SkillCategory>
            {data.Front.map((skill) => (
              <SkillSet key={skill.id}>
                <Skill
                  whileHover={{
                    scale: 1.2,
                  }}
                  onMouseEnter={() => setIsHovering(skill.id)}
                  onMouseLeave={() => setIsHovering(null)}
                  blur={isHovering && isHovering !== skill.id}
                >
                  {skill.name}
                  {isHovering === skill.id && (
                    <AboutSkill>{skill.description}</AboutSkill>
                  )}
                </Skill>
              </SkillSet>
            ))}
          </Skillss>
          <Skillss>
            <SkillCategory>HTML/CSS</SkillCategory>
            {data.CSS.map((skill) => (
              <SkillSet key={skill.id}>
                <Skill
                  whileHover={{
                    scale: 1.2,
                  }}
                  onMouseEnter={() => setIsHovering(skill.id)}
                  onMouseLeave={() => setIsHovering(null)}
                  blur={isHovering && isHovering !== skill.id}
                >
                  {skill.name}
                  {isHovering === skill.id && (
                    <AboutSkill>{skill.description}</AboutSkill>
                  )}
                </Skill>
              </SkillSet>
            ))}
          </Skillss>
          <Skillss>
            <SkillCategory>BACK</SkillCategory>
            {data.Back.map((skill) => (
              <SkillSet key={skill.id}>
                <Skill
                  whileHover={{
                    scale: 1.2,
                  }}
                  onMouseEnter={() => setIsHovering(skill.id)}
                  onMouseLeave={() => setIsHovering(null)}
                  blur={isHovering && isHovering !== skill.id}
                >
                  {skill.name}
                  {isHovering === skill.id && (
                    <AboutSkill>{skill.description}</AboutSkill>
                  )}
                </Skill>
              </SkillSet>
            ))}
          </Skillss>
          <Skillss>
            <SkillCategory>ETC</SkillCategory>
            {data.ETC.map((skill) => (
              <SkillSet key={skill.id}>
                <Skill
                  whileHover={{
                    scale: 1.2,
                  }}
                  onMouseEnter={() => setIsHovering(skill.id)}
                  onMouseLeave={() => setIsHovering(null)}
                  blur={isHovering && isHovering !== skill.id}
                >
                  {skill.name}
                  {isHovering === skill.id && (
                    <AboutSkill>{skill.description}</AboutSkill>
                  )}
                </Skill>
              </SkillSet>
            ))}
          </Skillss>
        </SkillsContainer>
      </Body>
    </Container>
  );
});
export default Skills;
