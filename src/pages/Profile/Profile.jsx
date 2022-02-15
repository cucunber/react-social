import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://www.forumdaily.com/wp-content/uploads/2021/04/shutterstock_1272261553.jpg"></img>
      <div>Ava+description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
