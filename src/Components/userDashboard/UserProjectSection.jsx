import React from "react";
import UserProjectCard from "../userProjects/UserProjectCard";

function UserProjectSection({projects}) {
  return (
    <>
    {console.log(projects)}
      <div className="">
        <h6 className="mb-3">My Projects : </h6>
        <div className="row">
          {/* <UserProjectCard /> */}
          {projects.map((result, index) => {
            return <UserProjectCard
              key={index}
              projects={result}
            />
          })}
        </div>
      </div>
    </>
  );
}

export default UserProjectSection;
