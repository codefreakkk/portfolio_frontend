import React from "react";
import UserDescriptionCard from "../../Components/UserDescriptionCard";
import UserShowcaseSection from "../../Components/UserShowcaseSection";
import UserGithubChartSection from "../../Components/UserGithubChartSection";
import UserProjectSection from "../../Components/UserProjectSection";
import UserLinkSection from "../../Components/UserLinkSection";

function UserPage() {
  return (
    <>
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

export default UserPage;
