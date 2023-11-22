import React, { useEffect, useState } from "react";
import UserDescriptionCard from "./UserDescriptionCard";
import UserShowcaseSection from "./UserShowcaseSection";
import UserGithubChartSection from "./UserGithubChartSection";
import UserProjectSection from "./UserProjectSection";
import UserLinkSection from "./UserLinkSection";
import {  getUser } from "../../api/UserApi";
import { getProject } from "../../api/projectApi";

function UserDashborad() {
  // user state
  const [userState, setUserState] = useState(false);
  const [user, setUser] = useState(null);

  // project state
  const [projectState, setProjectState] = useState(false);
  const [projects, setProject] = useState(null);

  // get user data
  useEffect(() => {
    (async () => {
      const result = await getUser();
      const data = result.data;
      if (data != null && data.success === true) {
        setUser(data.data);
        setUserState(true);
        // console.log(data.data);
      } else {
        // navigate to home later while fixing bug
        alert("Some error occured while fetching user data");
      }
    })();
  }, []);

  // get project data
  useEffect(() => {
    (async () => {
      const result = await getProject();
      const data = result.data;
      if (data != null && data.success === true) {
        setProject(data.data);
        setProjectState(true);
        // console.log(data.data);
      } else {
        // navigate to home later while fixing bug
        alert("Some error occured while fetching projects");
      }
    })();
  }, []);

  return (
    <>
      <div className="user-dashboard-container">
        {userState ? <UserDescriptionCard user={user} /> : <div>Loading</div>}
        <UserShowcaseSection />
        <UserGithubChartSection />
        {projectState ? (
          <UserProjectSection projects={projects} />
        ) : (
          <div>Loading</div>
        )}
        {userState ? (
          <UserLinkSection
            lc={user.leetcode}
            gfg={user.gfg}
            cf={user.codeforces}
            li={user.linkedin}
          />
        ) : (
          <div>Loading</div>
        )}
      </div>
    </>
  );
}

export default UserDashborad;
