import React from "react";
import UserSearchCard from "./UserSearchCard";
import UserSearchBar from "./UserSearchBar";

function UserSearchSection() {
  return (
    <>
      <div className="">
        <UserSearchBar />

        <div className="row middle">
          <UserSearchCard
            name={"Harsh Said"}
            description={"This is some demo description"}
          />
          <UserSearchCard
            name={"Harsh Said"}
            description={"This is some demo description"}
          />
          <UserSearchCard
            name={"Harsh Said"}
            description={"This is some demo description"}
          />
          <UserSearchCard
            name={"Harsh Said"}
            description={"This is some demo description"}
          />
        </div>
      </div>
    </>
  );
}

export default UserSearchSection;
