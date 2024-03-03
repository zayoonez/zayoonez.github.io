import styled from "styled-components";
import React from "react";
import Body from "Components/Common/Body";

const Container = styled.section`
  height: 100vh;
  background-color: white;
`;
const { forwardRef } = require("react");

const Contact = forwardRef((props, ref) => {
  return (
    <Container ref={(contactRef) => (ref.current[4] = contactRef)}>
      {/* ㅎㅇ ㅋㅋ */}
      <Body></Body>
    </Container>
  );
});
export default Contact;
