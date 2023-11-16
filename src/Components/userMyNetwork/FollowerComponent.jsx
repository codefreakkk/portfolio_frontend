import React from "react";
import PeersComponentSearchBar from "./PeersComponentSearchBar";
import UserSearchCard from "../userSearch/UserSearchCard";
import user from "../../assets/images/users/avatar-1.jpg";
import UserMyNetworkMessage from "./UserMyNetworkMessage";

function FollowerComponent() {
  return (
    <>
      <div>
        <UserMyNetworkMessage title={"You dont't have any followers yet"} />
      </div>
      {/* <div className="">
        <PeersComponentSearchBar />

        <div className="row user-search-container">
          <UserSearchCard
            user={user}
            name={"Prit Patil"}
            description={
              "This is some demo description test demo description React JS and node js"
            }
          />
          <UserSearchCard
            user={user}
            name={"Prit Patil"}
            description={
              "This is some demo description test demo description React JS and node js"
            }
          />
          <UserSearchCard
            user={user}
            name={"Prit Patil"}
            description={
              "This is some demo description test demo description React JS and node js"
            }
          />
        </div>
      </div> */}
    </>
  );
}

export default FollowerComponent;
