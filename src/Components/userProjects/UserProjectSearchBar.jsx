import React from "react";

function UserProjectSearchBar() {
  return (
    <>
      <div className="flex mb-2 project-searchbar-container">
        <div class="mb-3 mr-20 project-searchbar-text">
          <div class="input-border">
            <input
              class="form-control"
              type="text"
              placeholder="Project Title"
              id="example-text-input"
            />
          </div>
        </div>

        <div class="mb-3 row mr-8 project-searchbar-text">
          <div class="input-border">
            <input
              class="form-control"
              type="text"
              placeholder="Domain of Project"
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
  );
}

export default UserProjectSearchBar;
