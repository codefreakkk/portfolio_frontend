import React, { useState } from "react";
import { updateUserThemeById } from "../../api/themeApi";

function UserThemeCard({
  theme_no,
  selected,
  borderColor,
  themeName,
  themeDescription,
  updateTheme,
}) {
  const [themeState, setThemeState] = useState(true);

  function updateTheme() {
    setThemeState(false);
    (async () => {
      const result = await updateUserThemeById(theme_no);
      const data = result.data;
      if (data != null && data.success) {
        window.location.reload();
      } else {
        alert("Some error occured while selecting theme");
        window.location.reload();
      }
    })();
  }

  return (
    <>
      {themeState ? <div class="col-md-4" onClick={updateTheme}>
        <div class="card mini-stats-wid">
          <div class="card-body">
            <div class="d-flex">
              <div class="flex-grow-1">
                <p class="text-muted fw-medium">{themeName}</p>
                <h4 class="mb-0">1,235</h4>
              </div>

              <div class="flex-shrink-0 align-self-center">
                <div class="mini-stat-icon avatar-sm rounded-circle bg-primary">
                  <span class="avatar-title">
                    <i class="bx bx-copy-alt font-size-24"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>: "Selecting"}

      {themeState ? (
        <div class="col-lg-4 pointer" onClick={updateTheme}>
          <div class={`card border ${borderColor}`}>
            <div class="card-header bg-transparent border-primary">
              <h5 class="my-0 text-primary">
                <i class="mdi mdi-bullseye-arrow me-3"></i>
                {selected ? "Selected" : "Select this theme"}
              </h5>
            </div>
            <div class="card-body">
              <h5 class="card-title">{themeName}</h5>
              <p class="card-text">{themeDescription}</p>
            </div>
          </div>
        </div>
      ) : (
        "Selecting"
      )}
    </>
  );
}

export default UserThemeCard;
