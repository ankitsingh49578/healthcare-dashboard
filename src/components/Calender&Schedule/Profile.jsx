import React from "react";
import "./Profile.css";
import { CgProfile } from "react-icons/cg";
import { FaPlusSquare } from "react-icons/fa";

function Profile() {
  return (
    <div className="profile">
      <CgProfile size={30} className="icon"/>
      <FaPlusSquare size={30}  className="icon"/>
    </div>
  );
}

export default Profile;
