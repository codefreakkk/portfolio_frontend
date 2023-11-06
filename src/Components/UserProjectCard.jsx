import React from "react";
import { NavLink } from "react-router-dom";

function UserProjectCard() {
  return (
    <>
      <div class="col-xl-4 col-sm-6">
        <div class="card shadow-none border">
          <div class="card-body p-3">
            <div class="">
              <div class="float-end ms-2">
                <div class="dropdown mb-2">
                  <div class="font-size-16 text-muted share-container">
                    <i class="bx bx-share-alt"></i>
                  </div>
                </div>
              </div>
              <div class="avatar-xs me-3 mb-3">
                <div class="avatar-title bg-transparent rounded">
                  <i class="bx bxs-folder font-size-24 text-warning"></i>
                </div>
              </div>
              <div class="d-flex">
                <div class="overflow-hidden me-auto">
                  
                  <NavLink to={`/dashboard/projects/12`}>
                    <div className="pointer">
                      <h5 class="font-size-14 text-truncate mb-1">
                        <a href="javascript: void(0);" class="text-body">
                          Devsinfo - Make your portfolio
                        </a>
                      </h5>
                    </div>
                  </NavLink>

                  <p class="text-muted text-truncate mb-0">
                    This project description
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProjectCard;
