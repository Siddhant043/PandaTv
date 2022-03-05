import React from "react";
import {
  LoginContainer,
  VideoPlayer,
  DarkBackground,
  ButtonContainer,
  GoogleIconContainer,
  LogoContainer,
} from "./styles";
import LoginVideo from "../../assets/video.mp4";
import Button from "../../components/Button";
import GoogleIcon from "../../assets/googleIcon.svg";
import GoogleLogin from "react-google-login";
import PandaLogo from "../../assets/panda.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response?.profileObj));
    const { name, googleId, imageUrl } = response?.profileObj;
    const doc = {
      _id: googleId,
      _type: "user",
      name,
      imageUrl,
    };

    dispatch(login(doc));
    navigate("/home", { replace: true });
  };
  return (
    <LoginContainer>
      <VideoPlayer
        src={LoginVideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
      />
      <DarkBackground />
      <ButtonContainer>
        <LogoContainer src={PandaLogo} alt="Logo" />
        <GoogleLogin
          clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
          render={(renderProps) => (
            <Button
              handleClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <GoogleIconContainer src={GoogleIcon} alt="Google Icon" />
              Login with Google
            </Button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Login;
