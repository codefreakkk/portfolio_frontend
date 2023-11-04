import React from "react";
import Header from "../../Components/Header";
import Panel from "../../Components/Panel";
import UserDashboard from "../../Components/UserDashborad";
import UserFooter from "../../Components/UserFooter";
import UserWelcomeBackCard from "../../Components/UserWelcomeBackCard";
import { Route, Switch, BrowserRouter, Routes } from "react-router-dom";
import UserThemeSection from "../../Components/UserThemeSection";
import UserSearchSection from "../../Components/UserSearchSection";

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
          <Routes>
            <Route path="/home" element={<UserDashboard />} />
            <Route path="/themes" element={<UserThemeSection />} />
            <Route path="/search" element={<UserSearchSection/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default UserHome;
