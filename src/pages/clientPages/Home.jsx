import React from "react";
import HomeNavbar from "../../Components/homePage/HomeNavbar";
import { NavLink } from "react-router-dom";
import "../../assets/css/homePage.css";
function Home() {
  return (
    <>
      <HomeNavbar />
      <div className="landing_container">
        <div className="l_heading">The dev's info</div>
        <div className="sub_title">
          Create your dev profile and show off your skills
        </div>
        <NavLink to="/signup" style={{ textDecoration: "none" }}>
          <span className="l_button">
            {/* <img src={google} className="login_google" height="20" /> */}
            <span style={{ fontWeight: "500" }}>New user? Sign up</span>
          </span>
        </NavLink>
        <div className="or">or</div>
        <NavLink to="/login" style={{ textDecoration: "none" }}>
          <div className="sign_email">login w/ email</div>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
