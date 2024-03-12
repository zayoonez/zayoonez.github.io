import styled from "styled-components";
import React from "react";
import Body from "Components/Common/Body";
import MainLogoAnimation from "./MainPage/MainLogoAnimation";
import Me from "../assets/images/me.jpg";
const Container = styled.section`
  /* height: 100vh; */
  background-color: transparent;
  /* text-align: center; */
  /* font-size: 33px; */
`;
const Img = styled.img`
  position: absolute;
  right: 0px;
  top: 100px;
  margin-right: 80px;
  margin-bottom: 20px;
`;
const { forwardRef } = require("react");

const Home = forwardRef((props, ref) => {
  return (
    <Container ref={(homeRef) => (ref.current[0] = homeRef)}>
      <Body>
        <MainLogoAnimation />
        <Img src={Me}></Img>
      </Body>
    </Container>
  );
});
export default Home;
