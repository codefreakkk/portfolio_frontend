import React, { useState } from "react";
import { updateUserThemeById } from "../../api/themeApi";
import { ThreeDots } from "react-loader-spinner";

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
      {themeState ? (
        <div class="col-md-3 pointer" onClick={updateTheme}>
          <div class="card mini-stats-wid">
            <div class={`card-body border ${borderColor}`}>
              <div class="d-flex">
                <div class="flex-grow-1">
                  <p class="text-muted fw-medium">

                    <i class="mdi mdi-bullseye-arrow me-2"></i>
                    {selected ? <span style={{color : selected ? "blue": ""}}>Selected</span> : "Select this theme"}
                  </p>
                 <h4 class="mb-0">{themeName}</h4>
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
        </div>
      ) : (
        "Selecting"
      )}
    </>
  );
}

export default UserThemeCard;
