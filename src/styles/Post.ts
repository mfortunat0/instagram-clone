import styled from "styled-components";

export const ImageRounded = styled.img`
  border-radius: 50%;
  margin-bottom: auto;
`;

export const LinkProfile = styled.a`
  font-weight: 600;
  font-size: 14px;
  color: #262626;
  margin-right: auto;
  color: #262626;
`;

export const TopContainer = styled.section`
  display: flex;
  padding: 6px 4.5vw 12px 5vw;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(219, 219, 219, 0.9);
  & ${LinkProfile} {
    margin-left: 15px;
  }
`;

export const ButtonContainer = styled.section`
  display: flex;
  padding: 8px 4.5vw 0 5vw;
  align-items: center;
  gap: 5vw;
`;

export const IconButton = styled.button`
  border: unset;
  background-color: transparent;
  outline: none;
  :last-child {
    margin-left: auto;
  }
`;

export const LikeContainer = styled.section`
  display: flex;
  padding: 8px 6vw 0 5vw;
  align-items: center;
  & ${ImageRounded} {
    margin-right: 4px;
  }
  & p {
    color: #262626;
    :first-child {
      display: flex;
      flex-wrap: wrap;
    }
  }
  & ${LinkProfile} {
    margin-left: 4px;
    margin-right: 4px;
    :last-child {
      margin-left: 0;
    }
  }
`;

export const DescribeContainer = styled.section`
  padding: 8px 6vw 0 5vw;
  align-items: center;
  & p {
    color: #262626;
    :last-child {
      font-size: 10px;
      color: #8e8e8e;
      text-transform: uppercase;
      margin-top: 2vh;
    }
  }
  & ${LinkProfile} {
    margin-right: 4px;
  }
`;
