import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: auto;
  padding: 2px 10px;
  height: 25px;
  background-color: white;
  border-radius: 50px;
  border: 1px solid black;
  margin: 0px 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const SkillBox = (props) => {
  return <Box>{props.skill}</Box>;
};
export default SkillBox;
