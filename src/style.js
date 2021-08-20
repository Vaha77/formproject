import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a393e;
  width: 100%;
  height: 100vh;
  color: wheat;
`;

export const Wrapper = styled.div`
  width: 360px;
  height: 380px;
  border: 2px solid #445859;
  margin: 10px;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Description = styled.div`
  color: white;
  font-weight: 600;
  font-size: 22px;
  margin-top: 20px;
`;

export const Title = styled.div`
  color: #e7c961;
  font-size: 28px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background-color: rgba(104, 105, 102, 0.1);
  border: 1px solid #354545;
  margin-top: 20px;
  outline: none;
  color: white;
  ::placeholder {
    padding-left: 15px;
  }
  padding-left: 15px;
  font-size: 22px;
`;
