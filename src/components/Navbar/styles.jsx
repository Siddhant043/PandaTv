import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const LogoIcon = styled.img`
  height: 30px;
`;

export const UserContainer = styled.div`
  cursor: pointer;
`;

export const AvatarImageContainer = styled.img`
  height: 40px;
  border-radius: 100px;
`;

export const DropDownMenu = styled.div`
  height: 100px;
  width: 100px;
  background-color: #090c13;
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 70px;
  right: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const SettingsWrapper = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
`;

export const LogoutWrapper = styled.span`
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  color: red;
`;
