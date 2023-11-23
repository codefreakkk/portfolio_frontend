import React, { useEffect, useState } from "react";
import { getUserName } from "../../api/UserApi";
import { useNavigate, useParams } from "react-router-dom";

// css
import "./assets/style.css";

import UserDescriptionCard from "./components/UserDescriptionCard";
import UserGithubChartSection from "./components/UserGithubChartSection";
import UserProjectSection from "./components/UserProjectSection";
import UserLinkSection from "./components/UseLinkSection";

function MainTheme_theme1() {
  const [userState, setUserState] = useState(false);
  const [user, setUser] = useState(null);
  const { uname } = useParams();
  const navigate = useNavigate();

  // get user data
  useEffect(() => {
    (async () => {
      const result = await getUserName(uname);
      const data = result.data;
      if (data != null && data.success === true) {
        setUser(data.data);
        setUserState(true);
        console.log(data.data);
      } else {
        navigate("/");
      }
    })();
  }, []);

  return (
    <>
      {userState ? <div className="user-dashboard-container container mt-5">
        <UserDescriptionCard user={user} />
        <UserGithubChartSection />
        <UserProjectSection uid={user._id} />
        <UserLinkSection
          lc={user.leetcode}
          gfg={user.gfg}
          cf={user.codeforces}
          li={user.linkedin}
        />
      </div> : <div className="loading_container theme-flex mt-5">Loading</div>}
    </>
  );
}

export default MainTheme_theme1;
