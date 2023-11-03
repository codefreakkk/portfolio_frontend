import React from 'react'

function UserProjectCard() {
  return (
    <>
        <div class="col-xl-4 col-sm-6">
        <div class="card shadow-none border">
          <div class="card-body p-3">
            <div class="">
              <div class="float-end ms-2">
                <div class="dropdown mb-2">
                  <a class="font-size-16 text-muted">
                    <i class="mdi mdi-dots-horizontal"></i>
                  </a>
                </div>
              </div>
              <div class="avatar-xs me-3 mb-3">
                <div class="avatar-title bg-transparent rounded">
                  <i class="bx bxs-folder font-size-24 text-warning"></i>
                </div>
              </div>
              <div class="d-flex">
                <div class="overflow-hidden me-auto">
                  <h5 class="font-size-14 text-truncate mb-1">
                    <a href="javascript: void(0);" class="text-body">
                      Design
                    </a>
                  </h5>
                  <p class="text-muted text-truncate mb-0">12 Files</p>
                </div>
                <div class="align-self-end ms-2">
                  <p class="text-muted mb-0">6 Likes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProjectCard