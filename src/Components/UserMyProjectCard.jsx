import React from 'react'

function UserMyProjectCard() {
  return (
    <>
        <div class="card mini-stats-wid my-project-card-container">
        <div class="card-body">
          <div class="d-flex flex-wrap">
            <div class="me-3">
              <h5 class="mb-0">Add Project</h5>
              <p class="text-muted mb-2">Add your projects to portfolio</p>
            </div>

            <div class="avatar-sm ms-auto">
              <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                <i class="bx bxs-book-bookmark"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserMyProjectCard