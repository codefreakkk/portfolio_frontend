import React from "react";
import UserDescriptionCard from "./UserDescriptionCard";
import UserShowcaseSection from "./UserShowcaseSection";
import UserGithubChartSection from "./UserGithubChartSection";
import UserProjectSection from "./UserProjectSection";
import UserLinkSection from "./UserLinkSection";

function UserDashborad() {
  return (
    <>
      {/* <h5 className="mb-2">Dashboard</h5> */}
      <div className="user-dashboard-container">
        <UserDescriptionCard />
        <UserShowcaseSection />
        <UserGithubChartSection />
        <UserProjectSection />
        <UserLinkSection />
      </div>
    </>
  );
} 

export default UserDashborad;
