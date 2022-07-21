import React from "react";
import "./MyProfile.css";

const Profile = () => {
  return (
    <div className="center-a">
      <div className="perfil">
        <img
          className="foto-perfil"
          src="../../assets/img/photoProfile.jpg"
          width={130}
          height={130}
        />
        <br />
        <div className="Profile">
          <div className="Profile-left">
            <div className="Profile-image-wrapper"></div>
            <strong>
              <h4>Wendy Alondra Cordoba Esparza</h4>
              DWI
              <br />
              IDGS 9°A
              <br />
              191286
              <br />
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
