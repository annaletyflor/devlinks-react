
import Profile from "../components/profile/profile";
import "./App.css"

import imgDarkMode from "../img/SUS.jpg";
import imgLightMode from "../img/SUS2.jpg";
import React, { useState } from "react";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode
  const imgAlt = isLightMode ? "Imagem do Modo Claro" : "Imagem do Modo Escuro"

  return (
    <div>
      <Profile 
      imgSrc={imgSrc} 
      imgAlt={imgAlt}
      >@Flocky
      </Profile>
    </div>
  );
};

export default App;
