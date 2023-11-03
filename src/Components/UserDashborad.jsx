import React from "react";
import UserWelcomeBackCard from "./UserWelcomeBackCard";
import UserDescriptionCard from "./UserDescriptionCard";
import UserShowcaseSection from "./UserShowcaseSection";
import UserGithubChartSection from "./UserGithubChartSection";
import UserProjectSection from "./UserProjectSection";

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
          <UserShowcaseSection />
          <UserGithubChartSection />
          <UserProjectSection/>
        </div>
      </div>
    </>
  );
}

export default UserDashborad;
