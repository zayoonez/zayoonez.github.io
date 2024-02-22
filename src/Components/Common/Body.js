import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "./header";
import SideBar from "./SideBar";
import { motion, AnimatePresence } from "framer-motion";
import ContactButton from "./ContactButton";
import HeaderNavBar from "./HeaderNavBar";

///일단 sideDiv 지웠음 !!!!!!
// 그거 만든 이유를 알아보자. 2.6

// const Spacer = styled.div`
//   height: 4rem;
// `;
/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */
const ScrollDiv = styled.div`
  overflow-y: auto;
`;
const PageBody = styled.div`
  display: flex;
  background-color: white;
`;

// const SideDiv = styled.div`
//   width: ${(props) => props.additionalWidth}px;
// `;

const RealBody = styled.div`
  width: ${(props) => props.mainWidth}px;
  // background-color: skyblue;
`;

const Spacer = styled.div`
  height: 4rem;

  @media (max-width: 390px) {
    height: 2rem;
  }
`;

const bodyChange = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  out: { opacity: 0 },
};

const headermotion = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 1 } },
  out: { opacity: 0, transition: { duration: 1 } },
};

const sidebarmotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  out: { opacity: 0, transition: { duration: 1 } },
};

const bodymotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.1, duration: 1 } },
  out: { opacity: 0, transition: { duration: 1 } },
};

const Body = function ({ children }) {
  const [additionalWidth, setAdditionalWidth] = useState(0);
  const [mainWidth, setMainWidth] = useState(0);
  const [mainHeight, setMainHeight] = useState(0);
  const [showing, setShowing] = useState(true);

  useEffect(() => {
    console.log("뭐하는굥?");

    // 화면 크기확인
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      console.log(screenWidth);
      if (screenWidth > 1180) {
        // 추가 너비를 설정
        setAdditionalWidth((screenWidth - 1180) / 2);
        setMainWidth(1180);
      } else {
        // 1184px 이하일 경우 추가 너비를 0으로 설정
        setAdditionalWidth(0);
        setMainWidth(screenWidth);
      }
      setMainHeight(screenHeight);
    };

    // 초기 로드와 화면 크기 변경 시에도 적용
    handleResize();
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 리스너 해제
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div
        variants={bodyChange}
        initial="initial"
        animate="animate"
        exit="out"
      >
        <motion.div
          variants={headermotion}
          initial="initial"
          animate="animate"
          exit="out"
        >
          {/* <Header /> */}
          {/* <HeaderNavBar /> */}
        </motion.div>
        <ScrollDiv>
          <Spacer />
          <PageBody>
            {/* <SideDiv additionalWidth={additionalWidth} /> */}
            <motion.div
              variants={bodymotion}
              initial="initial"
              animate="animate"
              exit="out"
            >
              <RealBody mainWidth={mainWidth}>{children}</RealBody>
            </motion.div>
            {/* <motion.div
                variants={sidebarmotion}
                initial="initial"
                animate="animate"
                exit="out"
            >
                <SideBar />
            </motion.div> */}
            {/* <SideDiv additionalWidth={additionalWidth} /> */}
            <ContactButton />
          </PageBody>
        </ScrollDiv>
      </motion.div>
    </>
  );
};

export default Body;
