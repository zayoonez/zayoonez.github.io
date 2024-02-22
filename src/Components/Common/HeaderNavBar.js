import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  top: 50px;
  left: auto;
  right: 20px;
`;

const HeaderBlock = styled.nav`
  /* right: 0px; */
  /* margin-right: 20px; */
  width: 100%;
  background-color: transparent;
  // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 999;
`;

const NavButton = styled.button`
  margin: 0 2px 0 2px;
  padding-bottom: 7px;
  border: none;
  font-size: 25px;
  font-family: "Helvetica Neue";
  font-weight: 400;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  background-image: linear-gradient(to right, black, black);
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0.3s; /* 트랜지션 속성 추가 */

  &:hover {
    /* font-weight: bold; */
    /* border-bottom: 4px solid black; */
    background-size: 100% 5px; /* 호버 시 보더 길이 변경 */
    background-position: 0 100%;
  }
  &:not(:hover) {
    background-size: 0% 5px; /* 호버 해제 시 보더 길이를 0으로 조정 */
    background-position: 0 100%;
  }
  &.active {
    /* border-color: black; */
    /* color: black; */
    /* border-bottom: 4px solid black; */
    font-weight: bold;
    background-size: 100% 5px;
    /* border-radius: 20px; */
    background-position: 0 100%;
  }
`;
const NAV_ELEMENT = [
  { idx: 0, name: "HOME" }, //introduce Myself , Stack
  { idx: 1, name: "ABOUT" }, //학력, certificate, 어학
  { idx: 2, name: "SKILLS" }, //학력, certificate, 어학
  { idx: 3, name: "PROJECTS" },
  { idx: 4, name: "CONTACT" },
];

const HeaderNavBar = ({ scrollRef }) => {
  const [index, setIndex] = useState(null);
  const navRef = useRef([]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current[index]?.scrollIntoView({ behavior: "smooth" });
      setIndex(null);
    }
  }, [scrollRef, index]);
  useEffect(() => {
    const changeStyle = () => {
      scrollRef.current.forEach((ref, idx) => {
        if (ref.offsetTop - 180 < window.scrollY) {
          navRef.current.forEach((ref) => {
            ref.className = ref.className.replace(" active", "");
          });
          navRef.current[idx].className += " active";
        }
      });
    };
    window.addEventListener("scroll", changeStyle);

    return () => {
      window.removeEventListener("scroll", changeStyle);
    };
  }, [scrollRef]);

  return (
    <HeaderContainer>
      <HeaderBlock>
        {/* <nav> */}
        {NAV_ELEMENT.map(({ idx, name }) => (
          <NavButton
            key={idx}
            ref={(ref) => (navRef.current[idx] = ref)}
            onClick={() => {
              setIndex(idx);
            }}
          >
            {name}
          </NavButton>
        ))}
        {/* </nav> */}
      </HeaderBlock>
    </HeaderContainer>
  );
};

export default HeaderNavBar;
