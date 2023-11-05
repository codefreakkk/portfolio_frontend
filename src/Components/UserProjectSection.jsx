import React from "react";
import UserProjectCard from "./UserProjectCard";

function UserProjectSection() {
  return (
    <>
      <div className="">
        <h6 className="mb-3">My Projects : </h6>
        <div className="row">
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
        </div>
      </div>
    </>
  );
}

export default UserProjectSection;
