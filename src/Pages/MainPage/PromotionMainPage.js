import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Body from "../../Components/Common/Body";
import PortfolioGrid from "./PortfolioGrid";
import { motion, useScroll, useSpring } from "framer-motion";
import CustomCursor from "../../Components/Common/CustomCursor";
import MainLogoAnimation from "./MainLogoAnimation";
import Home from "Pages/Home";
import About from "Pages/About";
import Skills from "Pages/Skills";
import Projects from "Pages/Projects";
import Contact from "Pages/Contact";

import HeaderNavBar from "Components/Common/HeaderNavBar";

const ProgressBar = styled(motion.div)`
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  height: 10px;
  background-color: gray;
`;

const LogoContainer = styled.div`
  height: 100vh;
  display: flex;
  background-color: white;
`;
const PromotionMainpage = () => {
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef([]);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const PromotionMainpageContent = () => {
    return (
      <>
        <HeaderNavBar scrollRef={scrollRef} />

        {/* <LogoContainer> */}

        <MainLogoAnimation />

        {/* 이동할 nav 컴포넌트에 ref로 넘겨줌 */}
        <Home ref={scrollRef} />
        <About ref={scrollRef} />
        <Skills ref={scrollRef} />
        <Projects ref={scrollRef} />
        <Contact ref={scrollRef} />
        {/* </LogoContainer> */}
        <ProgressBar style={{ scaleX }}></ProgressBar>
      </>
    );
  };

  return (
    <Body>
      <PromotionMainpageContent />
      <CustomCursor />
    </Body>
  );
};
export default PromotionMainpage;
