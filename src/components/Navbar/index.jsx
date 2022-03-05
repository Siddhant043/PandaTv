import React, { useState } from "react";
import {
  AvatarImageContainer,
  DropDownMenu,
  LogoContainer,
  LogoIcon,
  LogoutWrapper,
  NavbarContainer,
  SettingsWrapper,
  UserContainer,
} from "./styles";
import Logo from "../../assets/panda.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
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
    <NavbarContainer>
      <LogoContainer onClick={() => navigate("/home")}>
        <LogoIcon src={Logo} alt="Logo" />
        <span>Panda</span>
      </LogoContainer>
      <UserContainer onClick={() => handleDropdown()}>
        <AvatarImageContainer src={userData.imageUrl} alt={userData.name} />
      </UserContainer>
      {showDropdown && (
        <DropDownMenu>
          <SettingsWrapper onClick={() => navigate("/settings")}>
            Settings
          </SettingsWrapper>
          <LogoutWrapper onClick={() => handleLogout()}>Log out</LogoutWrapper>
        </DropDownMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
