import React from "react";
import back from "../../assets/icons/back.png";
import { useNavigate } from "react-router-dom";
function StuffHeader({ title }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex stuff-header-container mb-3">
        <div
          className="mr-10 pointer"
          onClick={() => {
            navigate("/dashboard/home");
          }}
        >
          <img src={back} height="20" alt="" />
        </div>
        <div className="mt-2">
          <h5>{title}</h5>
        </div>
      </div>
    </>
  );
}

export default StuffHeader;
