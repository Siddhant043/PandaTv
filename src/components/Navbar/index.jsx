import React, { useState } from "react";
import {
  AvatarImageContainer,
  DropDownMenu,
  LogoContainer,
  LogoIcon,
  LogoutWrapper,
  NavbarContainer,
  NavOptions,
  SecondContainer,
  SettingsWrapper,
  StyledLink,
  UserContainer,
} from "./styles";
import Logo from "../../assets/panda.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { fetchUser } from "../../utils/fetchUser";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const userData = fetchUser();

  //handling dropdown
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  //handle Logout
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <NavbarContainer container xs={12}>
      <LogoContainer container item xs={6} onClick={() => navigate("/home")}>
        <LogoIcon src={Logo} alt="Logo" />
        <span>Panda</span>
      </LogoContainer>
      <SecondContainer container item xs={6}>
        <NavOptions container item xs={10}>
          <StyledLink to="/settings">
            Settings
          </StyledLink>
          <StyledLink to="/explore">
            Explore
          </StyledLink>
        </NavOptions>
      <UserContainer xs={2} onClick={() => handleDropdown()}>
        <AvatarImageContainer src={userData.imageUrl} alt={userData.name} />
      </UserContainer>
      </SecondContainer>
      
      {showDropdown && (
        <DropDownMenu>
          <LogoutWrapper onClick={() => handleLogout()}>Log out</LogoutWrapper>
        </DropDownMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
