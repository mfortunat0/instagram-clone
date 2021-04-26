import styled, { keyframes } from "styled-components";

interface IContainer {
  show: boolean;
}

const fadeIn = keyframes`
from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div<IContainer>`
  position: fixed;
  height: 100vh;
  display: ${(p) => (p.show ? "flex" : "none")};
  align-items: flex-end;
  animation: ${fadeIn} 0.3s;
`;

export const Text = styled.p`
  padding: 13px;
  background-color: #262626;
  color: #fff;
  font-size: 14px;
`;
