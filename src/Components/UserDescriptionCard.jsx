import React from "react";
import SkillSetComponent from "./UserSkillSetComponent";
import profile from "../assets/images/profile.jpeg";

function UserDescriptionCard() {
  return (
    <div class="card">
      <div>
        <div class="row">
          <div class="col-lg-9 col-sm-8">
            <div class="p-4">
              <h3 class="text-primary">Harsh Said</h3>
              <p>
                Software Engineer@GSLab | Full Stack Web Developer | MERN Stack
                | React | NodeJS
              </p>

              <div class="skill-set-container">
                <SkillSetComponent title={"Backend Developer"} />
                <SkillSetComponent title={"Node Js"} />
                <SkillSetComponent title={"Spring Boot"} />
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
                Pune, India
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
