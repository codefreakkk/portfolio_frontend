import React from 'react'

function UserSearchBar() {
  return (
    <>
        <div className="flex mb-2">
          <div class="mb-3 mr-10">
            <div class="">
              <input
                class="form-control"
                type="text"
                placeholder="Username"
                id="example-text-input"
              />
            </div>
          </div>

          <div class="mb-3 mr-10">
            <div class="">
              <input
                class="form-control"
                placeholder="Company name"
                type="text"
                id="example-text-input"
              />
            </div>
          </div>

          <div class="mb-3 row mr-8">
            <div class="">
              <input
                class="form-control"
                type="text"
                placeholder="Experience"
                id="example-text-input"
              />
            </div>
          </div>
          <div>
            <button type="submit" class="btn btn-primary w-md">
              Search
            </button>
          </div>
        </div>
        </>
  )
}

export default UserSearchBar