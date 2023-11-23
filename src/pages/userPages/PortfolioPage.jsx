import React, { useState, useEffect } from "react";
import MainTheme_theme1 from "../../themes/theme1/MainTheme_theme1";
import { useNavigate, useParams } from "react-router-dom";
import { getUserName } from "../../api/UserApi";

function PortfolioPage() {
  const { uname } = useParams();
  const navigate = useNavigate();

  const [userTheme, setUserTheme] = useState(1);
  const [userState, setUserState] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await getUserName(uname);
      const data = result.data;
      if (data != null && data.success) {
        setUserTheme(data.data.u_theme);
        setUserState(true);
        console.log(data.data);
      } else {
        alert("User not found");
        navigate("/");
      }
    })();
  }, []);

  if (userTheme == 1 && userState == true) {
    return <MainTheme_theme1 />;
  } else {
    navigate("/");
  }
}

export default PortfolioPage;
