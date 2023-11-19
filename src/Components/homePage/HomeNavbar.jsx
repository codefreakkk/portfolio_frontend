import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import dev from "../../assets/homePageAssets/hexagon.png";

function HomeNavbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="landing_navbar">
        <div className="logo dev">
          <span>
            <img src={dev} height="40" style={{ marginRight: "5px" }} />
          </span>
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
            Dev's
          </NavLink>
        </div>
        <div className="l_body">
          {localStorage.getItem("token") === null ? (
            <>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <span className="mr font-13">login</span>
              </NavLink>
              <NavLink to="/signup" style={{ textDecoration: "none" }}>
                <span className="font-13">signup</span>
              </NavLink>
            </>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Logout
            </button>
          )}

          {/* <span className="font-13" onClick={handleLogout}>Logout</span> */}
        </div>
      </div>
    </>
  );
}

export default HomeNavbar;
