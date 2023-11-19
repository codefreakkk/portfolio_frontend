import React from "react";
import SkillSetComponent from "./UserSkillSetComponent";
import profile from "../../assets/images/profile.jpeg";

function UserDescriptionCard({ user }) {
  return (
    <div class="mb-4 input-border">
      <div>
        <div class="row">
          <div class="col-lg-9 col-sm-8">
            <div class="p-4">
              <h3 class="text-primary">{user.full_name}</h3>
              <p>{user.u_description}</p>

              <div class="skill-set-container">
                {user.skills.map((res) => {
                  return <SkillSetComponent title={res} />;
                })}
              </div>
            </div>

            <div className="description-bottom-container">
              <div className="description-bottom">
                <span>
                  <i
                    class="dripicons-location me-1"
                    style={{ fontSize: "15px" }}
                  ></i>
                </span>
                {user.u_city}, {user.u_country}
              </div>
              <div className="description-bottom">
                <span>
                  <i
                    class="bx bx-user-plus me-2"
                    style={{ fontSize: "20px" }}
                  ></i>
                </span>
                <span className="me-1">10 </span> Followers
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-4 align-self-center">
            <img src={profile} alt="" className="profile-container" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDescriptionCard;
