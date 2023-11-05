import React from "react";
import UserMyNetworkMessage from "./mynetworkcomponents/UserMyNetworkMessage";
import { NavLink, Route } from "react-router-dom";

function UserMyNetworkSection() {
  return (
    <>
      <div class="row">
        <div class="col-lg-12">
          <div class="card mynetwork-container">
            <div class="card-body">
              <h4 class="card-title mb-4">Activities</h4>

              <ul class="nav nav-tabs nav-tabs-custom">
                <NavLink
                  to="peers"
                >
                  <li class="nav-item">
                    <a class="nav-link">Peers</a>
                  </li>
                </NavLink>

                <NavLink to="followers">
                  <li class="nav-item">
                    <a class="nav-link">Followers</a>
                  </li>
                </NavLink>

                <NavLink to="following">
                  <li class="nav-item">
                    <a class="nav-link">Following</a>
                  </li>
                </NavLink>
              </ul>
              {/* Route body */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMyNetworkSection;
