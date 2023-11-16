import React from "react";

function UserThemeCard({ borderColor, themeName, themeDescription }) {
  return (
    <>
      <div class="col-lg-4">
        <div class={`card border ${borderColor}`}>
          <div class="card-header bg-transparent border-primary">
            <h5 class="my-0 text-primary">
              <i class="mdi mdi-bullseye-arrow me-3"></i>Choose your theme
            </h5>
          </div>
          <div class="card-body">
            <h5 class="card-title">{themeName}</h5>
            <p class="card-text">{themeDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserThemeCard;
