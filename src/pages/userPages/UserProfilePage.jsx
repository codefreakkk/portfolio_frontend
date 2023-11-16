import React from "react";
import UserDescriptionCard from "../../Components/userDashboard/UserDescriptionCard";
import UserShowcaseSection from "../../Components/userDashboard/UserShowcaseSection";
import UserGithubChartSection from "../../Components/userDashboard/UserGithubChartSection";
import UserProjectSection from "../../Components/userDashboard/UserProjectSection";
import UserLinkSection from "../../Components/userDashboard/UserLinkSection";
import UserPageHeader from "../../Components/userProfilePage/UserPageHeader";
import back from "../../assets/icons/back.png";

function UserPage() {
  return (
    <>
      <UserPageHeader
        back={back}
        title={"User Profile"}
      />
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
