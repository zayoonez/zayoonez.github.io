import styled from "styled-components";
import React from "react";
import Body from "Components/Common/Body";
import SkillBox from "Components/Common/SkillBox";

const Container = styled.section`
  height: 100vh;
  background-color: transparent;
`;
const PContainer = styled.div`
  border: 2px solid black;
  padding: 20px 30px;
  border-radius: 25px;
  height: auto;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 50vw; */
`;
const PTitle = styled.div`
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 1.3px;
`;
const Period = styled.div`
  font-size: 17px;
`;
const Line = styled.hr`
  background-color: black;
  width: calc(100%);
  margin-top: 20px;
  padding-bottom: 1px;
  /* padding: 0px 20px; */
`;
const PImage = styled.div`
  background-color: gray;
  width: 400px;
  height: 400px;
  margin-top: 30px;
`;
const PStack = styled.div`
  margin-top: 20px;
  font-weight: normal;
  display: flex;
  flex-direction: row;
  font-size: 24px;
`;
const Detail = styled.div`
  /* height: 50%; */
  width: 100%;
  /* background-color: gray; */
  margin: 30px;
  font-size: 20px;
`;

const WhatDidiDo = styled.div`
  margin-top: 20px;
  height: 50%;
  width: 100%;
  background-color: gray;
`;
const A = styled.div`
  display: flex;
  flex-direction: row;
`;

const { forwardRef } = require("react");

const Projects = forwardRef((props, ref) => {
  return (
    <Container ref={(projectsRef) => (ref.current[3] = projectsRef)}>
      <Body>
        <PContainer>
          <Section>
            <PTitle>STUDIO Eye 웹사이트 개발</PTitle>
            <Period>
              2023.03 ~ 2023.06 / Front-end Developer (Front Team Leader)
            </Period>
            <PStack>
              <SkillBox skill="React" />
              <SkillBox skill="Javascript" />
              <SkillBox skill="styled-components" />
            </PStack>
            <Line />
          </Section>
          <Section>
            <A>
              <PImage></PImage>
              <Section>
                <Detail>
                  설명 : 스튜디오 아이 기업의 외주를 받아 개발하게 된 기업
                  포트폴리오 사이트 / 기업 내부 직원들의 일정 및 업무 관리
                  사이트
                </Detail>
                <Detail>
                  • React.js 에 대해 깊게 이해하게 된 계기가 된 프로젝트 SPA
                </Detail>
                <Detail>WhatDidIdo :</Detail>
              </Section>
            </A>
          </Section>
        </PContainer>
      </Body>
    </Container>
  );
});
export default Projects;
