import React from "react";
import UserDescriptionCard from "./UserDescriptionCard";
import UserShowcaseSection from "./UserShowcaseSection";
import UserGithubChartSection from "./UserGithubChartSection";
import UserProjectSection from "./UserProjectSection";
import UserLinkSection from "./UserLinkSection";


function UserDashborad() {
  return (
    <>
      <UserDescriptionCard />
      <UserShowcaseSection />
      <UserGithubChartSection />
      <UserProjectSection />
      <UserLinkSection />
    </>
  );
}

export default UserDashborad;
