import React, { useRef, useState } from "react";
import styled from "styled-components";
import Responsive from "./responsive";
import { HiMenu, HiX } from "react-icons/hi";
import Offcanvas from "react-bootstrap/Offcanvas";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeaderNavBar from "./HeaderNavBar";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: transparent;
  // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 999;
`;

const AnimatedOffcanvas = styled(Offcanvas)`
  background-color: white;
  margin-top: 4rem;
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  height: 96vh;

  @media (max-width: 390px) {
    margin-top: 2rem;
  }
`;

const OffcanvasBody = styled(Offcanvas.Body)`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 840px) {
    padding-left: 0rem;
  }
`;

const CanvasDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 95%;
  height: 70vh;

  @media (max-width: 840px) {
    padding: 0rem;
  }
`;
const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 95%;
  height: 3vh;
  text-align: right;
`;
const Text = styled.text`
  color: rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  cursor: default;

  @media (max-width: 390px) {
    color: rgba(0, 0, 0, 0);
    font-size: 0rem;
  }
`;
/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 390px) {
    height: 2rem;
  }

  .logo {
    font-weight: 600;
    letter-spacing: 2px;
    white-space: nowrap;
    cursor: pointer;
  }
  .menu {
    position: absolute;
    left: 0;
    margin-left: 30px;
  }
`;
const StyledHiX = styled(motion(HiX))`
  font-size: 2.25rem;
  cursor: pointer;
`;
const StyledHiMenu = styled(motion(HiMenu))`
  font-size: 2.25rem;
  cursor: pointer;
`;

const MenuButton = styled(motion.button)`
  width: 20%;
  font-size: 6rem;
  font-weight: 800;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  margin-bottom: 5vh;

  @media (max-width: 670px) {
    font-size: 2.875rem;
  }

  @media (max-width: 390px) {
    font-size: 2rem;
  }
`;

const MenuButtons = ({ children }) => {
  const navigate = useNavigate();

  const goToAbout = (go) => {
    console.log("이동");
    navigate(`/${go}`);
  };

  const buttonVariants = {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: {
      opacity: 1,
      x: 40,
      y: 0,
      transition: { type: "spring", duration: 1, bounce: 0.5 },
    },
    hover: {
      scale: 1.2,
      color: "blue",
      transition: { type: "spring", duration: 1, bounce: 0.5 },
    },
    tab: { scale: 0.9 },
  };

  return (
    <MenuButton
      onClick={() => goToAbout(children)}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      transition="transition"
      whileHover="hover"
      whileTap="tab"
    >
      {children}
    </MenuButton>
  );
};
const StyledLetter = styled(motion.span)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 600;
  color: blue;
`;

const canvasanimation = {
  initial: { opacity: 0, x: 0, y: 0 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", duration: 1, bounce: 0.5 },
  },
};

//햄버거 메뉴 냅둘지 말지 고민됨.

const Header = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const scrollRef = useRef([]);

  const goMain = () => {
    console.log("이동");
    navigate(`/`);
  };

  return (
    <>
      <HeaderBlock>
        {/* navBar에 scrollRef의 배열을 props로 넘겨줌 */}

        {/* <HeaderNavBar scrollRef={scrollRef} /> */}

        {/* 이동할 nav 컴포넌트에 ref로 넘겨줌
        <Home ref={scrollRef} />
        <About ref={scrollRef} />
        <Skills ref={scrollRef} />
        <Projects ref={scrollRef} />
        <ContactNav ref={scrollRef} /> */}
      </HeaderBlock>

      {/* <motion.div
        variants={canvasanimation}
        initial="initial"
        animate="animate"
      >
        <AnimatedOffcanvas show={show} onHide={handleClose} placement="top">
          <Offcanvas.Header />
          <OffcanvasBody>
            <CanvasDiv>
              <MenuButtons>ABOUT</MenuButtons>
              <MenuButtons>ARTWORK</MenuButtons>
              <MenuButtons>CONTACT</MenuButtons>
            </CanvasDiv>
          </OffcanvasBody>
        </AnimatedOffcanvas>
      </motion.div> */}
      {/* <DetailNav scroll></DetailNav> */}
    </>
  );
};

export default Header;
