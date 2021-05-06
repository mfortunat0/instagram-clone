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
  margin-top: 10vh;
  padding: 0 0 2vh 6vw;
  border-bottom: 1px solid rgb(219, 219, 219, 0.9);
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

export const StatusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatusProfile = styled.div`
  margin-top: 3px;
  text-align: center;
`;

export const StatusName = styled.p`
  font-size: 12px;
  margin-top: 3px;
`;

export const PlusButton = styled.img`
  position: relative;
  top: -38px;
  left: 20px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid white;
`;
