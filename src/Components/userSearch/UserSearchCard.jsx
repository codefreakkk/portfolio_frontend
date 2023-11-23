import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { followUser } from "../../api/UserApi";
import { ThreeDots } from "react-loader-spinner";

function UserSearchCard({
  user,
  uid,
  name,
  description,
  followState,
  setFollowState,
}) {
  const [followLoadingState, setFollowLoadingState] = useState(false);

  async function followSubmit() {
    setFollowLoadingState(true);
    const loggedInUserId = localStorage.getItem("uid");

    const result = await followUser({ follower_id: loggedInUserId, uid: uid });
    const data = result.data;
    if (data != null && data.success) {
      console.log(data);
      setFollowState(!followState);
      setFollowLoadingState(false);
      alert(data.message)
    } else {
      alert(result.response.data.message);
      console.log(result.response.data.message);
    }
  }

  return (
    <>
      <div class="col-xl-4 col-sm-6">
        <div class="card shadow-none border">
          <div class="card-body p-3">
            <div class="">
              <div class="float-end ms-2">
                <div class="dropdown mb-2">
                  <div class="font-size-12 text-muted follow-button">
                    {/* follow button */}
                    {followLoadingState ? (
                      <ThreeDots
                        height="15"
                        width="15"
                        radius="9"
                        color="gray"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                      />
                    ) : (
                      <div className="follow pointer" onClick={followSubmit}>
                        Follow
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div class="avatar-xs me-3 mb-3">
                <div class="avatar-title bg-transparent rounded">
                  {/* user image */}
                  <img src={user} alt="" height="35" className="user-image" />
                </div>
              </div>
              <div class="d-flex">
                <div class="overflow-hidden me-auto">
                  <h5 class="font-size-14 text-truncate mb-1">
                    <NavLink to={`/dashboard/user/${uid}`}>
                      <a class="text-body">{name}</a>
                    </NavLink>
                  </h5>
                  <p class="text-muted text-truncate mb-0">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSearchCard;
