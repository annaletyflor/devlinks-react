import React, { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";

import "./App.css";

import imgDarkMode from "../img/SUS.jpg";
import imgLightMode from "../img/SUS2.jpg";


const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem do Modo Claro" : "Imagem do Modo Escuro";

  return (
    <div id="container">
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
        @Flocky
      </Profile>
      <Switch></Switch>
    </div>
  );
};

export default App;
