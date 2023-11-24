import React, { useEffect, useState } from "react";
import UserProjectSearchBar from "./UserProjectSearchBar";
import UserProjectCard from "./UserProjectCard";
import { getProjectPagination, getProjectSearch } from "../../api/projectApi";
import { useNavigate } from "react-router-dom";

function UserProjectSearchSection() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);
  const [message, setMessage] = useState(false);

  // search bar states
  const [projectName, setProjectName] = useState("");
  const [projectDomain, setProjectDomain] = useState("");
  const [resetState, setResetState] = useState(false);

  useEffect(() => {
    setState(false);
    setMessage(false);
    setProjectName("");
    setProjectDomain("");

    (async () => {
      const result = await getProjectPagination(page);
      const data = result.data;
      if (data != null && data.success) {
        setPageCount(data.pageCount);
        setData(data.data);
        setState(true);
      }
    })();
  }, [page, resetState]);

  async function submitSearch() {
    setState(false);
    setMessage(false);

    // get project
    const result = await getProjectSearch({
      project_name: projectName,
      project_domain: projectDomain,
    });
    const data = result.data;
    if (data != null && data.success) {
      setData(data.data);
      setState(true);
      setPageCount(1);

      if (data.data.length == 0) {
        setMessage(true);
      }
    } else {
      alert("Some error occured");
      localStorage.clear();
      navigate("/");
    }
  }

  return (
    <>
      <div className="user-project-container">
        <h5 className="mb-4">Projects</h5>
        <UserProjectSearchBar
          projectName={projectName}
          setProjectName={setProjectName}
          projectDomain={projectDomain}
          setProjectDomain={setProjectDomain}
          submitSearch={submitSearch}
          resetState={resetState}
          setResetState={setResetState}
        />

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
            {message ? "No projects to show" : ""}
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
