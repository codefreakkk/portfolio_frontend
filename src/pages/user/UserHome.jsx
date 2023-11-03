import React from "react";
import Header from "../../Components/Header";
import Panel from "../../Components/Panel";
import UserDashboard from "../../Components/UserDashborad";
import UserFooter from "../../Components/UserFooter";
import UserWelcomeBackCard from "../../Components/UserWelcomeBackCard";
import { Route, Switch, BrowserRouter, Routes } from "react-router-dom";

function UserHome() {
  return (
    <>
      <Header />
      <Panel />
      <div className="main pd-top-15">
        {/* Left side */}
        <div className="left-side ">
          <UserWelcomeBackCard />
          <UserFooter />
        </div>

        {/* Right side */}
        <div className="right-side">
          {/* <UserDashboard/> */}
          <Routes>
            <Route path="/home" element={<UserDashboard/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default UserHome;
