import styled from "styled-components";
import React from "react";
import Body from "Components/Common/Body";

const Container = styled.section`
  /* height: 100vh; */
  background-color: transparent;
  text-align: center;
  font-size: 30px;
`;
const AboutTitle = styled.div`
  font-weight: 700;
  text-decoration: underline;
  margin: 50px 0;
`;

const AboutMe = styled.div`
  font-size: 24px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 160px 160px 160px;
`;
const Boxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 150px;
`;
const Title = styled.div`
  border: 1.5px solid black;
  border-radius: 30px;
  padding: 1px 25px;
  width: fit-content;
  height: auto;
  font-size: 30px;
  font-weight: 500;
`;
const Content = styled.div`
  font-size: 24px;
  white-space: pre-line;
  margin-top: 30px;
  text-align: center;
  font-weight: 500;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35vw;
  border: 2px solid lightgray;
  margin: 0px 20px;
  border-radius: 20px;
  padding: 20px 30px;
  height: 330px;
`;
const Year = styled.div`
  margin-top: 35px;
  font-size: 20px;
`;
const cString = "ADSP\nSQLD";
const eduString = "명지대학교 응용소프트웨어 전공\n3.59/4.5";

const { forwardRef } = require("react");

const About = forwardRef((props, ref) => {
  return (
    <Container ref={(aboutRef) => (ref.current[1] = aboutRef)}>
      <Body>
        <AboutTitle>ABOUT ME</AboutTitle>
        <AboutMe>
          언제나 적극적으로 제안하고, 협업하기를 좋아하는 김자윤입니다. 팀원들과
          함께 하나의 프로덕트를 위해 나아가는 것을 즐기고, 서로 존중하면서
          자유롭게 의견을 나눌 수 있는 분위기를 만드려고 노력합니다. 사용자가
          느끼기에 감각적이고 편안한 UI/UX에 관심이 많습니다. 일상에서 마주한
          불편함으로, 멋진 결과물을 만들어내는 개발자가 되겠습니다.
        </AboutMe>
        <Boxes>
          <Box>
            <Title>학력</Title>
            <Content>{eduString}</Content>
            <Year>2019.3 - 2024.2</Year>
          </Box>
          <Box>
            <Title>어학</Title>
            <Content>OPIC IH</Content>
            <Year>2023</Year>
          </Box>
          <Box>
            <Title>자격증</Title>
            <Content>{cString}</Content>
            <Year>2021</Year>
          </Box>
        </Boxes>
      </Body>
    </Container>
  );
});
export default About;
