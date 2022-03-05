import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const VideoPlayer = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DarkBackground = styled.div`
  background-color: #000;
  opacity: 0.7;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
`;

export const ButtonContainer = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoogleIconContainer = styled.img`
  height: 30px;
  margin-right: 20px;
`;

export const LogoContainer = styled.img`
  height: 100px;
  margin-bottom: 10px;
`;
