import React from "react";
import UserProjectSearchBar from "./UserProjectSearchBar";
import UserProjectCard from "./UserProjectCard";

function UserProjectSearchSection() {
  return (
    <>
      <div className="user-project-container">
        <h5 className="mb-4">Projects</h5>
        <UserProjectSearchBar />
        <div className="row">
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
          <UserProjectCard />
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

export default UserProjectSearchSection;
