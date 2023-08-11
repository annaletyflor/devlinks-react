import style from "./profile.module.css";

const Profile = ({ children, imgSrc, imgAlt }) => {
  return (
    <div id={style.profile}>
      <img src={imgSrc} alt={imgAlt} />
      <p>{children}</p>
    </div>
  );
};

export default Profile;
