import styled from "styled-components";

interface IText {
  mgBottom?: string;
  color?: string;
}

interface ILink {
  size: string;
  mgBottom?: string;
  color?: string;
}

interface IButton {
  validate: boolean;
}

export const Main = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5vh 0 0 0;
`;

const Input = `
    width: 75%;
    outline: unset;
    padding: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 2px;
    color: rgb(38, 38, 38);
`;

export const InputEmail = styled.input.attrs({ type: "email" })`
  ${Input}
  margin-bottom: 1vh;
  margin-top: 5vh;
`;

export const InputPassword = styled.input.attrs({ type: "password" })`
  ${Input}
  margin-bottom: 3vh;
`;

export const Button = styled.button<IButton>`
  padding: 8px;
  outline: unset;
  border: unset;
  border-radius: 4px;
  font-weight: bold;
  width: 75%;
  margin-bottom: 3vh;
  background-color: #0095f6;
  color: white;
  transition: opacity 0.3s ease-in-out;
  opacity: ${(p) => (p.validate ? "1" : "0.4")};
`;

export const ContainerBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin-bottom: 4vh;
`;

export const Bar = styled.div`
  height: 1px;
  width: 40%;
  background-color: #dbdbdb;
`;

export const Text = styled.p<IText>`
  color: rgb(38, 38, 38);
  margin-bottom: ${(p) => (p.mgBottom ? p.mgBottom : 0)};
  font-size: 14px;
  color: ${(p) => (p.color ? p.color : "#000")};
`;

export const FacebookIcon = styled.span`
  background-image: url("/backgrounds.png");
  background-position-x: -347px;
  background-position-y: -329px;
  background-size: 440px 411px;
  height: 16px;
  width: 16px;
  position: relative;
  top: 2px;
  margin-right: 8px;
`;

export const Link = styled.a<ILink>`
  margin-bottom: ${(p) => (p.mgBottom ? p.mgBottom : 0)};
  font-size: ${(p) => (p.size === "small" ? "12px" : "14px")};
  color: ${(p) => (p.color ? p.color : "#8e8e8e")};
  font-weight: ${(p) => (p.color ? "600" : "400")};
`;

export const LinkFacebook = styled(Link)`
  display: flex;
`;

export const ContainerStore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 10vh;
`;

export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0 4vw 0 4vw;
  background-color: #fafafa;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 5vh;
  padding-bottom: 15vh;
`;
