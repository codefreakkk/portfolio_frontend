import React, { useEffect, useState } from "react";
import UserDescriptionCard from "./UserDescriptionCard";
import UserShowcaseSection from "./UserShowcaseSection";
import UserGithubChartSection from "./UserGithubChartSection";
import UserProjectSection from "./UserProjectSection";
import UserLinkSection from "./UserLinkSection";
import { getUser } from "../../api/UserApi";

function UserDashborad() {
  // user state
  const [userState, setUserState] = useState(false);
  const [user, setUser] = useState(null);

  // get user data
  useEffect(() => {
    (async () => {
      const result = await getUser();
      const data = result.data;
      if (data != null && data.success === true) {
        setUser(data.data);
        setUserState(true);
      } else {
        // navigate to home later while fixing bug
        alert("Some error occured while fetching user data");
      }
    })();
  }, []);

  return (
    <>
      <div className="user-dashboard-container">
        {userState ? <UserDescriptionCard user={user} /> : <div>Loading</div>}
        <UserShowcaseSection />
        <UserGithubChartSection />
        <UserProjectSection />

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
