import React from "react";
import Navbar from "../../components/Navbar";
import Videos from "./Videos";
import { ComponentsContainer } from "./styles";


const HomePage = () => {
  return (
    <>
      <Navbar />
      <ComponentsContainer>
        <Videos />
      </ComponentsContainer>
    </>
  );
};

export default HomePage;
