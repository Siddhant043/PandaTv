import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled(Grid)`
  justify-content: space-between;
  padding: 20px 30px;
  position: relative;
`;

export const LogoContainer = styled(Grid)`
  cursor: pointer;
  > span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const LogoIcon = styled.img`
  height: 30px;
`;

export const UserContainer = styled(Grid)`
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


export const SecondContainer = styled(Grid)`

`;

export const NavOptions = styled(Grid)`
  justify-content: space-evenly;
  padding-top: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: #000;
  &::after{
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #215bfc;
    transition: width .3s;
  }
  &:hover::after {
    width: 100%;
    //transition: width .3s;
  }
`;