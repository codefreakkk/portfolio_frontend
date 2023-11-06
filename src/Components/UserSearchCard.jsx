import React from "react";
import { NavLink } from "react-router-dom";

function UserSearchCard({ user, name, description }) {
  return (
    <>
      <div class="col-xl-4 col-sm-6">
        <div class="card shadow-none border">
          <div class="card-body p-3">
            <div class="">
              <div class="float-end ms-2">
                <div class="dropdown mb-2">
                  <div class="font-size-12 text-muted follow-button">
                    {/* follow button */}
                    <div className="follow">Follow</div>
                  </div>
                </div>
              </div>
              <div class="avatar-xs me-3 mb-3">
                <div class="avatar-title bg-transparent rounded">
                  {/* user image */}
                  <img src={user} alt="" height="35" className="user-image" />
                </div>
              </div>
              <div class="d-flex">
                <div class="overflow-hidden me-auto">
                  <h5 class="font-size-14 text-truncate mb-1">
                    <NavLink to="/dashboard/user/12">
                      <a class="text-body">
                        {name}
                      </a>
                    </NavLink>
                  </h5>
                  <p class="text-muted text-truncate mb-0">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSearchCard;
