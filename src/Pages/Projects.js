import styled from "styled-components";
import React from "react";
import Body from "Components/Common/Body";
import SkillBox from "Components/Common/SkillBox";
import data from "../projects.json";

const Container = styled.section`
  /* height: 100vh; */
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
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
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
const ForRow = styled.div`
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
  white-space: pre-line;
`;

const { forwardRef } = require("react");

const Projects = forwardRef((props, ref) => {
  return (
    <Container ref={(projectsRef) => (ref.current[3] = projectsRef)}>
      <Body>
        {data.projects.map((p) => (
          <PContainer>
            <Section>
              <PTitle>{p.title}</PTitle>
              <Period>{p.period}</Period>
              <ForRow>
                {p.skill.map((s) => (
                  <SkillBox skill={s} />
                ))}
              </ForRow>
              <Line />
            </Section>
            <Section>
              <ForRow>
                <PImage></PImage>
                <DetailContainer>
                  <Detail>{p.slogan}</Detail>
                  <Detail>{p.description}</Detail>
                  <Detail>{p.detail}</Detail>
                </DetailContainer>
              </ForRow>
            </Section>
          </PContainer>
        ))}
      </Body>
    </Container>
  );
});
export default Projects;
