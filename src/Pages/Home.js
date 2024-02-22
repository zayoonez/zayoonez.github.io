import styled from "styled-components";
import React from "react";
import Body from "Components/Common/Body";

const Container = styled.section`
  height: 100vh;
  background-color: transparent;
  text-align: center;
  font-size: 33px;
`;
const AboutTitle = styled.div`
  font-weight: 700;
  text-decoration: underline;
  margin-bottom: 50px;
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
  width: 35vw;
`;
const Year = styled.div`
  margin-top: 35px;
  font-size: 20px;
`;
const cString = "ADSP\nSQLD";
const eduString = "명지대학교 응용소프트웨어 전공\n3.59/4.5";

const { forwardRef } = require("react");

const Home = forwardRef((props, ref) => {
  return (
    <Container ref={(homeRef) => (ref.current[0] = homeRef)}>
      <Body>
        <AboutTitle>냠냠</AboutTitle>
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
export default Home;
