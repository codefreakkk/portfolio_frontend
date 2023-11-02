import React from "react";
import DashboardTitle from "./DashboardTitle";
import UserWelcomeBackCard from "./UserWelcomeBackCard";
import UserDescriptionCard from "./UserDescriptionCard";
import UserMyProjectSection from "./UserMyProjectSection";

function UserDashborad() {
  return (
    <>
      <div className="main">

        {/* Left side */}
        <div className="left-side">
          <UserWelcomeBackCard />
        </div>

        {/* Right side */}
        <div className="right-side">
          <UserDescriptionCard />
          <UserMyProjectSection/>
        </div>
      </div>
    </>
  );
}

export default UserDashborad;
