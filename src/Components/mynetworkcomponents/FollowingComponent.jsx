import React from "react";
import PeersComponentSearchBar from "./PeersComponentSearchBar";
import UserSearchCard from "../UserSearchCard";
import user from "../../assets/images/users/avatar-1.jpg";
import UserMyNetworkMessage from "./UserMyNetworkMessage";

function FollowingComponent() {
  return (
    <>
      <div>
        <UserMyNetworkMessage title={"You can follow people and make them Peers"}/>
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

export default FollowingComponent;
