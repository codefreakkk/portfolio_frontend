import React, { useState, useEffect } from "react";
import UserDescriptionCard from "../../Components/UserProfilePageComponents/UserDescriptionCard";
import UserShowcaseSection from "../../Components/UserProfilePageComponents/UserShowcaseSection";
import UserGithubChartSection from "../../Components/UserProfilePageComponents/UserGithubChartSection";
import UserProjectSection from "../../Components/UserProfilePageComponents/UserProjectSection";
import UserLinkSection from "../../Components/UserProfilePageComponents/UserLinkSection";
import UserPageHeader from "../../Components/userProfilePage/UserPageHeader";
import back from "../../assets/icons/back.png";
import { useParams } from "react-router-dom";
import { getUser } from "../../api/UserApi";

function UserPage() {
  const { id } = useParams();
  const [userState, setUserState] = useState(false);
  const [user, setUser] = useState(null);

  // alert(uid)
  useEffect(() => {
    (async () => {
      const result = await getUser(id);
      const data = result.data;
      if (data != null && data.success === true) {
        setUser(data.data);
        setUserState(true);
        console.log(data.data);
      } else {
        // navigate to home later while fixing bug
        console.log(result);
        alert("Some error occured while fetching user data");
      }
    })();
  }, []);

  return (
    <>
      <UserPageHeader back={back} title={"User Profile"} />
      <div className="user-dashboard-container">
        {userState ? <UserDescriptionCard user={user} /> : "loading"}
        {/* <UserShowcaseSection /> */}
        <UserGithubChartSection />
        <UserProjectSection uid={id} />
        {userState ? <UserLinkSection 
           lc={user.leetcode}
           gfg={user.gfg}
           cf={user.codeforces}
           li={user.linkedin}
        /> : "Loading"}
      </div>
    </>
  );
}

export default UserPage;
