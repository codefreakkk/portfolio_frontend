import React from "react";
import UserLinkCard from "./UserLinkCard";
import leetcode from "../../assets/icons/leetcode.png"
import codeforces from "../../assets/icons/codeforces.png"
import gfg from "../../assets/icons/gfg.png"
import linkedin from "../../assets/icons/linkedin.png"

function UserLinkSection() {
  return (
    <>
      <div>
        <h6 className="mb-3">Links : </h6>
        <div className="flex">
          <UserLinkCard image={leetcode} title={"Leetcode"} description={"Solved 500+ problems"}/>
          <UserLinkCard image={codeforces} title={"Codeforces"} description={"Solved 500+ problems"}/>
          <UserLinkCard image={gfg} title={"Geeks for Geeks"} description={"Solved 500+ problems"}/>
          <UserLinkCard image={linkedin} title={"LinkedIn"} description={"Visit my Linked In"}/>
        </div>
      </div>
    </>
  );
}

export default UserLinkSection;
