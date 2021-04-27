import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9vh;
  border-bottom: 1px solid #808080;
`;
export const Logo = styled.img`
  height: 7vh;
`;
export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 13vw;
`;
export const Image = styled.div`
  background-image: url("/backgrounds.png");
  background-position-x: -319px;
  background-position-y: -223px;
  background-size: 440px 411px;
  height: 62px;
  width: 62px;
`;
export const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-top: 2vh;
  color: #8e8e8e;
  :nth-child(2n) {
    font-weight: 600;
    color: #000;
  }
`;
export const Button = styled.button`
  width: 100%;
  color: #0095f6;
  margin-top: 2vh;
  padding: 8px;
  outline: unset;
  border: unset;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  font-weight: 600;
  :nth-child(2n) {
    font-weight: bold;
    background-color: #0095f6;
    color: white;
  }
`;
