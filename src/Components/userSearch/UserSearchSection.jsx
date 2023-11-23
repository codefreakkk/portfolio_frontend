import React, { useState, useEffect } from "react";
import UserSearchCard from "./UserSearchCard";
import UserSearchBar from "./UserSearchBar";
import user from "../../assets/images/users/avatar-1.jpg";
import { getAllUsersPagination } from "../../api/UserApi";

function UserSearchSection() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);

  // follow button atestates
  const [followState, setFollowState] = useState(false);

  // grap user id
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    (async () => {
      const result = await getAllUsersPagination({uid, page});
      const data = result.data;
      if (data != null && data.success) {
        setPageCount(data.pageCount);
        setData(data.data);
        setState(true);
      }
    })();
  }, [page, followState]);

  return (
    <>
      <div className="user-project-container">
        <h5 className="title-border">Search</h5>
        <UserSearchBar />

        {/* Pagination starts */}
        <div class="pagination-container">
          <ul class="pagination justify-content-center pagination-rounded">
            <li className={page == 1 ? `page-item disabled` : `page-item`}>
              <span
                class="page-link"
                onClick={() => {
                  if (page == 1) {
                    return;
                  }
                  setPage(page - 1);
                  setData([]);
                  setState(false);
                }}
              >
                <i class="mdi mdi-chevron-left"></i>
              </span>
            </li>

            {Array(pageCount)
              .fill(null)
              .map((_, index) => {
                return (
                  <span>
                    <li
                      class={`page-item ${page == index + 1 ? "active" : ""}`}
                    >
                      <span class="page-link">{index + 1}</span>
                    </li>
                  </span>
                );
              })}

            <li class={page == pageCount ? `page-item disabled` : `page-item`}>
              <span
                class="page-link"
                onClick={() => {
                  if (page == pageCount) {
                    return;
                  }
                  setPage(page + 1);
                  setData([]);
                  setState(false);
                }}
              >
                <i class="mdi mdi-chevron-right"></i>
              </span>
            </li>
          </ul>
        </div>

        {/* Pagination ends */}

        <div className="row user-search-container">
          {state
            ? data.map((result, index) => {
                if (result._id == localStorage.getItem("uid")) {
                  return;
                }
                return (
                  <UserSearchCard
                    key={index}
                    user={user}
                    uid={result._id}
                    name={result.u_name}
                    description={result.u_description}
                    followState={followState}
                    setFollowState={setFollowState}
                  />
                );
              })
            : "Loading"}
        </div>
      </div>
    </>
  );
}

export default UserSearchSection;
