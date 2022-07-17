import React from "react";
import {profilePhoto} from '../../assets/img/photoProfile.jpg';
import './ProfileHome.css';


const Profile = () => {
    return (
      <div className="Profile">
        <div className="Profile-left">
          <div className="Profile-image-wrapper">
            <img src={profilePhoto} alt="" />
          </div>
          <h2>Alondra Cordoba</h2>
          <h3>ICT Student</h3>
        </div>
        <div className="Profile-right">
          <p>
          I am a student in the career of Information and 
          Communication Technologies (ICT), I am currently 
          finishing TSU, then I would like to study engineering 
          corresponding to my career and if possible work in 
          this area, this in order to develop myself more in the 
          personal field.
          </p>
        </div>
      </div>
    );
  };
  
  export default Profile;