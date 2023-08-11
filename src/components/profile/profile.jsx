import { Children } from "react";
import style from "./profile.module.css";

const Profile = ({ Children, imgSrc, imgAlt }) => {
  return (
    <div id={style.profile}>
      <img src={imgSrc} alt={imgAlt} />
      <p>{Children}</p>
    </div>
  );
};

export default Profile;
