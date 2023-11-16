import React from "react";

function UserLinkCard({ image, title, description }) {
  return (
    <div class="card mini-stats-wid my-project-card-container input-border">
      <div class="card-body">
        <div class="d-flex flex-wrap">
          <div class="flex">
            <div className="icon mr-5">
              <img src={image} alt="" height="20" className="" />
            </div>
            <div>
              <h5 class="mb-0">{title}</h5>
              <p class="text-muted mb-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLinkCard;
