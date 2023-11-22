import React, { useEffect, useState } from "react";
import UserProjectSearchBar from "./UserProjectSearchBar";
import UserProjectCard from "./UserProjectCard";
import { getProjectPagination } from "../../api/projectApi";

function UserProjectSearchSection() {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await getProjectPagination(page);
      const data = result.data;
      if (data != null && data.success) {
        setPageCount(data.pageCount);
        setData(data.data);
        setState(true);
      }
    })();
  }, [page]);

  return (
    <>
      <div className="user-project-container">
        <h5 className="mb-4">Projects</h5>
        <UserProjectSearchBar />

        {/* Pagination start */}
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
        {/* Pagination end */}
        <div>
          <div className="row user-project-container-inner">
            {state
              ? data.map((result, index) => {
                  return (
                    <UserProjectCard
                      key={index}
                      projects={result}
                      state={false}
                    />
                  );
                })
              : "Loading"}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProjectSearchSection;
