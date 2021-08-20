import React from "react";
import { Description, Input, InputWrapper, Title, Wrapper } from "./style";

function App() {
  return (
    <Wrapper>
      <Description>Already have an account</Description>
      <Title>Login in Here</Title>
      <InputWrapper>
        <Input placeholder="Usernama" />
      </InputWrapper>
      <InputWrapper>
        <Input placeholder="Password" />
      </InputWrapper>
    </Wrapper>
  );
}

export default App;
