import React from "react";
import Header from "../../Components/Header";
import Panel from "../../Components/Panel";
import UserDashboard from "../../Components/UserDashborad";
import UserFooter from "../../Components/UserFooter";
import UserWelcomeBackCard from "../../Components/UserWelcomeBackCard";
import { Route, Switch, BrowserRouter, Routes } from "react-router-dom";
import UserThemeSection from "../../Components/UserThemeSection";
import UserSearchSection from "../../Components/UserSearchSection";
import UserProjectSearchSection from "../../Components/UserProjectSearchSection";
import UserMyNetworkSection from "../../Components/UserMyNetworkSection";
import AddProjectComponent from "../../Components/addstuffs/AddProjectComponent";
import AddGithubComponent from "../../Components/addstuffs/AddGithubComponent";
import AddPersonalDetails from "../../Components/addstuffs/AddPersonalDetails";

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
            <Route path="/search" element={<UserSearchSection />} />
            <Route path="/projects" element={<UserProjectSearchSection />} />
            <Route path="/mynetwork/*" element={<UserMyNetworkSection />} />
            <Route path="/addprojects" element={<AddProjectComponent />} />
            <Route path="/connectgithub" element={<AddGithubComponent />} />
            <Route path="/addpersonaldetails" element={<AddPersonalDetails/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default UserHome;
