import React, {useState, useEffect} from "react";
import user from "../../assets/images/users/avatar-1.jpg";
import UserMyNetworkMessage from "./UserMyNetworkMessage";
import { getFollowing } from "../../api/UserApi";
import UserCard from "./UserCard";

function FollowingComponent() {
  const [followerState, setFollowerState] = useState(false);
  const [userData, setUsers] = useState([]);

  useEffect(() => {
    const uid = localStorage.getItem("uid");

    (async () => {
      const result = await getFollowing(uid);
      const data = result.data;
      if (data != null && data.success) {
        setUsers(data.data);
        setFollowerState(true);
        console.log(data.data);
      } else {
        console.log(result);
      }
    })();
  }, []);

  return (
    <>
      {followerState ? (
        userData.length > 0 ? (
          <div className="">
            {/* <PeersComponentSearchBar /> */}

            <div className="row user-search-container mt-3">
              {userData.map((result, index) => {
                  return (<UserCard 
                    key={index}
                    user={user}
                    result={result.uid}
                  />)
              })}
            </div>
          </div>
        ) : (
          <div>
            <UserMyNetworkMessage title={"You dont't have any followers yet"} />
          </div>
        )
      ) : (
        <div className="mt-2">Loading</div>
      )}
    </>
  );
}

export default FollowingComponent;
