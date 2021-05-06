import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1.5vh 5vw;
  position: fixed;
  width: 100%;
  border-bottom: 1px solid rgb(219, 219, 219, 0.9);
  top: 0;
`;

export const Status = styled.section`
  display: flex;
  overflow-x: auto;
  margin-top: 11vh;
  padding-left: 6vw;
  align-items: center;
  gap: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StatusBorder = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  padding: 2px;
`;

export const ImageRounded = styled.img`
  border-radius: 50%;
`;
