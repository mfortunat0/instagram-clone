import styled, { keyframes } from "styled-components";

interface IModal {
  show: boolean;
}

const fadeIn = keyframes`
from { opacity: 0; }
  to { opacity: 1; }
`;

export const Main = styled.div<IModal>`
  position: fixed;
  display: ${(p) => (p.show ? "flex" : "none")};
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  justify-content: center;
  align-items: center;
  padding: 0 10vw 0vh 10vw;
  z-index: 2;
  animation: ${fadeIn} 0.3s;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 5vh 0 2vh 0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #8e8e8e;
  text-align: center;
  padding: 0 4vw;
  margin-bottom: 3vh;
`;

export const Button = styled.button`
  outline: unset;
  border: unset;
  background-color: transparent;
  border-top: 1px solid #dbdbdb;
  padding: 3vh 0 1vh 0;
  width: 100%;
  color: #0095f6;
  font-weight: bold;
  :nth-child(2n) {
    color: #262626;
    font-weight: 400;
  }
`;
